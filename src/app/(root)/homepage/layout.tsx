import type { Metadata } from "next";
import "./globals.css";
import { UserHeader } from "@/components/userHeader";
import { UserFooter } from "@/components/userFooter";


export const metadata: Metadata = {
  title: "retail store",
  description: "store to purchase the retail goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col min-h-screen">
      <UserHeader />
      <main className="flex-grow">{children}</main>
      <UserFooter />
    </section>
  );
}
