import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.svg"
        className="h-8"
        width={50}
        height={50}
        alt="Swift invoice Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Swift Invoice
      </span>
    </Link>
  );
};

export default Logo;
