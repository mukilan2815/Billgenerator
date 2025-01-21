import { NextResponse as res } from "next/server";
import axios from "axios";
import { sha256 } from "js-sha256";
import dbConnect from "@/lib/dbConnect";

export async function GET(request, { params }) {
  await dbConnect(); // Ensure the database is connected
  const { id } = params;
  const merchantId = process.env.NEXT_PHONEPE_MERCHANT_ID;
  const transactionId = id;
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

    return res.json({ data: response.data });
  } catch (error) {
    console.error("Payment status check error:", error);
    return res.json({ error: error });
  }
}
