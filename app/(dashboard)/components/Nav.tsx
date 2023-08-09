import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <ul className="w-max flex bg-gray-900 p-2 rounded-md">
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

      <Link href={"/invoice"} className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/90">
        Create Invoice
      </Link>
    </nav>
  );
};

export default Nav;
