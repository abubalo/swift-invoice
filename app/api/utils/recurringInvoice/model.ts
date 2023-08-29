import mongoose, { Document } from "mongoose";

interface RecurringInvoice extends Document {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  client: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  frequency: string;
  nextDueDate: Date;
}

const recurringInvoiceSchema = new mongoose.Schema<RecurringInvoice>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  nextDueDate: {
    type: Date,
    required: true,
  },
});

const RecurringInvoice = mongoose.models?.RecurringInvoice ||  mongoose.model<RecurringInvoice>(
  "RecurringInvoice",
  recurringInvoiceSchema
);

export default RecurringInvoice;
