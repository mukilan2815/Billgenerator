import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Bill from "@/lib/Model/Bill";
export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();

  try {
    const bills = await Bill.find()
      .select("data.template_data createdAt")
      .lean();

    const response = NextResponse.json(bills);

    return response;
  } catch (error) {
    console.error("Error fetching bills:", error);
    const errorResponse = NextResponse.json(
      { error: "Failed to fetch bills" },
      { status: 500 }
    );

    return errorResponse;
  }
}
