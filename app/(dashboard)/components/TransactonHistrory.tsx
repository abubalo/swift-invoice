import {
  Table,
  TableHeader,
  TableHeadCell,
  TableBody,
  TableRow,
  TableData,
  Caption,
} from "@/components/table/TableUtils";
import React from "react";

type InvoiceData = Array<{
  invoiceNumber: string;
  dateCreated: string;
  client: string;
  amount: number;
  status: string;
}>;

const TransactionHistory = () => {
  const invoiceData: InvoiceData = [
    {
      invoiceNumber: "PQ-4391C",
      dateCreated: "2023-07-15",
      client: "Alicia Rashford",
      amount: 1500,
      status: "unpaid",
    },
    {
      invoiceNumber: "RZ-9823A",
      dateCreated: "2023-06-28",
      client: "Acme Limited",
      amount: 2800,
      status: "paid",
    },
    {
      invoiceNumber: "TR-7734B",
      dateCreated: "2023-07-03",
      client: "XYZ Corporation",
      amount: 2100,
      status: "overdue",
    },

    {
      invoiceNumber: "SN-1287E",
      dateCreated: "2023-08-10",
      client: "Tech Solutions Inc.",
      amount: 3200,
      status: "installment",
    },
    {
      invoiceNumber: "VC-7123D",
      dateCreated: "2023-08-18",
      client: "Global Industries",
      amount: 7500,
      status: "void",
    },
    {
      invoiceNumber: "AP-2568G",
      dateCreated: "2023-07-29",
      client: "Marketing Innovators",
      amount: 4200,
      status: "pending",
    },
    {
      invoiceNumber: "PR-9321H",
      dateCreated: "2023-08-02",
      client: "Development Labs",
      amount: 1900,
      status: "processing",
    },
    {
      invoiceNumber: "QM-6729I",
      dateCreated: "2023-08-05",
      client: "Design Solutions",
      amount: 6200,
      status: "sent",
    },
    {
      invoiceNumber: "CN-5543J",
      dateCreated: "2023-07-21",
      client: "E-Commerce Enterprises",
      amount: 900,
      status: "paid",
    },
    {
      invoiceNumber: "OH-8765K",
      dateCreated: "2023-08-15",
      client: "Logistics Corp",
      amount: 2800,
      status: "hold",
    },
    {
      invoiceNumber: "DP-3287L",
      dateCreated: "2023-07-09",
      client: "Fashion House",
      amount: 3400,
      status: "disputed",
    },
    {
      invoiceNumber: "SP-0876M",
      dateCreated: "2023-08-08",
      client: "Online Retail Co.",
      amount: 1800,
      status: "pending",
    },
    {
      invoiceNumber: "PL-5542N",
      dateCreated: "2023-08-12",
      client: "Financial Services Ltd.",
      amount: 5000,
      status: "overdue",
    },
    {
      invoiceNumber: "PP-9900O",
      dateCreated: "2023-07-18",
      client: "Wellness Center",
      amount: 2700,
      status: "installment",
    },
  ];

  const statusColorMapping: { [status: string]: string } = {
    paid: "bg-green-500",
    unpaid: "border border-red-500 text-white",
    pending: "bg-yellow-500",
    late: "bg-red-500",
    overdue: "bg-red-400",
    processing: "bg-blue-500",
    sent: "bg-blue-300",
    void: "bg-gray-500",
    hold: "bg-gray-300",
    disputed: "bg-orange-500",
    installment: "bg-purple-500",
  };


  return (
    <div className="w-full" aria-describedby="transaction histories table">
      <Table className=" table-auto p-4 border border-gray-700 rounded-md">
        <Caption className="text-xl font-semibold text-left mb-3">
          Transaction histories
        </Caption>
        <TableHeader className="">
          <TableRow className="bg-gray-900">
            <TableHeadCell className="px-4 py-2 text-left">No:</TableHeadCell>
            <TableHeadCell className="px-4 py-2 text-left">
              Date Created
            </TableHeadCell>
            <TableHeadCell className="px-4 py-2 text-left">
              Client
            </TableHeadCell>
            <TableHeadCell className="px-4 py-2 text-left">
              Amount
            </TableHeadCell>
            <TableHeadCell className="px-4 py-2 text-left">
              Status
            </TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoiceData.splice(0, 10).map((invoice, index) => (
            <TableRow key={index} className="text-gray-300">
              <TableData className="border-y border-gray-500 px-4 py-2">
                {invoice.invoiceNumber}
              </TableData>
              <TableData className="border-y border-gray-500 px-4 py-2">
                {invoice.dateCreated}
              </TableData>
              <TableData className="border-y border-gray-500 px-4 py-2">
                {invoice.client}
              </TableData>
              <TableData className="border-y border-gray-500 px-4 py-2">
                {invoice.amount}
              </TableData>
              <TableData className="border-y border-gray-500 px-4 py-2">
                <span
                  className={`w-max  font-medium px-2 py-[0.15rem] text-sm text-center text-black leading-1 rounded-full ${
                    statusColorMapping[invoice.status] || ""
                  }`}
                >
                  {invoice.status}
                </span>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
