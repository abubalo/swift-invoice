import React, { useState } from "react";
import ServiceForm from "./ServiceForm";
import { FieldArray, useFormik , FieldArrayRenderProps} from "formik";

type Company = {
  companyName: string;
  address: string;
  phone: string;
  email: string;
};

type Customer = {
  billTo: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
};

type Service = {
  serviceName: string;
  quantity: number;
  price: number;
};

type InitialValues = {
  company: Company;
  customer: Customer;
  services: Service[];
};

const InvoiceForm = () => {
  const formik = useFormik({
    initialValues: {
      company: {
        companyName: "",
        address: "",
        phone: "",
        email: "",
      },
      customer: {
        billTo: "",
        customerName: "",
        customerAddress: "",
        customerEmail: "",
      },
      services: [
        {
          serviceName: "",
          quantity: 1,
          price: 0,
        },
      ],
    },

    onSubmit: (values: InitialValues) => {},
  });

  // const addServiceForm = (values: InitialValues) => {
  //   values.services.push({
  //     serviceName: "",
  //     quantity: 1,
  //     price: 0,
  //   });
  // };


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border border-gray-800 p-4 rounded-lg ">
        <h1 className="text-2xl font-semibold text-center my-3">
          Invoice Form
        </h1>

        
        <form
          action=""
          onSubmit={formik.handleSubmit}
          aria-label="Contact Us Form"
          className="space-y-3"
        >
          <div className="w-full flex gap-5 ">
            <div className="w-full space-y-3">
              <div id="" className="space-y-1">
                <label htmlFor="CompanyName">Company Name</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="CompanyName"
                  name="CompanyName"
                  placeholder="Your Comapany or Business Name"
                  value={formik.values.company.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Your Comapany or Business Name"
                />
              </div>
              <div id="" className="space-y-1">
                <label htmlFor="address">Address</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Your Comapany Address"
                  value={formik.values.company.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Your Comapany Address"
                />
              </div>
              <div id="" className="space-y-1">
                <label htmlFor="phone">Phone Number</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formik.values.company.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Comapany Phone Number"
                />
              </div>
              <div id="" className="space-y-1">
                <label htmlFor="email">Email</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formik.values.company.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Email address"
                />
              </div>
            </div>
            <div className="w-full space-y-3">
              <div id="customerAddress" className="">
                <label htmlFor="billTo">Bill To</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="BillTo"
                  name="BillTo"
                  placeholder="Address"
                  value={formik.values.customer.billTo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Customer address"
                />
              </div>
              <div id="" className="space-y-1">
                <label htmlFor="customerName">Customer Name</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="customerName"
                  name="customerName"
                  placeholder="Costomer name"
                  value={formik.values.customer.customerName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Customer Name"
                />
              </div>
              <div id="" className="space-y-1">
                <label htmlFor="address">Address</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Your Comapany Address"
                  value={formik.values.customer.customerAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
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
                  name="email"
                  placeholder="Email address"
                  value={formik.values.customer.customerEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-label="Email address"
                />
              </div>
            </div>
          </div>
          <FieldArray name="services">
            {(arrayHelplers: FieldArrayRenderProps) => (
              <div>
                {formik.values.services.map((_, index) => (
                  <ServiceForm
                    key={index}
                    index={index}
                    remove={() => arrayHelplers.remove(index)}
                  />
                ))}
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-950 hover:bg-gray-600"
                  onClick={() => {
                    arrayHelplers.push({
                      serviceName: "",
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
          <div>
            <button type="submit">Save draft</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
