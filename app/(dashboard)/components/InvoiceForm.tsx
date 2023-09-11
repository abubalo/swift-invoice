"use client";

import React from "react";
import ItemForm from "./ItemForm";
import * as Yup from "yup"
import { FieldArray, FieldArrayRenderProps, Formik, Form } from "formik";
import Currency from "./Currency";
import {
  SellerDocument,
  BuyerDocument,
  ItemDocument,
  InvoiceDocument,
} from "@/app/types/types";
import RateInput from "./RateInput";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

type InitialValues = {
  seller: Omit<SellerDocument, "user">;
  client: BuyerDocument;
  items: ItemDocument[];
  tax: number;
  discount: number;
  currency: "USD" | "EUR" | "NGN" | "AUD" | "GBP";
};

const initialValues = {
  seller: {
    name: "",
    address: "",
    phone: "",
    email: "",
  },
  client: {
    name: "",
    address: "",
    email: "",
  },
  items: [
    {
      description: "",
      quantity: 1,
      unitPrice: 0,
      totalPrice: 0,
    },
  ],

  tax: 0,
  discount: 0,
  currency: "GBP" as "USD" | "EUR" | "NGN" | "AUD" | "GBP", //Initial value
};


// Define your Yup validation schema
const sellerSchema = Yup.object({
  name: Yup.string().min(1, "seller name is required"),
  address: Yup.string().min(1, "Address is required"),
  phone: Yup.string().min(1, "Phone number is required"),
  email: Yup.string().email("Invalid email address"),
});

const clientSchema = Yup.object({
  name: Yup.string().min(1, "client name is required"),
  address: Yup.string().min(1, "client address is required"),
  email: Yup.string().email("Invalid client email address"),
});

const itemSchema = Yup.object({
  description: Yup.string().min(1, "Item name is required"),
  quantity: Yup.number().min(1, "Quantity must be at least 1"),
  unitPrice: Yup.number().min(0, "Price must be a non-negative number"),
});

const valuesSchema = Yup.object({
  seller: sellerSchema,
  client: clientSchema,
  items: Yup.array(itemSchema), // Correct schema definition
});

const InvoiceForm = () => {
  const router = useRouter();
  
  const onSubmit = async (inputData: InitialValues) => {
    try {
      const response: AxiosResponse<InvoiceDocument> = await axios.post("api/invoice/", inputData);
      const data = response.data;
      console.log(data);

      router.push(`/preview?v=${data.invoice.number}`)
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section className="">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={valuesSchema}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-3  p-4 md:flex-row-reverse">
              <div className="w-full h-auto md:w-1/5 md:sticky  md:flex md:flex-col md:items-start md:justify-start md:space-y-2 md:p-2">
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full bg-primary p-2 rounded-md"
                  >
                    Review Invoice
                  </button>
                </div>
                <Currency
                  currency={formik.values.currency}
                  handleChange={formik.handleChange}
                />
                <RateInput
                  id="tax"
                  label="taxRate"
                  name="tax"
                  value={formik.values.tax}
                  handleChange={formik.handleChange}
                />
                <RateInput
                  id="discount"
                  label="discountRate"
                  name="discount"
                  handleChange={formik.handleChange}
                  value={formik.values.discount}
                />
              </div>
              <div className="w-full min-h-screen md:w-4/5">
                <div className="border border-gray-800 rounded-lg p-4">
                  <h1 className="text-2xl font-semibold text-center my-3">
                    Invoice Form
                  </h1>
                  <div className="w-full flex gap-5 ">
                    <div className="w-full space-y-3">
                      <div id="" className="space-y-1">
                        <label htmlFor="sellerName">Seller Name</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="sellerName"
                          name="seller.name"
                          value={formik.values.seller.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="Seller's name"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="address">Address</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="address"
                          name="seller.address"
                          value={formik.values.seller.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="Seller's Address"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="phone"
                          name="seller.phone"
                          value={formik.values.seller.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="Seller's Phone Number"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="email"
                          name="seller.email"
                          value={formik.values.seller.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="Seller's Email address"
                        />
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div id="" className="space-y-1">
                        <label htmlFor="clientName">client Name</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="clientName"
                          name="client.name"
                          value={formik.values.client.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="client Name"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="address">Address</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="address"
                          name="client.address"
                          placeholder=""
                          value={formik.values.client.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="Your Comapany Address"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                          type="text"
                          id="email"
                          name="client.email"
                          value={formik.values.client.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          aria-required="true"
                          aria-label="Email address"
                        />
                      </div>
                    </div>
                  </div>
                  <FieldArray name="items" className="mt-8">
                    {(arrayHelpers: FieldArrayRenderProps) => (
                      <div>
                        {/* Map through items and render itemForm */}
                        {formik.values.items.map((item, index) => (
                          <ItemForm
                            key={index}
                            index={index}
                            item={item}
                            handleChange={formik.handleChange}
                            remove={() => arrayHelpers.remove(index)}
                          />
                        ))}
                        {/* Add new item button */}
                        <button
                          type="button"
                          className="py-2 px-4 mt-2 bg-gray-900 hover:bg-gray-800"
                          onClick={() => {
                            // Insert a new item object
                            arrayHelpers.push({
                              name: "",
                              quantity: 1,
                              price: 0,
                            });
                          }}
                        >
                          Add new item +
                        </button>
                      </div>
                    )}
                  </FieldArray>
                  <div className="flex justify-end">
                    <div className="w-1/2 ">
                      <div className="flex justify-between p-2">
                        <span className="font-semibold">SubTotal:</span>
                        <span>
                          {formik.values.items
                            .reduce(
                              (acc, item) =>
                                acc + item.quantity * item.unitPrice,
                              0
                            )
                            .toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between p-2">
                        <span className="font-semibold">Tax:</span>
                        <span>{(formik.values.tax * 100).toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between p-2">
                        <span className="font-semibold">Discount:</span>
                        <span>
                          {(formik.values.discount * 100).toFixed(2)}%
                        </span>
                      </div>
                      <div className="flex justify-between p-2 border-t">
                        <span className="font-bold">Total:</span>
                        <span>
                          $
                          {(
                            formik.values.items.reduce(
                              (acc, item) =>
                                acc + item.quantity * item.unitPrice,
                              0
                            ) *
                            (1 + formik.values.tax - formik.values.discount)
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default InvoiceForm;
