import { useRouter } from "next/router";
import React from "react";
import InvoiceTemplate from "../components/InvoiceTemplate";

type Props = {};

function Preview({}: Props) {
  const router = useRouter();
  const { invoiceNumber } = router.query;

  if (!invoiceNumber) {
    return <div>This Invoice Does not Exist</div>;
  }
  return (
    <>
      hello there
      <InvoiceTemplate invoiceNo={invoiceNumber} />
    </>
  );
}

export default Preview;
