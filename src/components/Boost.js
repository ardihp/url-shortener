import React from "react";

const Boost = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 py-16 bg-boost-desktop bg-cover bg-left md:bg-center bg-dark-violet">
      <p className="text-2xl md:text-4xl text-white font-bold">
        Boost your links today
      </p>
      <button className="bg-button-cyan hover:bg-teal-200 hover-transition text-white text-xl px-10 py-3 rounded-full font-bold">
        Get Started
      </button>
    </div>
  );
};

export default Boost;
