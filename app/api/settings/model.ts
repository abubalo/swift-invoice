import mongoose from "mongoose";
import { Settings } from "@/app/types/types";

const settingsSchema = new mongoose.Schema<Settings>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  preferredCurrency: {
    type: String,
    required: true,
  },
  defaultTaxRate: {
    type: Number,
    required: true,
  },
});

const Settings = mongoose.models?.Settings || mongoose.model<Settings>("Settings", settingsSchema);

export default Settings;
