import { Schema, Model, model, models } from "mongoose";
import { InvoiceDocument } from "@/app/types/types";

// Define a shared schema for contact information
const SellerSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
}, {_id: false});

const BuyerSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  address: { type: String, require: true },
}, {_id: false});

const ItemSchema = new Schema({
  name: String,
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 },
  totalPrice: { type: Number, required: true, min: 0 },
}, {_id: false});

const PaymentSchema = new Schema({
  paymentDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {_id: false});

// Define the main schema
const InvoiceSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  invoice: {
    number: { type: String, required: true },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
  },
  seller: SellerSchema,
  client: BuyerSchema,
  items: [ItemSchema],
  subTotal: { type: Number, required: true },
  taxRate: { type: String, required: true },
  discountRate: { type: Number, required: true },
  discountAmount: { type: Number, required: true },
  total: { type: Number, required: true },
  currency: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Paid", "Due"],
    default: "Pending",
  },
  
},{ versionKey: false});

const InvoiceModel: Model<InvoiceDocument> =
  models?.Invoice || model<InvoiceDocument>("Invoice", InvoiceSchema);

export default InvoiceModel;
