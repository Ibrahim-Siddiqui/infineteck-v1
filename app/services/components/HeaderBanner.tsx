import React from "react";
import headerImg from "@/public/web-dev-service-min.jpg";
import Image, { StaticImageData } from "next/image";
export type ImageCardProps = {
  imageSrc: StaticImageData;
};
const HeaderBanner = ({ imgSrc, title, text }: any) => {
  return (
    <div className="relative w-scren h-screen sm:h-[60vh] xl:h-[70vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
          priority={true}
          // width={100}
          sizes="(min-width: 375px) 425px, "
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-md max-w-2xl text-gray-300 mb-8">
          {text}
        </p>
        <a
          href="/contact"
          className="bg-primary-color text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeaderBanner;
