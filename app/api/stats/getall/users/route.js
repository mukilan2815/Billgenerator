import { NextResponse as res } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/Model/User";
import Payment from "@/lib/Model/Payment";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find()
      .populate({
        path: "payments",
        match: { mode: "pay" }, // Filter payments with mode "pay"
      })
      .lean();

    const response = res.json(users);

    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    const errorResponse = res.json({ error: "Error fetching users" });

    return errorResponse;
  }
}
