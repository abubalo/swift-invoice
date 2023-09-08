import { InvoiceDocument } from "@/app/types/types";
import { NextResponse } from "next/server";
import { addInvoice } from "./service";

export const createInvoice = async (
  data: InvoiceDocument
): Promise<NextResponse> => {
  try {
    const response = await addInvoice(data);
    if (!response)
      return NextResponse.json({
        error: "Something went wrong, please try again!",
      });
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Unable to create invoice" },
      { status: 500 }
    );
  }
};
