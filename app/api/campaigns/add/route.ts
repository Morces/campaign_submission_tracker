import connectDB from "@/lib/mongoose";
import Campaign from "@/models/Campaign";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const { name, description, start_date, end_date } = body;

    if (!name || !start_date || !end_date) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const newCampaign = new Campaign({
      name,
      description,
      start_date: new Date(start_date).toISOString(),
      end_date: new Date(end_date).toISOString(),
    });

    await newCampaign.save();

    return NextResponse.json({ newCampaign }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
