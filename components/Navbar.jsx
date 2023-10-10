"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const router = useRouter();

  return (
    <nav>
      <div className={twMerge("container md:mx-auto px-4 md:px-0", className)}>
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-[#FF0066]">Haba</h1>
          </Link>
          <div className="hidden md:flex justify-between space-x-6">
            <Link href={"/"}>
              <h2>Home</h2>
            </Link>
            <Link href={"/about"}>
              <h2>About</h2>
            </Link>
            <Link href={"/events"}>
              <h2>Events</h2>
            </Link>
            <Link href={"/blog"}>
              <h2>User Stories</h2>
            </Link>
            <Link href={"/package"}> {/* changed from /membership */}
              <h2>Membership</h2>
            </Link>
            <Link href={"/contact"}>
              <h2>Contact Us</h2>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {/*<Link href={"/login"}>*/}
            {/*  <Button*/}
            {/*    className={`${*/}
            {/*      isHomePage*/}
            {/*        ? "text-cultured bg-transparent border border-[#FF0066]"*/}
            {/*        : "border border-[#FF0066] bg-transparent text-black hover:text-zinc-100"*/}
            {/*    }`}*/}
            {/*    title="Login"*/}
            {/*  />*/}
            {/*</Link>*/}

            <Link href={"/package"}>
              <Button title="Apply for Membership" />
            </Link>
          </div>
          {/* mobile buttons */}
          <div className="md:hidden">
            <button className="text-[#FF0066]" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col mt-4 md:hidden">
            <Link href={"/"}>
              <h2>Home</h2>
            </Link>
            <Link href={"/about"}>
              <h2>About</h2>
            </Link>
            <Link href={"/events"}>
              <h2>Events</h2>
            </Link>
            <Link href={"/blog"}>
              <h2>User Stories</h2>
            </Link>
            <Link href={"/membership"}>
              <h2>Membership</h2>
            </Link>
            <Link href={"/contact"}>
              <h2>Contact Us</h2>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
