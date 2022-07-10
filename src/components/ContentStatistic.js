import React from "react";
import IconBrand from "../resources/images/icon-brand-recognition.svg";
import IconRecords from "../resources/images/icon-detailed-records.svg";
import IconCustom from "../resources/images/icon-fully-customizable.svg";

const ContentStatistic = () => {
  return (
    <div className="flex flex-col px-8 lg:px-14 xl:px-0 items-center bg-slate-100 relative">
      <div className="absolute px-8 lg:px-14 xl:px-0 -top-28 lg:-top-24 w-full max-w-screen-xl">
        <div className="flex flex-col lg:flex-row p-8 lg:p-14 gap-4 sm:gap-6 lg:gap-8 bg-dark-violet bg-shorten-desktop bg-cover bg-right-top sm:bg-center rounded-lg lg:rounded-xl">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="p-4 text-md sm:py-6 sm:px-8 sm:text-xl w-full lg:w-10/12 rounded-lg lg:rounded-xl"
          />
          <button className="bg-button-cyan hover:bg-teal-200 hover-transition text-white text-lg p-4 rounded-lg lg:rounded-xl w-full lg:w-2/12 font-bold">
            Shorten It!
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center pt-48 md:pt-56 pb-32 md:pb-40 gap-4">
        <p className="text-3xl md:text-4xl text-center font-bold">
          Advanced Statistics
        </p>
        <p className="text-md md:text-lg md:w-4/5 lg:w-3/5 text-center text-grayish">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center relative gap-10 lg:gap-8 mb-36 w-full max-w-screen-xl">
        <div className="absolute h-full lg:h-2 w-2 lg:w-full bg-button-cyan" />
        <div className="relative -top-10 gap-3 flex flex-col items-center lg:items-start bg-white rounded-lg p-8">
          <div className="absolute -top-8">
            <div className="flex items-center justify-center p-5 bg-dark-violet rounded-full">
              <img
                src={IconBrand}
                alt="Icon Brand Recognation"
                className="w-10 h-10"
              />
            </div>
          </div>
          <p className="text-2xl font-bold pt-11">Brand recognition</p>
          <p className="text-grayish text-center lg:text-left">
            Boost your brand recognation with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="relative gap-3 flex flex-col items-center lg:items-start bg-white rounded-lg p-8">
          <div className="absolute -top-8">
            <div className="flex items-center justify-center p-5 bg-dark-violet rounded-full">
              <img
                src={IconRecords}
                alt="Icon Brand Recognation"
                className="w-10 h-10"
              />
            </div>
          </div>
          <p className="text-2xl font-bold pt-11">Detailed Records</p>
          <p className="text-grayish text-center lg:text-left">
            Gain insights into who is clicking your links. knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="relative top-10 gap-3 flex flex-col items-center lg:items-start bg-white rounded-lg p-8">
          <div className="absolute -top-8">
            <div className="flex items-center justify-center p-5 bg-dark-violet rounded-full">
              <img
                src={IconCustom}
                alt="Icon Brand Recognation"
                className="w-10 h-10"
              />
            </div>
          </div>
          <p className="text-2xl font-bold pt-11">Fully Customizable</p>
          <p className="text-grayish text-center lg:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistic;
