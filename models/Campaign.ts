import mongoose, { Document, Schema } from "mongoose";

interface ICampaign extends Document {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: "active" | "closed";
}

const campaignSchema = new Schema<ICampaign>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Campaign =
  mongoose.models.Campaign ||
  mongoose.model<ICampaign>("Campaign", campaignSchema);

export default Campaign;
