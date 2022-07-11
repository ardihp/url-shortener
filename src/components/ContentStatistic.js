import React, { useEffect, useState } from "react";
import IconBrand from "../resources/images/icon-brand-recognition.svg";
import IconRecords from "../resources/images/icon-detailed-records.svg";
import IconCustom from "../resources/images/icon-fully-customizable.svg";

const ContentStatistic = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const linkShorter = JSON.parse(localStorage.getItem("link_shorter"));

  useEffect(() => {
    url !== "" &&
      (url.toLowerCase().includes("http://") ||
        url.toLowerCase().includes("https://")) &&
      setError("");
  }, [url]);

  const handleShorten = async (e) => {
    e.preventDefault();
    if (url === "") {
      setError("Please add a link");
      return;
    }
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const response = await data.json();
    setUrl("");
    setError("");

    localStorage.setItem(
      "link_shorter",
      linkShorter
        ? JSON.stringify([
            { original: url, shorter: response.result?.short_link3 },
            ...linkShorter,
          ])
        : JSON.stringify([
            { original: url, shorter: response.result?.short_link3 },
          ])
    );
  };

  const handleCopy = (index) => {
    document
      .querySelector(`#button-${index}`)
      .classList.remove("bg-button-cyan");
    document.querySelector(`#button-${index}`).classList.add("bg-dark-violet");
    document.querySelector(`#button-${index}`).textContent = "Copied!";
    setTimeout(() => {
      document
        .querySelector(`#button-${index}`)
        .classList.remove("bg-dark-violet");
      document
        .querySelector(`#button-${index}`)
        .classList.add("bg-button-cyan");
      document.querySelector(`#button-${index}`).textContent = "Copy";
    }, 2000);
  };

  return (
    <div className="flex flex-col px-8 lg:px-14 xl:px-0 items-center bg-slate-100 relative">
      <div className="absolute px-8 lg:px-14 xl:px-0 -top-28 lg:-top-24 w-full max-w-screen-xl">
        <form
          onSubmit={handleShorten}
          className="flex flex-col lg:flex-row items-start p-8 lg:p-14 gap-4 sm:gap-6 lg:gap-8 bg-dark-violet bg-shorten-desktop bg-cover bg-right-top sm:bg-center rounded-lg lg:rounded-xl"
        >
          <div className="flex flex-col w-full lg:w-10/12 relative">
            <input
              type="url"
              placeholder="Shorten a link here..."
              className={`p-4 text-md sm:py-6 sm:px-8 sm:text-xl w-full rounded-lg lg:rounded-xl ${
                error && "ring-4 ring-red-400 placeholder:text-red-400/75"
              }`}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {error && (
              <small className="absolute -bottom-9 text-lg italic text-red-400">
                {error}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="bg-button-cyan hover:bg-teal-200 hover-transition text-white text-lg py-6 rounded-lg lg:rounded-xl w-full lg:w-2/12 font-bold"
          >
            Shorten It!
          </button>
        </form>
      </div>
      {linkShorter && (
        <div className="flex flex-col gap-4 mt-32 sm:mt-36 lg:mt-28 items-center w-full max-w-screen-xl">
          {linkShorter.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center bg-white py-4 px-6 rounded-lg w-full"
            >
              <p className="border-b-2 md:border-0 text-center md:text-left w-full pb-3 md:pb-0 truncate">
                {item.original}
              </p>
              <div className="flex items-center gap-5 pt-3 md:pt-0">
                <p
                  className="text-button-cyan cursor-pointer"
                  onClick={() =>
                    window.open(`https://${item.shorter}`, "_blank")
                  }
                >
                  {item.shorter}
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(item.shorter);
                    handleCopy(index);
                  }}
                  className="bg-button-cyan w-28 py-2 rounded-md text-white text-sm font-bold transition duration-500 ease-in"
                  id={`button-${index}`}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        className={`flex flex-col items-center ${
          linkShorter ? "pt-32 md:pt-40" : "pt-48 md:pt-56"
        } pb-32 md:pb-40 gap-4`}
      >
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
