import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IResponseSummary extends Document {
  email: string;
  summary: string;
  createdAt: Date;
}

const ResponseSummarySchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
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
