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
      <main className="w-full h-auto p-3 space-y-10">
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
              <TableData className="text-left text-sm  py-2">
                Subtotal:
              </TableData>
              <TableData className="text-right text-sm py-2">$3, 000</TableData>
            </TableRow>
            <TableRow>
              <TableData className="text-left  text-sm py-2">
                Tax (8%):
              </TableData>
              <TableData className="text-right text-sm py-2">$128</TableData>
            </TableRow>
            <TableRow>
              <TableData className="text-left text-sm py-2">Total:</TableData>
              <TableData className="text-right text-sm py-2">$3,128</TableData>
            </TableRow>
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
                Services: The scope and details of the services provided are
                outlined in the attached contract or agreement.
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
    </section>
  );
};

export default InvoiceTemplate;
