import type { Metadata } from "next";
import "./globals.css";
import { poppins, wokSans } from "@/lib/font";

export const metadata: Metadata = {
  title: "Lawal Yusuf",
  description: "Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${wokSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
