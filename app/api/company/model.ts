import mongoose from "mongoose";
import { CompanyDocument } from "@/app/types/types";

const CompanySchema = new mongoose.Schema<CompanyDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User",  required: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
});

const CompanyModel = mongoose.models?.Company || mongoose.model<CompanyDocument>("Company", CompanySchema);

export default CompanyModel;
