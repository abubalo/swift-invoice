import mongoose, { Schema, Model} from "mongoose";
import { UserDocument } from "@/app/types/types";


const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel: Model<UserDocument> = mongoose.models?.User || mongoose.model<UserDocument>("User", userSchema);

export default UserModel 
