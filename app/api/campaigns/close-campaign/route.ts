import connectDB from "@/lib/mongoose";
import Campaign from "@/models/Campaign";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const { campaignId } = body;

    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return NextResponse.json(
        { message: "Campaign not found" },
        { status: 400 }
      );
    }

    const data: any = {
      status: "closed",
    };

    const updatedCampaign = await Campaign.findByIdAndUpdate(campaignId, data, {
      new: true,
    });

    return NextResponse.json({ updatedCampaign }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
