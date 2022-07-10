import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center py-16 bg-very-dark-violet px-8 lg:px-14 xl:px-0">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-16 md:gap-0 text-white w-full max-w-screen-xl">
        <p className="text-4xl font-bold">Shortly</p>
        <div className="flex flex-col md:flex-row items-center text-center md:items-start md:text-start gap-10 md:gap-16 lg:gap-24">
          <div className="flex flex-col gap-5">
            <p className="font-bold">Features</p>
            <div className="flex flex-col gap-3">
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Link Shortening
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Branded Links
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Analytics
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">Resources</p>
            <div className="flex flex-col gap-3">
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Blog
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Developers
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Support
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">Company</p>
            <div className="flex flex-col gap-3">
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                About
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Our Team
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Carrer
              </a>
              <a
                href="/#"
                className="text-grayish hover:text-button-cyan hover-transition"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex md:flex-col lg:flex-row items-start gap-6">
            <a href="/#">
              <i className="fab fa-facebook-square text-2xl text-white hover:text-button-cyan hover-transition" />
            </a>
            <a href="/#">
              <i className="fab fa-twitter text-2xl text-white hover:text-button-cyan hover-transition" />
            </a>
            <a href="/#">
              <i className="fab fa-pinterest text-2xl text-white hover:text-button-cyan hover-transition" />
            </a>
            <a href="/#">
              <i className="fab fa-instagram text-2xl text-white hover:text-button-cyan hover-transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
