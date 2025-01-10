import connectDB from "@/lib/mongoose";
import Influencer from "@/models/Influencer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const influencers = await Influencer.find()
      .limit(limit)
      .sort({ start_date: -1 });

    return NextResponse.json({ influencers }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
