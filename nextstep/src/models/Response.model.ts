import mongoose, { Schema, Document, models, model, Types } from "mongoose";

export interface IResponse extends Document {
  userId: mongoose.Types.ObjectId;
  generalInfo: Record<string, string>;
  aptitude: Record<string, string>;
  careerPreferences: Record<string, string>;
  awareness: Record<string, string>;
  familyExpectations: Record<string, string>;
  skillsAndSelfEval?: Record<string, string>; // Optional in case not yet filled
  createdAt: Date;
}

const ResponseSchema: Schema = new Schema(
  {
    userId:{
      type:Schema.Types.ObjectId,
      required:true,
    },
    generalInfo: {
      type: Map,
      of: String,
    },
    aptitude: {
      type: Map,
      of: String,
      
    },
    careerPreferences: {
      type: Map,
      of: String,
      
    },
    awareness: {
      type: Map,
      of: String,
      
    },
    familyExpectations: {
      type: Map,
      of: String,
      
    },
    skillsAndSelfEval: {
      type: Map,
      of: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "responses" }
);

// Prevent model overwrite on hot reloads in dev
export default models.Response || model<IResponse>("Response", ResponseSchema);
