import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Caption = ({ children, className = "" }: Props) => (
  <caption className={className}>{children}</caption>
);

export const Table = ({
  children,
  className = "",
}: Props & { caption?: string }) => (
  <div className={`overflow-x-auto ${className}`}>
    <table
      className={`w-full table-auto ${className}`}
      aria-label="Data Table"
      aria-describedby="table-description"
    >
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children, className = "" }: Props) => (
  <thead className={className}>{children}</thead>
);

export const TableHeadCell = ({ children = "", className = "" }: Props) => (
  <th className={className}>{children}</th>
);

export const TableBody = ({ children, className = "" }: Props) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow = ({ children, className = "" }: Props) => (
  <tr className={className}>{children}</tr>
);

export const TableData = ({ className = "", children = "" }: Props) => (
  <td className={className}>{children}</td>
);
