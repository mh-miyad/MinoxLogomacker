import LogoLayout from "@/Layout/LogoLayout";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen h-auto`}
      >
        <header className="h-14 bg-lime-300 w-full px-10 py-2 ">
          <nav className="">
            <h1 className="text-2xl font-semibold">Logo Maker</h1>
          </nav>
        </header>
        <LogoLayout>{children}</LogoLayout>
      </body>
    </html>
  );
}
