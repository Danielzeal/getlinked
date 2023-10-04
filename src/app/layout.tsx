import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "GetLinked",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} ${lora.variable} bg-primary text-white font-mont scroll-smooth`}
      >
        <div className='flex flex-col overflow-hidden'>
          <Header />
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}
