import connectDB from "@/lib/mongoose";
import Influencer from "@/models/Influencer";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();

    const { userId, name, email } = body;

    const user = await Influencer.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const data: any = {};

    if (name) {
      data.name = name;
    }

    if (email) {
      data.email = email;
    }

    const updatedUser = await Influencer.findByIdAndUpdate(
      userId,
      { ...data, updatedAt: new Date(Date.now()).toISOString() },
      {
        new: true,
      }
    );

    return NextResponse.json({ updatedUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 400 }
    );
  }
}
