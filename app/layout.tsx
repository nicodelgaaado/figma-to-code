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
  title: "Foodie - Order your favourite food",
  description: "Unlock a world of culinary delights, right at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen flex justify-center`}>
        <div className="w-full max-w-[430px] bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
