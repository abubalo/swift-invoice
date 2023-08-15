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


export interface IService {
  serviceName: string;
  quantity: number;
  price: number;
}

export interface ICompany {
  user: ObjectId;
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
  issueDate: Date | string;
  dueDate: Date | string;
  totalAmount: number;
}

export interface Payment extends Document {
  _id: ObjectId;
  invoice: ObjectId;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  status: string;
}

export interface Settings {
  _id: ObjectId;
  user: ObjectId;
  preferredCurrency: string;
  defaultTaxRate: number;
}

export interface Notification {
  _id: ObjectId;
  user: ObjectId;
  recipient: string;
  message: string;
  dateTime: Date;
}

export interface ActivityLog {
  _id: ObjectId;
  user: ObjectId;
  action: string;
  timestamp: Date;
}



