import { NextResponse as res } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Payment from "@/lib/Model/Payment";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate"))
    : null;
  const endDate = searchParams.get("endDate")
    ? new Date(searchParams.get("endDate"))
    : null;
  const status = searchParams.get("status");

  await dbConnect();

  try {
    const query = { mode: "pay" };
    if (startDate && endDate) {
      query.createdAt = { $gte: startDate, $lte: endDate };
    }
    if (status) {
      query.status = status === "true";
    }

    const payments = await Payment.find(query).lean();

    const response = res.json(payments);

    return response;
  } catch (error) {
    console.error("Error fetching payments:", error);
    const errorResponse = res.json({ error: "Error fetching payments" });

    return errorResponse;
  }
}
