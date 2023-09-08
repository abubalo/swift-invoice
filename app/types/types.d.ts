import { Document, ObjectId } from "mongoose"


export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

export interface ClientDocument extends Document {
  user: ObjectId;
  name: string;
  email: string;
  billingAddress: string;
}


export interface ItemDocument {
  name?: string;
  description: string
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CompanyDocument {
  user: ObjectId;
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface CustomerDocument {
  name: string;
  address: string;
  email: string;
}

export interface InvoiceDocument extends Document {
  company: CompanyDocument;
  customer: CustomerDocument;
  Items: ItemDocument[];
  invoiceNo: string;
  currency: string;
  issueDate: Date;
  dueDate: Date;
  paymentStatus: "Pending" | "Paid" | "Partially Paid";
  paymentHistory: {
    paymentDate: Date;
    amount: number;
  }[];
}




export interface Payment extends Document {
  invoice: ObjectId;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  status: string;
}

export interface Settings extends Document {
  user: ObjectId;
  preferredCurrency: string;
  defaultTaxRate: number;
}

export interface Notification extends Document {
  user: ObjectId;
  recipient: string;
  message: string;
  dateTime: Date;
}

export interface ActivityLog extends Document{
  user: ObjectId;
  action: string;
  timestamp: Date;
}



