import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IResponseSummary extends Document {
  userId: mongoose.Types.ObjectId;
  summary: string;
  createdAt: Date;
}

const ResponseSummarySchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User", 
    },
    summary: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "responseSummaries" }
);

// Prevent model overwrite on hot reloads in dev environment
export default models.ResponseSummary || model<IResponseSummary>("ResponseSummary", ResponseSummarySchema);
