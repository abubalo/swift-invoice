"use client";

import React from "react";
import InvoiceTemplate from "../components/InvoiceTemplate";
import InvoiceForm from "../components/InvoiceForm";
import Popup from "@/components/PopUp";

const Generate = () => {
  
  return (
    <section className="w-full">
      {/* <Popup isOpen="" onClose={""}>
        
      </Popup> */}
      <InvoiceTemplate />
      {/* <InvoiceForm /> */}
    </section>
  );
};

export default Generate;
