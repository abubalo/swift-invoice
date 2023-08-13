import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center ">
      <ul className="hidden w-max  bg-gray-900 p-2 rounded-md md:flex">
        <li className="bg-black px-4 py-2 rounded-lg hover:bg-gray-950 transition-all ease-linear">
          <Link href={"#"}>Oveview</Link>
        </li>
        <li className="text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all ease-linear">
          <Link href={"#"}>Invoice</Link>
        </li>
        <li className="text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all ease-linear">
          <Link href={"#"}>Clients</Link>
        </li>
        <li className="text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all ease-linear">
          <Link href={"#"}>Settings</Link>
        </li>
        <li className="text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all ease-linear">
          <Link href={"#"}>Help</Link>
        </li>
      </ul>

      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
        aria-controls="navbar-cta"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <Link
        href={"/invoice"}
        className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/90"
      >
        Create Invoice
      </Link>
    </nav>
  );
};

export default Nav;
