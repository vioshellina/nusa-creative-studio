
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import PageTransition from "../components/PageTransition";
import CustomCursor from "../components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nusa Creative Studio",
  description: "Creative digital agency company profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition />
        <ScrollReveal />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
