import mongoose from "mongoose";
import { SellerDocument } from "@/app/types/types";

const CompanySchema = new mongoose.Schema<SellerDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User",  required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
});

const CompanyModel = mongoose.models?.Company || mongoose.model<SellerDocument>("Company", CompanySchema);

export default CompanyModel;
