import connectDB from "@/lib/mongoose";
import Influencer from "@/models/Influencer";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("userId");

    const user = await Influencer.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    await Influencer.findByIdAndDelete(userId);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
