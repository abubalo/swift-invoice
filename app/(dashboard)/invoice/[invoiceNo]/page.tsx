import { selectInvoice } from "@/app/api/invoice/service";
import { notFound } from "next/navigation";
import React from "react";
import InvoiceTemplate from "../../components/InvoiceTemplate";

type Props = {
  params: {
    invoiceNo: string;
  };
};

const Preview = async ({params}: Props) => {
  const {invoiceNo} = params 

  const invoiceData = await selectInvoice(invoiceNo);

  if (!invoiceData) {
    return notFound(); // Return 404 page for invalid url
  }

  return (
    <main>
      <InvoiceTemplate data={invoiceData} />
    </main>
  );
}

export default Preview;
