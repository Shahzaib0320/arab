import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kontric | Professional Construction Services",
  description: "Building visions into reality with precision and care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}