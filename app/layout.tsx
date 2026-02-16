import type { Metadata } from "next";
import { ReactNode } from "react";
import { Work_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Quinn Weber",
  description: "Personal website of Quinn Weber",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
