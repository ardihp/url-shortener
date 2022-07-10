import React, { useState } from "react";
import Logo from "../resources/images/logo.svg";

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between gap-8 h-20 md:h-28 font-bold w-full max-w-screen-xl relative">
      <div>
        <img src={Logo} alt="Logo Shortly" className="w-24 lg:mr-6" />
      </div>
      <div
        className={`flex flex-col md:flex-row justify-between w-full absolute md:static z-10 bg-dark-violet md:bg-transparent rounded-xl p-8 md:p-0 gap-6 divide-y-2 md:divide-y-0 divide-gray-100/20 ${
          isMenu ? "top-20" : "top-[-490px]"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 text-white md:text-grayish">
          <a
            href="/#"
            className="text-lg md:text-base hover:text-very-dark-violet"
          >
            Features
          </a>
          <a
            href="/#"
            className="text-lg md:text-base hover:text-very-dark-violet"
          >
            Pricing
          </a>
          <a
            href="/#"
            className="text-lg md:text-base hover:text-very-dark-violet"
          >
            Resources
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 pt-8 md:pt-0">
          <a
            href="/#"
            className="text-lg md:text-base text-white md:text-grayish hover:text-very-dark-violet"
          >
            Login
          </a>
          <a
            href="/#"
            className="text-lg md:text-base bg-button-cyan hover:bg-teal-200 hover-transition text-white px-5 py-3 md:py-2 rounded-full w-full text-center"
          >
            Sign Up
          </a>
        </div>
      </div>
      <div className="flex md:hidden" onClick={() => setMenu(!isMenu)}>
        <i className="fas fa-bars text-xl text-grayish" />
      </div>
    </div>
  );
};

export default Navbar;
