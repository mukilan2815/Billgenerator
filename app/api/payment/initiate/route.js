import { getServerSession } from "next-auth";
import { PhonepeCheckout } from "@/lib/phonepe-checkout";
import { NextResponse as res } from "next/server";
export async function POST(request) {
  const session = await getServerSession();
  const data = await request.json();

  if (session) {
    const initiate = await PhonepeCheckout(data.user, data.payment_info);
    console.log("initiate", initiate);
    return res.json({ status: true, url: initiate });
  } else {
    return res.json({ status: false, error: "You are not authorized" });
  }
}
