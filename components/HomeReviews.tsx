import Image from "next/image";
import React from "react";

const HomeReviews = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h2 className="py-5 text-2xl md:text-5xl text-center font-bold leading-5">
          Your Voice Matters, Review{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Infineteck
          </span>
        </h2>
        <p className="text-md md:text-lg text-center">
          Loved working with Infineteck? Share your experience and help others
          discover the magic of Infineteck
        </p>
      </div>
      <div className="flex items-center md:gap-[5%]">
        <a href="https://clutch.co/profile/infineteck-0" target="_blank">
          <Image src="/clutch.webp" width={250} height={1} alt="Clutch Logo" />
        </a>
        <a href="https://share.google/H6AuSDgjJg0E6AIqo" target="_blank">
          <Image src="/google.webp" width={250} height={1} alt="Clutch Logo" />
        </a>
        <a
          href="https://www.yell.com/biz/infineteck-bury-st-edmunds-10967978"
          target="_blank"
        >
          <Image src="/yell.png" width={250} height={1} alt="Clutch Logo" />
        </a>
        <a
          href="https://uk.trustpilot.com/review/infineteck.com"
          target="_blank"
        >
          <Image
            src="/trust-pilot.png"
            width={250}
            height={1}
            alt="Clutch Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeReviews;
