"use client";

import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { useState, useEffect, useLayoutEffect } from "react";

import { links } from "@constants/constants";
import Link from "next/link";

const logo_font = Montserrat({
  subsets: ["latin"],
});

const NavBar = () => {
  const pathName = usePathname()

  const afterStyles =
    "after:w-0 after:h-0.5 after:bg-red-500 after:transition-all \
     after:delay-100 after:block after:m-auto after:hover:w-full after:rounded-full";

  const mobileNavShownStyles = "z-0 transform -translate-x-0";
  const mobileNavHiddenStyles = "z-20 transform translate-x-56";

  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [isNavTop, setIsNavTop] = useState(false);

  useEffect(() => {
    const toggleFixedNav = () => {
      if ((window.scrollY === 0) && (pathName == "/")) {
        setIsNavTop(true);
      } else {
        setIsNavTop(false);
      }
    };

    toggleFixedNav();
    // window.addEventListener("DOMContentLoaded", toggleFixedNav)
    window.addEventListener("scroll", toggleFixedNav);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between gap-4 px-20 md:px-8 lg:px-10 z-20 select-none transition-[padding] duration-200 ${
        isNavTop ? "bg-transparent py-5" : "bg-color-1 py-0 shadow-2xl"
      }`}
    >
      <Link href={`${pathName}/#`} className="flex items-center gap-2 py-2">
        <Image
          className="transition-all duration-75"
          src="/img/logo.png"
          width={isNavTop ? 100 : 60}
          height={isNavTop ? 100 : 60}
          alt="logo"
          draggable="false"
        />
        <span
          className={`${
            logo_font.className
          } text-white text-2xl font-extrabold ${
            !isNavTop ? "visible opacity-100" : "invisible opacity-0"
          } z-5`}
        >
          PAGD
        </span>
      </Link>
      <div
        className="flex items-center gap-10 mr-16 justify-evenly lg:hidden"
      >
        {links.map((link) => {
          return (
            <a
              key={link.name}
              href={link.to}
              className={`text-secondary-fg font-[500] ${afterStyles}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      <div
        className={`${
          mobileNavShown ? "visible bg-black/80" : "invisible bg-black/0"
        } fixed top-0 right-0 h-screen left-0 z-0 transition-all delay-100`}
        onClick={() => setMobileNavShown(!mobileNavShown)}
      ></div>
      <div className="relative z-20 hidden lg:block">
        <button
          className="hidden text-2xl font-bold text-secondary-fg lg:block"
          onClick={() => setMobileNavShown(!mobileNavShown)}
        >
          {mobileNavShown ? <span>&#9932;</span> : <span>&#9776;</span>}
        </button>
        <div
          className={`min-lg:hidden fixed ${
            mobileNavShown ? mobileNavShownStyles : mobileNavHiddenStyles
          } flex flex-col items-end mt-[22px] right-0 h-full
          bg-[#113436] w-56 transition-all duration-200 ease-in`}
        >
          {links.map((link) => {
            return (
              <a
                key={link.name}
                href={link.to}
                className={`text-secondary-fg font-medium border-b border-b-gray-400 w-full 
                           text-end px-6 py-4 hover:bg-color-1`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
