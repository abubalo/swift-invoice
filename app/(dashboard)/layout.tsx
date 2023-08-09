import DashboardHeader from "@/components/DashboardHeader";
import "../globals.css";

export const metadata = {
  title: "Swift invoice",
  description: "Generate invoice on the go",
};

export default function RootLayout({
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
