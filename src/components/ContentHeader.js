import React from "react";
import Illustration from "../resources/images/illustration-working.svg";

const ContentHeader = () => {
  return (
    <div className="flex flex-col-reverse gap-8 sm:gap-12 lg:gap-0 lg:flex-row items-center pt-8 lg:pt-16 pb-48 w-full max-w-screen-xl">
      <div className="flex flex-col items-center lg:items-start justify-center lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl text-center lg:text-left font-bold leading-tight xl:leading-tight text-very-dark-violet">
          More than just shorter links
        </h1>
        <p className="text-md xl:text-xl md:w-8/12 lg:w-10/12 text-center lg:text-left mt-2 mb-6 lg:mb-10 text-grayish">
          Build your brand's recognation and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-button-cyan hover:bg-teal-200 hover-transition text-white text-xl px-10 py-4 rounded-full font-bold">
          Get Started
        </button>
      </div>
      <div className="relative left-20 sm:left-0 w-[465px] md:w-8/12 lg:w-1/2">
        <img src={Illustration} alt="Illustation Working" />
      </div>
    </div>
  );
};

export default ContentHeader;
