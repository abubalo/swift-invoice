import "../globals.css";
import Header from "@/components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
