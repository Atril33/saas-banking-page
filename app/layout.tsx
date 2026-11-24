import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"], 
});


export const metadata: Metadata = {
  title: "Saas Landing Page - Currency Converter",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable}  h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col items-center">{children}</body>
    </html>
  );
}
 