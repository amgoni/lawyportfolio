import { Poppins, Work_Sans } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const wokSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});
