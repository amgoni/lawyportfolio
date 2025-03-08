import type { Metadata } from "next";
import "./globals.css";
import { poppins, workSans, typo } from "@/lib/font";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "./(sections)/Footer";

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
        <div className="relative w-10/12 mx-auto">
          <Navbar />
          <Image
            src="/images/background-sketch.png"
            alt="Opaque background sketch"
            width={541}
            height={737}
            className="absolute top-0 right-0 lg:-right-28 -z-10"
          />
          <Image
            src="/images/background-sketch-2.webp"
            width={800}
            height={800}
            alt="Background image showing a sketch of a building's skeleton"
            className="absolute -bottom-32 -left-32 -z-10 opacity-20"
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
