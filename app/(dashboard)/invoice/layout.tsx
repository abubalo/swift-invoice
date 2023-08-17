import "../../globals.css";

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
      <link rel="favicon" href="/public/logo.svg" type="image/x-icon" />
      <body>
        {children}
      </body>
    </html>
  );
}
