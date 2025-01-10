import connectDB from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const { email, password } = await req.json();
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
