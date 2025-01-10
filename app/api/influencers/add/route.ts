import connectDB from "@/lib/mongoose";
import Influencer from "@/models/Influencer";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const user = await Influencer.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    const hashePass = await bcrypt.hash(password, 10);

    const newUser = new Influencer({
      name,
      email,
      password: hashePass,
    });

    await newUser.save();

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 400 }
    );
  }
}
