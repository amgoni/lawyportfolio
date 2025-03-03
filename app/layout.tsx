import type { Metadata } from "next";
import "./globals.css";
import { poppins, workSans, typo } from "@/lib/font";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
      <body
        className={`${poppins.variable} ${workSans.variable} ${typo.className} antialiased`}
      >
        <div className="relative w-5/6 mx-auto">
          <Navbar />
          <Image
            src="/images/background-sketch.png"
            alt="Opaque background sketch"
            width={541}
            height={737}
            className="absolute top-0 right-0 lg:-right-28 z-0"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
