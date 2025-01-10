import connectDB from "@/lib/mongoose";
import Submission from "@/models/Submission";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);

    const submissionId = searchParams.get("submissionId");

    const submission = await Submission.findById(submissionId);

    if (!submission) {
      return NextResponse.json(
        { message: "submission not found" },
        { status: 400 }
      );
    }

    const updatedSubmission = await Submission.findByIdAndUpdate(
      submissionId,
      { status: "approved", updatedAt: new Date(Date.now()).toISOString() },
      { new: true }
    );

    return NextResponse.json({ updatedSubmission }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || "Internal server Error",
      },
      { status: 500 }
    );
  }
}
