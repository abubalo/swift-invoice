import { InvoiceDocument } from "@/app/types/types";
import dbConnect from "../utils/db";
import InvoiceModel from "./model";

dbConnect();
export const addInvoice = async (
  data: InvoiceDocument
): Promise<InvoiceDocument | null> => {
  try {
    const invoice = await InvoiceModel.create(data);
    return invoice;
  } catch (error: any) {
    console.log(error.message)
    return null;
  }
};

export const selectInvoice = async (
  invoiceNo: string
): Promise<InvoiceDocument | null> => {
  try {
    const invoice = await InvoiceModel.findOne({'invoice.number': invoiceNo});

    if (!invoice) {
      return null;
    }

    return invoice;
  } catch (error) {
    console.error("Error selecting invoice:", error);
    return null;
  }
};

export const selectAllInvoices = async (): Promise<
  InvoiceDocument[] | null
> => {
  try {
    const invoices = await InvoiceModel.find();
    return invoices;
  } catch (error) {
    return null;
  }
};

export const updateInvoice = async (
  id: string,
  data: Partial<InvoiceDocument>
): Promise<InvoiceDocument | null> => {
  try {
    const invoice = await InvoiceModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!invoice) {
      return null;
    }

    return invoice;
  } catch (error) {
    console.error("Error updating invoice:", error);
    return null;
  }
};

export const deleteInvoice = async (id: string): Promise<Boolean | null> => {
  try {
    const invoice = await InvoiceModel.findByIdAndDelete(id);
    return !!invoice;
  } catch (error) {
    return null;
  }
};
