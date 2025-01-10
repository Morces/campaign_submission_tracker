import connectDB from "@/lib/mongoose";
import Campaign from "@/models/Campaign";
import Influencer from "@/models/Influencer";
import Submission from "@/models/Submission";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();

    const { influencerId, campaignId, contentUrl, description } = body;

    if (!influencerId || !campaignId || !contentUrl || !description) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const influencer = await Influencer.findById(influencerId);

    if (!influencer) {
      return NextResponse.json(
        { message: "Influencer not found" },
        { status: 400 }
      );
    }

    const campaign = await Campaign.findById(campaignId);

    if (!campaign) {
      return NextResponse.json(
        { message: "Campaign not found" },
        { status: 400 }
      );
    }

    const submission = await new Submission({
      influencer: influencerId,
      campaign: campaignId,
      contentUrl,
      description,
    });

    await submission.save();

    return NextResponse.json({ submission }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || "Internal server Error",
      },
      { status: 500 }
    );
  }
}
