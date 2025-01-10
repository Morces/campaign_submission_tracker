import mongoose, { Document, Schema } from "mongoose";

interface ISubmission extends Document {
  influencer: mongoose.Types.ObjectId;
  campaign: mongoose.Types.ObjectId;
  contentUrl: string;
  description: string;
  status: "pending" | "approved" | "rejected";
  submitted_at: Date;
}

const submissionSchema = new Schema<ISubmission>(
  {
    influencer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Influencer",
      required: true,
    },
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    contentUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    submitted_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Submission =
  mongoose.models.Submission ||
  mongoose.model<ISubmission>("Submission", submissionSchema);

export default Submission;
