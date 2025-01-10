import connectDB from "@/lib/mongoose";
import Submission from "@/models/Submission";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const influencer = searchParams.get("influencer");
    const campaign = searchParams.get("campaign");

    const filter: any = {};

    if (influencer) {
      filter.influencer = influencer;
    }

    const submissions = await Submission.find(filter)
      .limit(limit)
      .sort({ start_date: -1 });

    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
