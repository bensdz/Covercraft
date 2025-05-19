import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoverCraft",
  description: "Generate cover letters with ease",
  generator: "Fardev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
