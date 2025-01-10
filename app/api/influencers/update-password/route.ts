import connectDB from "@/lib/mongoose";
import Influencer from "@/models/Influencer";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function PUT(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    const { userId, password } = body;

    const user = await Influencer.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found " }, { status: 400 });
    }

    const hassPass = await bcrypt.hash(password, 10);

    await Influencer.findByIdAndUpdate(
      userId,
      { password: hassPass },
      { new: true }
    );

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
