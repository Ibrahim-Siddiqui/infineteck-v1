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
    desc: "Infineteck crafts bold, unforgettable brand identities from logo to tone, Infineteck makes your brand stand out.",
    image: "/branding.svg",
  },
  {
    id: 2,
    title: "Digital Presence",
    desc: "Infineteck builds sleek, high impact websites and apps so that your audience finds you faster with Infineteck online.",
    image: "/digital-presence.svg",
  },
  {
    id: 3,
    title: "Business Development",
    desc: "Infineteck powers your growth with smart digital tools, also scale faster and smarter with Infineteck by your side.",
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
                priority={true}
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
        <div className="mt-[10%] md:mt-[5%] mb-[5%] text-center text-3xl lg:text-5xl font font-extrabold lg:px-[15%]">
          <h1 className="leading-[2rem] md:leading-[3rem]">
            Discover How Infineteck Turns Bold Ideas into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              Digital Success Stories
            </span>
          </h1>
          <h3 className="my-[5%] text-xl md:text-2xl font-medium leading-2">
            Infineteck takes your raw ideas and transforms them into powerful,
            user ready digital products. From MVPs to enterprise solutions,
            Infineteck delivers results that drive real growth and impact.
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-[5%]">
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
            <h2 className="text-2xl md:text-3xl font-semibold">
              Unlock the Power of Innovation with Infineteck
            </h2>
            <h1 className="text-lg">
              At <strong>Infineteck</strong>, we don’t just talk tech we live
              it.
              <br />
              Watch how Infineteck transforms bold ideas into unstoppable
              digital brands. From jaw dropping website design to intelligent AI
              automation, from viral social media strategies to revenue-driving
              e-commerce solutions this is not just a company video; it is a
              window into what Infineteck can do for you.
              <br />
              Get inspired. Get excited. Get growing with Infineteck by your
              side.
              <br />
              Hit play and experience the future powered by Infineteck.
            </h1>
            <div className="my-[5%]">
              <Link
                href="/contact"
                prefetch={false}
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
