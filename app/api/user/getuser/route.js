import { getServerSession } from "next-auth";
import { NextResponse as res } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/Model/User";
import Bill from "@/lib/Model/Bill";
import Payment from "@/lib/Model/Payment";
export async function GET(request) {
  const session = await getServerSession();

  if (!session) {
    return res.json({ error: "You are not authorized" });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await dbConnect();

  try {
    const user = await User.findById(id)
      .populate("payments")
      .populate("bills")
      .lean();

    if (user) {
      return res.json(user);
    } else {
      return res.json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.json({ error: "Error fetching user" });
  }
}
