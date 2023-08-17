import {
  Table,
  TableBody,
  TableData,
  TableHeadCell,
  TableHeader,
  TableRow,
} from "@/components/table/TableUtils";
import Logo from "@/components/ui/Logo";
import React from "react";

const InvoiceTemplate = () => {
  return (
    <section className="absolute w-full h-auto top-0 left-0 bg-white text-black">
      <main className="w-full h-auto p-3 space-y-6">
        <div className="flex flex-col">
          <div id="" className="flex justify-between my-8">
            <Logo />
            <div className="text-sm">
              <p>
                <span className="font-semibold">Invoice No:</span> QT-348SN
              </p>
              <p>
                <span className="font-semibold">Issue Date:</span> 10th Nov,
                2023
              </p>
              <p>
                <span className="font-semibold">Due Date:</span> 15th Nov, 2023
              </p>
            </div>
          </div>
          <div id="invoice-header" className="flex justify-between">
            <div id="company-name" className=" text-sm">
              <h3 className="font-semibold text-lg">Acme Corp.</h3>
              <address>123 Main Street, CA.</address>
              <p>(123) 456-7890</p>
              <p>info@xyzsolutions.com</p>
            </div>
            <div className="flex flex-col">
              <div id="bill-to" className="">
                <h3 className="font-bold">Reciepient:</h3>
                <div className="text-sm">
                  <p>Wayne Enterprises</p>
                  <address>456 Oak Avenue, KN</address>
                  <p>account@wayne.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Table className="">
          <TableHeader className="text-left">
            <TableRow className="bg-primary text-white">
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
            <TableRow>
              <TableData className="py-2 border-y">
                Web Design Service
              </TableData>
              <TableData className="py-2 border-y">2</TableData>
              <TableData className="py-2 border-y">$500</TableData>
              <TableData className="py-2 border-y">$1,000</TableData>
            </TableRow>
            <TableRow>
              <TableData className="py-2 border-y">
                Copywriting Service
              </TableData>
              <TableData className="py-2 border-y">3</TableData>
              <TableData className="py-2 border-y">$100</TableData>
              <TableData className="py-2 border-y">$300</TableData>
            </TableRow>
            <TableRow>
              <TableData className="py-2 border-y">
                Graphics design Service
              </TableData>
              <TableData className="py-2 border-y">5</TableData>
              <TableData className="py-2 border-y">$500</TableData>
              <TableData className="py-2 border-y">$2500</TableData>
            </TableRow>
            <TableRow className="">
              <TableData colSpan={3} className="text-right text-sm ">
                Subtotal:
              </TableData>
              <TableData className=" text-sm">$3, 000</TableData>
            </TableRow>
            <TableRow>
              <TableData colSpan={3} className="text-right  text-sm">
                Tax (8%):
              </TableData>
              <TableData className=" text-sm">$128</TableData>
            </TableRow>
            <TableRow>
              <TableData colSpan={3} className="text-right text-sm">
                Total:
              </TableData>
              <TableData className=" text-sm">$3,128</TableData>
            </TableRow>
          </TableBody>
        </Table>
        <div className="space-y-2 text-sm">
          <div>
            <p>
              Please make the payment via bank transfer to the following
              account:
            </p>
            <p>Bank: Goldleaf Bank</p>
            <p>Account Number: 61191696</p>
          </div>
          <p>Thank you for doing business with us!</p>
        </div>
      </main>
    </section>
  );
};

export default InvoiceTemplate;
