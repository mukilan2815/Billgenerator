import { NextResponse as res } from "next/server";
import axios from "axios";
import { sha256 } from "js-sha256";
import { checkEnvironment } from "@/lib/checkenvironment";
import dbConnect from "@/lib/dbConnect";
import db from "@/lib/Model/methods"; // Import the db methods

export async function POST(request) {
  await dbConnect(); // Ensure the database is connected

  const data = await request.formData();
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");
  console.log(merchantId, transactionId);

  const PHONEPE_HOST = process.env.NEXT_PHONEPE_HOST;
  const endPoint =
    `/pg/v1/status/${merchantId}/${transactionId}` +
    process.env.NEXT_PHONEPE_SALT_KEY;

  const dataSha256 = sha256(endPoint);
  const xVerify = dataSha256 + "###" + process.env.NEXT_PHONEPE_SALT_INDEX;

  const options = {
    method: "GET",
    url: `${PHONEPE_HOST}/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);

    if (response.data.code === "PAYMENT_SUCCESS") {
      // Update payment status and user credit
      const paymentUpdated = await db.updatePaymentStatus(transactionId, true);

      if (!paymentUpdated) {
        throw new Error("Failed to update payment status");
      }

      return res.redirect(checkEnvironment().concat("/dashboard"), {
        status: 301,
      });
    } else {
      return res.redirect(checkEnvironment().concat("/payment/status/failed"), {
        status: 301,
      });
    }
  } catch (error) {
    console.error("Payment status check error:", error);
    return res.redirect(checkEnvironment().concat("/payment/status/failed"), {
      status: 301,
    });
  }
}
