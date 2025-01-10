import connectDB from "@/lib/mongoose";
import Campaign from "@/models/Campaign";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const campaigns = await Campaign.find()
      .limit(limit)
      .sort({ start_date: -1 });

    return NextResponse.json({ campaigns }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
