import mongoose, { Document } from "mongoose"


export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

export interface ClientDocument extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  email: string;
  billingAddress: string;
}


export interface IService {
  serviceName: string;
  quantity: number;
  price: number;
}

export interface ICompany {
  companyName: string;
  address: string;
  phone: string;
  email: string;
}

export interface ICustomer {
  billTo: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
}

export interface IInvoice extends Document {
  company: ICompany;
  customer: ICustomer;
  services: IService[];
}

export interface Payment extends Document {
  _id: mongoose.Types.ObjectId;
  invoice: mongoose.Types.ObjectId;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  status: string;
}

export interface Settings {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  preferredCurrency: string;
  defaultTaxRate: number;
}

export interface Notification {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  recipient: string;
  message: string;
  dateTime: Date;
}

export interface ActivityLog {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  action: string;
  timestamp: Date;
}



