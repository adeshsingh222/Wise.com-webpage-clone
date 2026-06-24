import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wise Clone - International Money Transfers",
  description: "A pixel-perfect clone of the Wise hero section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-slate-900 bg-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
