"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/utils/hooks/AuthContext";
import Button from "@/components/ui/Button";

export type SinupData = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

type SetSubmit = {
  setSubmitting: (isSubmitting: boolean) => void;
};

const SignUp = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const onSubmit = async (values: SinupData, { setSubmitting }: SetSubmit) => {
    try {
      const { name, email, password } = values;
      const response = await axios.post("api/user", { name, email, password });
      setUser(response.data);
      if (response) {
        router.replace("/overview");
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirm: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password")], "Passwords must match"), // This checks if "confirm" matches "password"
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };

  return (
    <section className="h-auto flex items-center justify-center md:my-12">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => onSubmit(values, action)}
            validationSchema={formSchema}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="fullname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <Field
                    type="password"
                    name="confirm"
                    id="confirm"
                    value={values.confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" ••••••••"
                    autoComplete="current-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="confirm"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Field
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="/"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <Button>Create an account</Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
