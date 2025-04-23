import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const interTight = Inter_Tight({
  variable: "--interTight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Monumental = localFont({
  src: "../../public/fonts/Monumental.ttf",
  variable: "--Monumental",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | Furniture`,
    absolute: "Furniture",
  },
  description: "We sell the best bikes known to man.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${interTight.variable} ${Monumental.variable}`}>
        {children}
      </body>
    </html>
  );
}
