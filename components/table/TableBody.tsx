import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const TableBody = ({ children, className }: Props) => <tbody className={className}>{children}</tbody>;

export default TableBody;
