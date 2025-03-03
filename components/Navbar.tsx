import Link from "next/link";
import Logo from "./Logo";
import { SquareMenu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "/", label: "About Me" },
  { href: "/", label: "My Works" },
  { href: "/", label: "My Studio" },
  { href: "/", label: "Contact Me" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 z-2">
      <Logo />

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center space-x-12 uppercase">
        {LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="font-body relative md:text-sm lg:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden z-10 relative">
        <Sheet>
          <SheetTrigger>
            <SquareMenu color="#1b1b1b" size={30} className="hover:scale-75" />
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle>
                <span className="hidden">Menu</span>
              </SheetTitle>
              <SheetDescription>
                <span className="hidden">Menu</span>
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-10 uppercase pt-12">
              {LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className=" relative text-4xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
