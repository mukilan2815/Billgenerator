// app/api/payment/order/route.js

import Razorpay from "razorpay";
import dbConnect from "@/lib/dbConnect"; // Ensure the path is correct
import db from "@/lib/Model/methods"; // Adjust the path if necessary

const razorpay = new Razorpay({
  key_id: process.env.NEXT_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  const { userId, amount, currency, credits } = await req.json();

  await dbConnect();

  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: currency,
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);

    const paymentData = {
      id: order.id,
      user: userId,
      credit: credits,
      amount: amount,
      coupon: null,
      status: false,
      mode: "pay",
      gateway: "razorpay",
    };

    const paymentCreated = await db.createPayment(userId, paymentData);

    if (paymentCreated) {
      return new Response(
        JSON.stringify({ success: true, orderDetails: order }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, error: "Payment creation failed" }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
