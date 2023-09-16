"use client"

import DashboardHeader from "./components/DashboardHeader";
import "../globals.css";
import RequiredAuth from "../utils/RequiredAuth"

export const metadata = {
  title: "Swift invoice",
  description: "Generate invoice on the go",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      <body>
        <DashboardHeader />
        {children}
      </body>
    </html>
  );
}

export default RequiredAuth(RootLayout)