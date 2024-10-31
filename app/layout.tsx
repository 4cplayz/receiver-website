import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/sections/Header";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

export const metadata: Metadata = {
  title: "IATO",
  description: "Intelligent Automatic Ticket Organiser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
