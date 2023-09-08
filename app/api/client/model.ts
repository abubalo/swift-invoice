import mongoose, {Model} from "mongoose";
import { ClientDocument } from "@/app/types/types";

const clientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});

const ClientModel: Model<ClientDocument> =
  mongoose.models?.Client ||
  mongoose.model<ClientDocument>("Client", clientSchema);

export default ClientModel;
