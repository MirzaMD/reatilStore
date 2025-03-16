import type { Metadata } from "next";
import "./globals.css";
import { UserHeader } from "@/components/userHeader";
import { UserFooter } from "@/components/userFooter";


export const metadata: Metadata = {
  title: "contact us",
  description: "contacting information provided here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <section className="w-full h-full flex flex-col">
          <UserHeader/>
          {children}
          <UserFooter/>
       </section>
  );
}
