import dbConnect from "./api/utils/db";
import "./globals.css";

export const metadata = {
  title: "Swift invoice",
  description: "Generate invoice on the go",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
dbConnect();
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      <body>
        {children}
      </body>
    </html>
  );
}
