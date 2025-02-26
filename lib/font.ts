import { Poppins, Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const typo = localFont({
  src: "../public/typo-font.otf",
  variable: "--font-typo",
});
