import Image from "next/image";
import React from "react";

const HeroReviews = () => {
  return (
    <>
      <div className="my-[5%] gap-2 flex justify-center items-center">
        <a href="https://clutch.co/profile/infineteck-0" target="_blank">
          <Image src="/clutch.webp" width={180} height={1} alt="Clutch Logo" />
        </a>
        <a href="https://share.google/H6AuSDgjJg0E6AIqo" target="_blank">
          <Image src="/google.webp" width={170} height={1} alt="Clutch Logo" />
        </a>
        <a
          href="https://www.yell.com/biz/infineteck-bury-st-edmunds-10967978"
          target="_blank"
        >
          <Image src="/yell.png" width={150} height={1} alt="Clutch Logo" />
        </a>
        <a
          href="https://uk.trustpilot.com/review/infineteck.com"
          target="_blank"
        >
          <Image
            src="/trust-pilot.png"
            width={200}
            height={1}
            alt="Clutch Logo"
          />
        </a>
      </div>
    </>
  );
};

export default HeroReviews;
