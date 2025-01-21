import { getServerSession } from "next-auth";

import { NextResponse as res } from "next/server";
import dbConnect from "@/lib/dbConnect";
import db from "@/lib/Model/methods";
export async function POST(request) {
  const session = await getServerSession();

  await dbConnect();
  const { userId, billData } = await request.json();
  console.log(userId, billData);
  if (session) {
    const bill = await db.createBill(userId, billData);
    return res.json(bill, { status: 201 });
  } else {
    return res.json({ error: "You are not authorized" });
  }
}
