import crypto from "crypto";
import db from "@/lib/Model/methods"; // Adjust the path as necessary

export async function POST(req) {
  const { userId, orderId, paymentId, signature } = await req.json();
  const RAZORPAY_KEY_SECRET = process.env.NEXT_RAZORPAY_KEY_SECRET;

  if (!RAZORPAY_KEY_SECRET) {
    console.error("RAZORPAY_KEY_SECRET is not defined");
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500 }
    );
  }

  const generatedSignature = crypto
    .createHmac("sha256", RAZORPAY_KEY_SECRET)
    .update(orderId + "|" + paymentId)
    .digest("hex");

  if (generatedSignature === signature) {
    try {
      await db.updatePaymentStatus(orderId, true);
      return new Response(
        JSON.stringify({
          success: true,
          message: "Payment verified successfully",
        }),
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to update payment status",
        }),
        { status: 500 }
      );
    }
  } else {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid signature" }),
      { status: 400 }
    );
  }
}
