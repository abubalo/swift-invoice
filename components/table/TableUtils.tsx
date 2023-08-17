"use client";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Caption: React.FC<Props> = ({ children, className = "" }) => (
  <caption className={className}>{children}</caption>
);

export const Table: React.FC<Props> = ({ children, className = "" }) => (
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

export const TableHeader: React.FC<Props> = ({ children, className = "" }) => (
  <thead className={className}>{children}</thead>
);

export const TableHeadCell: React.FC<Props & {colSpan?: number}> = ({
  children = "",
  className = "",
  colSpan = undefined
}) => <th colSpan={colSpan} className={className}>{children}</th>;

export const TableBody: React.FC<Props> = ({ children, className = "" }) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow: React.FC<Props> = ({ children, className = "" }) => (
  <tr className={className}>{children}</tr>
);

export const TableData: React.FC<Props & {colSpan?: number | undefined}> = ({
  className = "",
  children = "",
  colSpan = undefined
}) => <td colSpan={colSpan} className={className}>{children}</td>;
