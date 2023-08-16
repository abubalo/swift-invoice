import {
  Table,
  TableBody,
  TableData,
  TableHeadCell,
  TableHeader,
  TableRow,
} from "@/components/table/TableUtils";
import React from "react";

const InvoiceTemplate = () => {
  return (
    <section className="w-full h-auto flex justify-center">
      <main className="w-auto h-auto bg-slate-900 p-3 space-y-6">
        <div id="invoice-header" className="flex justify-between bg-slate-950">
          <div id="company-name" className="space-y-1">
            <h3>XYZ Solutions Inc.</h3>
            <address>123 Main Street, CA.</address>
            <p>(123) 456-7890</p>
            <p>info@xyzsolutions.com</p>
            <p>INV-2023-001</p>
            <p>August 3, 2023</p>
          </div>
          <div id="bill-to" className="space-y-1">
            <h3>Bill To</h3>
            <p>John Doe</p>
            <address>456 Oak Avenue, KN</address>
            <p>Johndoe@gmail.com</p>
          </div>
        </div>

        <Table className="">
          <TableHeader className="text-left">
            <TableRow>
              <TableHeadCell className="p-2">Discribtion</TableHeadCell>
              <TableHeadCell className="p-2">Quantity</TableHeadCell>
              <TableHeadCell className="p-2">Unit Price</TableHeadCell>
              <TableHeadCell className="p-2">Total</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody className="text-left">
            <TableRow>
              <TableData className="p-2">Web Design Service</TableData>
              <TableData className="p-2">2</TableData>
              <TableData className="p-2">$500</TableData>
              <TableData className="p-2">$1,000</TableData>
            </TableRow>
            <TableRow>
              <TableData className="p-2">Copywriting Service</TableData>
              <TableData className="p-2">3</TableData>
              <TableData className="p-2">$100</TableData>
              <TableData className="p-2">$300</TableData>
            </TableRow>
            <TableRow>
              <TableData colSpan={3} className="text-right">
                Subtotal:
              </TableData>
              <TableData className="p-2">$1,600</TableData>
            </TableRow>
            <TableRow>
              <TableData colSpan={3} className="text-right">
                Tax (8%):
              </TableData>
              <TableData className="p-2">$128</TableData>
            </TableRow>
            <TableRow>
              <TableData colSpan={3} className="text-right">
                Total:
              </TableData>
              <TableData className="p-2">$1,728</TableData>
            </TableRow>
          </TableBody>
        </Table>
        <div className="space-y-2 text-sm">
          <div>
            <p>
              Please make the payment via bank transfer to the following
              account:
            </p>
            <p>Bank: ABC Bank</p>
            <p>Account Number: 123456789</p>
            <p>Routing Number: 987654321</p>
            <p>Swift Code: ABCDEF123</p>

            <p>Payment Due Date: August 17, 2023</p>
          </div>
          <p>Thank you for doing business with us!</p>
        </div>
      </main>
    </section>
  );
};

export default InvoiceTemplate;
