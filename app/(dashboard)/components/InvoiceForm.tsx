"use client";

import React from "react";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
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
import { useAuth } from "@/app/utils/hooks/AuthContext";
import Button from "@/components/ui/Button";

export type InitialValues = {
  user: string;
  seller: Omit<SellerDocument, "user">;
  client: BuyerDocument;
  items: ItemDocument[];
  subTotal: number;
  taxRate: number;
  discountRate: number;
  discountAmount?: number;
  total: number;
  currency: "USD" | "EUR" | "NGN" | "AUD" | "GBP";
  paymentStatus: string;
};

// Define your Yup validation schema
const sellerSchema = Yup.object({
  name: Yup.string().required("seller name is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email address").required("Email address is required"),
});

const clientSchema = Yup.object({
  name: Yup.string().required("client name is required"),
  address: Yup.string().required("client address is required"),
  email: Yup.string().email("Invalid client email address").required("Email address is required"),
});

const itemSchema = Yup.object({
  description: Yup.string().required("Item description is required"),
  quantity: Yup.number().min(1).required("Quantity must be at least 1"),
  unitPrice: Yup.number().min(1).required("Price must be a non-negative number"),
});

const valuesSchema = Yup.object({
  seller: sellerSchema,
  client: clientSchema,
  items: Yup.array(itemSchema),

});

const InvoiceForm = () => {
  const router = useRouter();
  const { user } = useAuth();

  const initialValues = {
    user: user?.id,
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
    subTotal: 0,

    taxRate: 0,
    discountRate: 0,
    discountAmount: 0,
    total: 0,
    currency: "USD" as "USD" | "EUR" | "NGN" | "AUD" | "GBP",
    paymentStatus: "pending"
  };

  const onSubmit = async (inputData: InitialValues) => {
    try {
      const response: AxiosResponse<InvoiceDocument> = await axios.post(
        "/api/invoice",
        inputData
      );
      const data = response.data;
      const invoiceNumber = data.invoice?.number;

      router.replace(`/invoice/preview?v=${invoiceNumber}`);
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
        {({ values, errors, handleChange, handleBlur, touched }) => {
          console.log("errors", errors);
          console.log("Data: ", values)
          return (
            <Form className="flex flex-col gap-3  p-4 md:flex-row-reverse">
              <div className="w-full h-auto md:w-1/5 md:sticky  md:flex md:flex-col md:items-start md:justify-start md:space-y-2 md:p-2">
                <div className="w-full">
                  <Button
                    type="submit"
                    className="w-full bg-primary p-2 rounded-md"
                  >
                    Save & Preview
                  </Button>
                </div>
                <Currency
                  currency={values.currency}
                  handleChange={handleChange}
                />
                <RateInput
                  id="taxRate"
                  label="taxRateRate"
                  name="taxRate"
                  value={values.taxRate}
                  handleChange={handleChange}
                />
                <RateInput
                  id="discountRate"
                  label="discountRateRate"
                  name="discountRate"
                  handleChange={handleChange}
                  value={values.discountRate}
                />
              </div>
              <div className="w-full min-h-screen md:w-4/5">
                <div className="border border-gray-800 rounded-lg p-4 space-y-5">
                  <h1 className="text-2xl font-semibold text-center my-3">
                    Invoice Form
                  </h1>
                  <div className="w-full flex gap-5 ">
                    <div className="w-full space-y-3">
                      <div id="" className="space-y-1">
                        <label htmlFor="sellerName">Seller Name</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.seller?.name ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="sellerName"
                          name="seller.name"
                          value={values.seller.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="Seller's name"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="address">Address</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.seller?.address ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="address"
                          name="seller.address"
                          value={values.seller.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="Seller's Address"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.seller?.phone ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="phone"
                          name="seller.phone"
                          value={values.seller.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="Seller's Phone Number"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.seller?.email ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="email"
                          name="seller.email"
                          value={values.seller.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="Seller's Email address"
                        />
                      </div>
                    </div>
                    <div className="w-full space-y-3">
                      <div id="" className="space-y-1">
                        <label htmlFor="clientName">client Name</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.client?.name ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="clientName"
                          name="client.name"
                          value={values.client.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="client Name"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="address">Address</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.client?.address ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="address"
                          name="client.address"
                          placeholder=""
                          value={values.client.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="Your Comapany Address"
                        />
                      </div>
                      <div id="" className="space-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 leading-tight placeholder:text-gray-500 focus:outline-none ${errors?.client?.email ? "border-red-500" : "border-slate-500"}`}
                          type="text"
                          id="email"
                          name="client.email"
                          value={values.client.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-label="Email address"
                        />
                      </div>
                    </div>
                  </div>
                  <FieldArray name="items" >
                    {(arrayHelpers: FieldArrayRenderProps) => (
                      <div>
                        {/* Map through items and render itemForm */}
                        {values.items.map((item, index) => (
                          <ItemForm
                            key={index}
                            index={index}
                            item={item}
                            touched={touched}
                            errors={errors.items && errors.items[index]}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
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
                              description: "",
                              quantity: 1,
                              unitPrice: 0,
                              totalPrice: 0,
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
                          {(values.subTotal = values.items
                            .reduce(
                              (acc, item) =>
                                acc + item.quantity * item.unitPrice,
                              0
                            ))
                            .toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between p-2">
                        <span className="font-semibold">TaxRate:</span>
                        <span>{(values.taxRate * 100).toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between p-2">
                        <span className="font-semibold">DiscountRate:</span>
                        <span>{(values.discountRate * 100).toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between p-2 border-t">
                        <span className="font-bold">Total:</span>
                        <span>
                          $
                          {(values.total = (
                            values.items.reduce(
                              (acc, item) =>
                                acc + item.quantity * item.unitPrice,
                              0
                            ) *
                            (1 + values.taxRate - values.discountRate)
                          )).toFixed(2)}
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
