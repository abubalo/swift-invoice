"use client";

import {
  Table,
  TableBody,
  TableData,
  TableHeadCell,
  TableHeader,
  TableRow,
} from "@/components/table/TableUtils";
import { FC, useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import InvoiceModel from "@/app/api/invioce/model";
import { InvoiceDocument } from "@/app/types/types";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

type Props = {
  invoiceNo: string | string[];
};

async function getInvoiceData(
  invoiceNo: string | string[]
): Promise<InvoiceDocument | null> {
  try {
    return await InvoiceModel.findOne({ invoiceNo });
  } catch (error) {
    return null;
  }
}

const InvoiceTemplate: FC<Props> = ({ invoiceNo }) => {
  const [data, setData] = useState<InvoiceDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getInvoiceData(invoiceNo);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [invoiceNo]);

  if (!loading) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  if (!data) {
    return <div>Unable to fetch data</div>;
  }

  return (
    <section className="w-full h-auto top-0 left-0 bg-white text-black">
      <main className="w-full h-auto p-3 space-y-10">
        <div className="flex flex-col">
          <div id="" className="flex justify-between my-8">
            <Logo />
            <div className="text-sm">
              <p>
                <span className="font-semibold">Invoice No:</span>
                <span>{data.invoice.number}</span>
              </p>
              <p>
                <span className="font-semibold">Issue Date:</span>
                <span>{new Date(data.invoice.issueDate).toISOString()}</span>
              </p>
              <p>
                <span className="font-semibold">Due Date:</span>
                <span>{new Date(data.invoice.dueDate).toISOString()}</span>
              </p>
            </div>
          </div>
          <div id="invoice-header" className="flex justify-between">
            <div id="seller-name" className=" text-sm">
              <h3 className="font-semibold text-lg">{data.seller.name}</h3>
              <address>{data.seller.address}</address>
              <p>{data.seller.phone}</p>
              <p>{data.seller.email}</p>
            </div>
            <div className="flex flex-col">
              <div id="bill-to" className="">
                <h3 className="font-bold">Reciepient:</h3>
                <div className="text-sm">
                  <p>{data.client.name}</p>
                  <address>{data.client.address}</address>
                  <p>{data.client.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Table className="">
          <TableHeader className="text-left">
            <TableRow className="bg-black text-white">
              <TableHeadCell colSpan={1} className="p-2 border-y">
                Product Description
              </TableHeadCell>
              <TableHeadCell className="py-2 border-y">Quantity</TableHeadCell>
              <TableHeadCell className="py-2 border-y">
                Unit Price
              </TableHeadCell>
              <TableHeadCell className="py-2 border-y">Amount</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody className="text-left font-medium">
            {data.items.map((item, index) => (
              <TableRow key={index}>
                <TableData className="py-2 border-y">
                  {item.description}
                </TableData>
                <TableData className="py-2 border-y">{item.quantity}</TableData>
                <TableData className="py-2 border-y">
                  {item.unitPrice}
                </TableData>
                <TableData className="py-2 border-y">
                  {item.totalPrice}
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="space-y-2">
          <div className="text-sm">
            <h2 className="font-semibold text-lg">Payment Instructions:</h2>
            <p>
              Please make the payment via bank transfer to the following
              account:
            </p>
            <p>Bank: Goldleaf Bank</p>
            <p>Account Number: 61191696</p>
            <p>Swift Code: GLDBANKCODE</p>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-lg">Terms and Conditions:</h2>
            <p>
              <li>
                Payment: Full payment is due within 5 days of the invoice date.
                Late payments are subject to a 5% penalty.
              </li>
            </p>
            <p>
              <li>
                Currency: All amounts are in USD (United States Dollars) unless
                otherwise specified.
              </li>
            </p>
            <p>
              <li>
                Invoice Discrepancies: Any discrepancies must be reported within
                3 days of receiving the invoice.
              </li>
            </p>
            <p>
              <li>
                items: The scope and details of the items provided are outlined
                in the attached contract or agreement.
              </li>
            </p>
            <p>
              <li>
                Confidentiality: Both parties agree to maintain the
                confidentiality of all information shared during the project.
              </li>
            </p>
          </div>
          <p>
            Thank you for choosing Swift Invoice! For any inquiries, contact us
            at info@xyzsolutions.com.
          </p>
        </div>
      </main>
      {/* {invoiceData.map(data =>(
      ))} */}
    </section>
  );
};

export default InvoiceTemplate;
