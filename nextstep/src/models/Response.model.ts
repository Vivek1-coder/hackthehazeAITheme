import mongoose, { Schema, Document, models, model, Types } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface IResponse extends Document {
  email:string;
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
    email:{
      type:String,
      required:true,
      unique:true
    },
    generalInfo: {
      type: Map,
      of: String,
      required:false,
    },
    aptitude: {
      type: Map,
      of: String,
      default:{},
      required:true,
    },
    careerPreferences: {
      type: Map,
      of: String,
      required:false,
    },
    awareness: {
      type: Map,
      of: String,
      required:false,
    },
    familyExpectations: {
      type: Map,
      of: String,
      required:false,
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
