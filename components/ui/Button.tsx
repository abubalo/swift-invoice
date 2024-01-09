"use client";

import React, { KeyboardEvent, MouseEvent, ReactNode } from "react";
import {twMerge} from "tailwind-merge"

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  [key: string]: any // accept other props
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  rest,
  type="submit"
}: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    // Trigger onClick on pressing Enter or Space keys
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick(event as unknown as MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <button type={type} className={twMerge(`${className} w-full text-white dark:bg-primary bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-blue-800`)} onClick={handleClick} onKeyDown={handleKeyDown} {...rest}>
      {children}
    </button>
  );
};

export default Button;
