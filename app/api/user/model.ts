import { Schema, Model, model } from "mongoose";
import { UserDocument } from "@/app/types/types";


const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel: Model<UserDocument> = model("User", userSchema);

export default UserModel 
