"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    setMenuActive(!menuActive);

    menuActive
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className="fixed z-999 flex h-24 w-full items-center justify-between bg-transparent">
      <Image
        src="/assets/logos/logo.png"
        alt="Euphoria Logo"
        width={130}
        height={54}
        className="ml-[50px]"
      />
      <ul
        className={`max-sm:center flex list-none gap-7 transition-all duration-300 ease-in-out max-lg:hidden max-sm:absolute max-sm:left-0 max-sm:block max-sm:h-[100vh] max-sm:w-full max-sm:bg-white max-sm:text-center [&_li]:text-base [&_li]:text-white max-sm:[&_li]:m-4 max-sm:[&_li]:text-black ${menuActive ? "top-0" : "max-sm:top-[calc(-100vh-50px)]"}`}
      >
        <li style={{ marginTop: "50px" }}>About</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>Company</li>
        <li>Resources</li>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-lg absolute top-4 right-4 hidden cursor-pointer text-black max-sm:block"
          viewBox="0 0 16 16"
          onClick={closeMenu}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </ul>
      <div
        className={`mr-[50px] flex gap-2.5 transition-all duration-300 ease-in-out max-sm:absolute max-sm:top-[230px] max-sm:w-full max-sm:justify-center [&_button]:w-25 [&_button]:cursor-pointer [&_button]:rounded-[100px] [&_button]:px-6 [&_button]:py-2.5 [&_button]:text-base [&_button]:outline-none ${menuActive ? "max-sm:flex" : "max-sm:hidden"}`}
      >
        <button className="max-sm:border-[theme(color.primary)] border border-white text-white max-sm:text-black">
          Sign in
        </button>
        <button className="bg-[theme(color.primary)] border border-transparent text-white">
          Register
        </button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        fill="currentColor"
        className="bi bi-list mr-22.5 hidden cursor-pointer text-white max-sm:block"
        viewBox="0 0 16 16"
        onClick={menuToggle}
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </div>
  );
};

export default Navbar;
