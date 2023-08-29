import mongoose from "mongoose";
import { ClientDocument } from "@/app/types/types";

const clientSchema = new mongoose.Schema<ClientDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  billingAddress: { type: String, required: true },
});

const ClientModel: ClientDocument =
  mongoose.models?.Client ||
  mongoose.model<ClientDocument>("Client", clientSchema);

export default ClientModel;
