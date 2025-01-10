import connectDB from "@/lib/mongoose";
import Campaign from "@/models/Campaign";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const { campaignId, name, description, start_date, end_date } = body;

    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return NextResponse.json(
        { message: "Campaign not found" },
        { status: 400 }
      );
    }

    const data: any = {};

    if (name) {
      data.name = name;
    }

    if (description) {
      data.description = description;
    }

    if (start_date) {
      data.start_date = new Date(start_date).toISOString();
    }

    if (end_date) {
      data.end_date = new Date(end_date).toISOString();
    }

    const updatedCampaign = await Campaign.findByIdAndUpdate(
      campaignId,
      { ...data, updatedAt: new Date(Date.now()).toISOString() },
      {
        new: true,
      }
    );

    return NextResponse.json({ updatedCampaign }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
