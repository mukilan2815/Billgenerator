import { NextResponse as res } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Ensure this connects to your MongoDB
import db from "@/lib/Model/methods"; // Import the db methods

export async function POST(request) {
  await dbConnect(); // Ensure the database is connected

  try {
    const data = await request.json();
    const feedback = await db.createFeedback(data);

    if (feedback) {
      return res.json(feedback);
    } else {
      return res.json({ error: "Failed to add feedback" });
    }
  } catch (error) {
    console.error("Error adding feedback:", error);
    return res.json({ error: "Error adding feedback" });
  }
}
