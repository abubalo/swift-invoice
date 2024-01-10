import EditInvoiceForm from "../../../components/EditInvoiceForm";
import { selectAllInvoices, selectInvoice } from "@/app/api/invoice/service";
import { notFound } from "next/navigation";

type Props = {
  params: {
    invoiceNo: string;
  };
};

const Edit = async ({ params }: Props) => {
  const { invoiceNo } = params;

  const invoiceData = await selectInvoice(invoiceNo);

  if (!invoiceData) {
    return notFound(); // Return 404 page for invalid url
  }

  const temp = {
    invoice: {
      number: "1704811963759",
      issueDate: "2024-01-09T14:52:43.759Z",
      dueDate: "2024-01-09T14:52:43.759Z",
    },
    _id: "659d5dbb5ee89ebc7823daeb",
    user: "659965158fc054b2508a59ce",
    seller: {
      name: "Samson Dallas",
      address: "St Ave",
      email: "abubalogun6@gmail.com",
      client: {
        name: "golden plaza",
        email: "abyzynobalgun@gmail.com",
        address: "KG 277 st, Kigali",
      },
      items: [
        {
          description: "Web development",
          quantity: 1,
          unitPrice: 2000,
          totalPrice: 2000,
        },
      ],
      subTotal: 0,
      taxRate: 0,
      discountRate: 0,
      discountAmount: 0,
      total: 0,
      currency: "USD",
      status: "Pending",
    },
  };

  return (
    <div>
      <EditInvoiceForm data={invoiceData.toObject()} />
    </div>
  );
};

export default Edit;
