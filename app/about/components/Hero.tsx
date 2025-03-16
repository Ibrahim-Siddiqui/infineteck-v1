import Image from "next/image";
import React from "react";
import bgImg from "@/public/handshake.jpg";
const Hero = () => {
  return (
    <div className="relative w-scren h-screen sm:h-[60vh] xl:h-[70vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={bgImg}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h3 className="text-lg md:text-xl text-left">ABOUT US</h3>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Empowering{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Businesses
          </span>
          , Inspiring{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Innovation
          </span>
        </h1>
        <p className="text-md md:text-xl max-w-3xl min-w-sm text-gray-300 mb-8">
          At Infineteck, we’re more than a software company—we’re your partners
          in digital transformation. Founded with a passion for innovation, we
          empower businesses to thrive in a fast-paced digital world by merging
          creativity, technology, and strategy.
        </p>
        <a
          href="/contact"
          className="bg-primary-color text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;
