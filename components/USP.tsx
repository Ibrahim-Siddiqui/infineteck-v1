import Image from "next/image";
import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import Link from "next/link";
import { motion } from "framer-motion";
const USPData = [
  {
    id: 1,
    title: "Creative Branding",
    desc: "Build a brand that inspires trust, loyalty, and action.",
    image: "/branding.svg",
  },
  {
    id: 2,
    title: "Digital Presence",
    desc: "Dominate search engines, social media, and your market.",
    image: "/digital-presence.svg",
  },
  {
    id: 3,
    title: "Business Development",
    desc: "Skyrocket sales with data-driven automation and strategy.",
    image: "/development.svg",
  },
];

const USP = () => {
  return (
    // bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200
    <section
      className="mt-[10%] md:mt-[5%]"
      // initial={{
      //   opacity: 0,
      //   translateY: 100,
      // }}
      // whileInView={{
      //   translateY: 0,
      //   opacity: 1,
      // }}
      // transition={{
      //   duration: 0.7,
      // }}
      // viewport={{
      //   once: true,
      //   margin: "-250px",
      // }}
    >
      <div className="px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-[10%] md:gap-[2%] md:space-y-0">
          {USPData.map((usp) => (
            <div
              key={usp.title}
              className="flex flex-col md:flex-row items-center gap-[5%]"
            >
              {/* <div className="w-full"> */}
              <Image
                src={usp.image}
                width={50}
                height={50}
                alt="usp image"
                className="w-[25%]"
              />
              <div className="flex flex-col">
                <h2 className="text-center md:text-left text-lg lg:text-2xl font-bold">
                  {usp.title}
                </h2>
                <p className="text-center md:text-left">{usp.desc}</p>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
        <div className=" mt-[10%] mb-[5%] text-center text-3xl lg:text-5xl font font-extrabold lg:px-[15%]">
          <h1 className="leading-[3rem]">
            Watch How We Drive{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              Digital Success
            </span>
          </h1>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-[5%]">
          {/* <div className="lg:w-[50%]"> */}
            <MediaPlayer
              title="Infineteck Introduction"
              src={`youtube/qCCl_2fGKYY`}
              playsInline
              className=""
            >
              <MediaProvider />
              <PlyrLayout icons={plyrLayoutIcons} />
            </MediaPlayer>
          {/* </div> */}
          <div className="lg:w-[100%] py-[5%] lg:py-0">
            <h1 className="text-xl">
              At <strong>Infineteck</strong>, we don’t just talk about
              innovation—we show it. Watch our company introduction video to
              discover how we’ve helped businesses like yours achieve{" "}
              <strong>unprecedented growth </strong>through creative branding,
              cutting-edge technology, and data-driven strategies.
              <br />
              From <strong>website design </strong> to{" "}
              <strong>
                {" "}
                AI automation, social media management to e-commerce solutions,
              </strong>{" "}
              this video showcases our passion, expertise, and commitment to
              delivering results that matter.
            </h1>
            <div className="my-[5%]">
              <Link
                href="/contact"
                className=" text-xl rounded-lg border-2 border-accent-color px-4 py-2 text-white transition-all duration-300 bg-primary-color hover:scale-105"
              >
                Let&apos;s Elevate Your Business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
