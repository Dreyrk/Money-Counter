import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Money Counter",
  description: "Spending control",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-2 bg-body">{children}</body>
    </html>
  );
}
