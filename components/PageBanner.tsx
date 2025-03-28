import React from "react";
import headerImg from "@/public/web-dev-service.jpg";
import Image, { StaticImageData } from "next/image";
export type ImageCardProps = {
  imageSrc: StaticImageData;
};
const PageBanner = ({ imgSrc, heading, text }: any) => {
  return (
    <div className="relative w-scren h-screen sm:h-[60vh] xl:h-[70vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h3 className="text-lg md:text-xl text-left uppercase">{heading}</h3>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            {text}
          </span>
        </h1>
        {/* <p className="text-md max-w-2xl text-gray-300 mb-8">
          As a business owner, you have specific objectives and a vision for
          their realization. Our web development experts are dedicated to
          producing technologically advanced products with unwavering
          commitment.
        </p> */}
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

export default PageBanner;
