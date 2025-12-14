import React from "react";
import decorativeTopRight from "../assets/hero-img/decorative-top-right.png";
import decorativeBottomRight from "../assets/hero-img/decorative-bottom-right.png";
import backgroundImage from "../assets/hero-img/background.png";
import decorativeTopLeft from "../assets/hero-img/decorative-top-left.png";
import decorativeBottomLeft from "../assets/hero-img/decorative-bottom-left.png";
import mainHeroImage from "../assets/hero-img/main-hero.png";

// Hero landing section component
export default function HeroSection() {
  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* Decorative top corner images */}
        <img
          src={decorativeTopRight}
          alt=""
          className="absolute top-0 right-0 w-32 sm:w-52 md:w-72 lg:w-84 h-24 sm:h-40 md:h-48 lg:h-56"
        />
        <img
          src={decorativeTopLeft}
          alt=""
          className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24"
        />

        {/* Main hero content section */}
        <section className="relative pt-20 sm:pt-28 md:pt-32 lg:pt-24 pb-12">
          <img
            src={backgroundImage}
            alt="bg"
            className="absolute bottom-0 left-0-translate-x-1/2 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%] h-auto"
          />
          <img
            src={mainHeroImage}
            alt="hero-main"
            className="z-50 absolute w-[60%] sm:w-[45%] md:w-[35%] lg:w-[30%] bottom-0 left-[30%] -translate-x-1/2 lg:left-30 lg:translate-x-0"
          />

          {/* Hero text content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 py-12 relative bottom-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden md:flex items-center justify-center"></div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left place-items-start max-w-[500px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-900 leading-tight font-rubik font-medium">
                Mendleson Communication and Engagement
              </h1>
              <p className="mt-4  text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 font-rubik font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Make a
                concise hero description here to match the design aesthetics.
              </p>
            </div>
          </div>

          {/* Decorative bottom corner images */}
          <img
            src={decorativeBottomLeft}
            alt=""
            className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 lg:w-45 h-24 sm:h-32 md:h-40 lg:h-100 z-20"
          />
          <img
            src={decorativeBottomRight}
            alt=""
            className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-36 lg:w-40 h-20 sm:h-28 md:h-36 lg:h-50 z-20"
          />
        </section>
      </div>
    </>
  );
}
