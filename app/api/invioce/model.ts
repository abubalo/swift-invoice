import { Schema, Model, model, models } from "mongoose";
import { InvoiceDocument } from "@/app/types/types";

// Define a shared schema for contact information
const CompanySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
});

const BuyerSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
})
const ItemSchema = new Schema({
  name: String,
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 },
  totalAmount: { type: Number, required: true, min: 0 },
});

const PaymentSchema = new Schema({
  paymentDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Assuming a user is associated with payments
});

// Define the main schema
const InvoiceSchema = new Schema({
  seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
  invoiceNo: { type: String, required: true },
  company: CompanySchema,
  buyer: BuyerSchema,
  items: [ItemSchema],
  currency: { type: String, required: true },
  issueDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Partially Paid"],
    default: "Pending",
  },
  paymentHistory: [PaymentSchema],
});

const InvoiceModel: Model<InvoiceDocument> =
  models?.Invoice || model<InvoiceDocument>("Invoice", InvoiceSchema);

export default InvoiceModel;
