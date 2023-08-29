import { Schema, Model, model, models } from "mongoose";
import { InvoiceDocument } from "@/app/types/types";

// Define the subdocument schemas
const CompanySchema = new Schema({
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const CustomerSchema = new Schema({
  billTo: { type: String, required: true },
  customerName: { type: String, required: true },
  customerAddress: { type: String, required: true },
  customerEmail: { type: String, required: true },
});

const ServiceSchema = new Schema({
  serviceName: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
});
const PaymentSchema = new Schema({
  paymentDate: { type: Date, required: true },
  amount: { type: Number, required: true },
});

// Define the main schema
const InvoiceSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  company: CompanySchema,
  customer: CustomerSchema,
  services: [ServiceSchema],
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

const InvoiceModel: Model<InvoiceDocument> = models?.Invoice || model<InvoiceDocument>("Invoice", InvoiceSchema);

export default InvoiceModel;
