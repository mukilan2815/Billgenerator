import { NextResponse as res } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/Model/User";
import Payment from "@/lib/Model/Payment";
import Bill from "@/lib/Model/Bill";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate"))
    : null;
  const endDate = searchParams.get("endDate")
    ? new Date(searchParams.get("endDate"))
    : null;
  const status = true;

  await dbConnect();

  try {
    const userQuery = {};
    const paymentQuery = { mode: "pay" };
    const billQuery = {};

    if (startDate && endDate) {
      userQuery.createdAt = { $gte: startDate, $lte: endDate };
      paymentQuery.createdAt = { $gte: startDate, $lte: endDate };
      billQuery.createdAt = { $gte: startDate, $lte: endDate };
    }
    if (status) {
      paymentQuery.status = status === true;
    }

    const totalUsers = await User.countDocuments(userQuery);
    const totalPayments = await Payment.countDocuments(paymentQuery);
    const totalBills = await Bill.countDocuments(billQuery);

    return res.json({ totalUsers, totalPayments, totalBills });
  } catch (error) {
    console.error("Error fetching summary statistics:", error);
    return res.json({ error: "Error fetching summary statistics" });
  }
}
