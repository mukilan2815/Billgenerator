import uniqid from "uniqid";
import { sha256 } from "js-sha256";
import axios from "axios";
import { checkEnvironment } from "./checkenvironment";
import dbConnect from "@/lib/dbConnect"; // Ensure the path is correct
import db from "./Model/methods"; // Adjust the path if necessary

export const PhonepeCheckout = async (user, payment_info) => {
  // Ensure the database is connected
  await dbConnect();

  const PHONEPE_HOST = process.env.NEXT_PHONEPE_HOST;
  const MERCHANT_ID = process.env.NEXT_PHONEPE_MERCHANT_ID;
  const SALT_KEY = process.env.NEXT_PHONEPE_SALT_KEY;
  const SALT_INDEX = process.env.NEXT_PHONEPE_SALT_INDEX;
  const payEndpoint = "/pg/v1/pay";
  const uniqueId = uniqid();
  const merchantTransactionId = `TR-${uniqueId}`;
  const merchantUserId = user.email;
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: merchantUserId,
    amount: payment_info.amount * 100,
    redirectUrl: checkEnvironment().concat(
      `/api/payment/status/${merchantTransactionId}`
    ),
    redirectMode: "POST",
    callbackUrl: checkEnvironment().concat(
      `/api/payment/status/${merchantTransactionId}`
    ),
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };
  const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
  const base64Payload = bufferObj.toString("base64");
  const xVerify =
    sha256(base64Payload + payEndpoint + SALT_KEY) + "###" + `${SALT_INDEX}`;

  const options = {
    method: "post",
    url: PHONEPE_HOST + payEndpoint,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify,
    },
    data: {
      request: base64Payload,
    },
  };

  const payinit = await axios
    .request(options)
    .then(async function (response) {
      console.log("first response", response);
      const url = response.data.data.instrumentResponse.redirectInfo.url;
      console.log(url);

      // Use createPayment method to push credit
      const paymentData = {
        id: merchantTransactionId,
        credit: payment_info.credit,
        amount: payment_info.amount,
        offer: payment_info.offer,
        coupon: null,
        status: false,
        mode: "pay",
        gateway: "phonepe",
      };
      const paymentCreated = await db.createPayment(user.id, paymentData);

      if (paymentCreated) {
        return url; // Return the URL for redirection
      } else {
        console.log("Payment push credit error");
        return null;
      }
    })
    .catch(function (error) {
      console.log("Payment initiate error");
      console.error(error);
      return null;
    });

  return payinit;
};
