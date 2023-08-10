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
      status: "partial payment",
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
      status: "late",
    },
    {
      invoiceNumber: "PP-9900O",
      dateCreated: "2023-07-18",
      client: "Wellness Center",
      amount: 2700,
      status: "installment",
    },
  ];

  console.log(invoiceData);

  return (
    <div className="w-full p-4 space-y-3 border border-gray-700 rounded-md">
      <div>
        <h1 className="text-xl font-semibold">Histories</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-500">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left">No:</th>
              <th className="px-4 py-2 text-left">Date Created</th>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoice, index) => (
              <tr key={index}>
                <td className="border-y border-gray-500 px-4 py-2">
                  {invoice.invoiceNumber}
                </td>
                <td className="border-y border-gray-500 px-4 py-2">
                  {invoice.dateCreated}
                </td>
                <td className="border-y border-gray-500 px-4 py-2">
                  {invoice.client}
                </td>
                <td className="border-y border-gray-500 px-4 py-2">
                  {invoice.amount}
                </td>
                <td className="border-y border-gray-500 px-4 py-2">
                  {invoice.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
