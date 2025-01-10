import connectDB from "@/lib/mongoose";
import Campaign from "@/models/Campaign";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const { searchParams } = new URL(req.url);

    const campaignId = searchParams.get("campaignId");

    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return NextResponse.json(
        { message: "Campaign not found" },
        { status: 400 }
      );
    }

    return NextResponse.json({ campaign }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
