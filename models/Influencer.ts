import mongoose, { Document, Schema } from "mongoose";

interface IInfluencer extends Document {
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

const influencerSchema = new Schema<IInfluencer>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Influencer =
  mongoose.models.Influencer ||
  mongoose.model<IInfluencer>("Influencer", influencerSchema);

export default Influencer;
