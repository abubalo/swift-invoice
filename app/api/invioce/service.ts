import { IInvoice } from "@/app/types/types";
import InvoiceModel from "./model";

export const addInvoice = async (data: IInvoice): Promise<IInvoice | null> => {
  try {
    const invoice = await InvoiceModel.create(data);
    return invoice;
  } catch (error) {
    return null;
  }
};

export const selectInvoice = async (
  data: IInvoice
): Promise<IInvoice | null> => {
  try {
    const invoice = await InvoiceModel.create(data);
    return invoice;
  } catch (error) {
    return null;
  }
};

export const selectAllInvoices = async (
  data: IInvoice
): Promise<IInvoice | null> => {
  try {
    const invoice = await InvoiceModel.create(data);
    return invoice;
  } catch (error) {
    return null;
  }
};

export const updateInvoice = async (
  data: IInvoice
): Promise<IInvoice | null> => {
  try {
    const invoice = await InvoiceModel.create(data);
    return invoice;
  } catch (error) {
    return null;
  }
};

export const deleteInvoice = async (
  data: IInvoice
): Promise<IInvoice | null> => {
  try {
    const invoice = await InvoiceModel.create(data);
    return invoice;
  } catch (error) {
    return null;
  }
};
