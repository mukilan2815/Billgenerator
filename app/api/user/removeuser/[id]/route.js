import { NextResponse } from "next/server";
import db from "@/lib/Model/methods";
import dbConnect from "@/lib/dbConnect";

export async function DELETE(request, { params }) {
  // const { id } = params;

  // await dbConnect();

  // const success = await db.removeUser(id);

  // if (success) {
  //   return NextResponse.json({
  //     message: "User and associated data removed successfully",
  //   });
  // } else {
  //   return NextResponse.json(
  //     { error: "Failed to remove user and associated data" },
  //     { status: 500 }
  //   );
  // }

  return NextResponse.json(
    { error: "Failed to remove user and associated data" },
    { status: 500 }
  );
}
