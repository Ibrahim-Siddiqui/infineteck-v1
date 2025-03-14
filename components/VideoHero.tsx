import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import React from "react";

const VideoHero = () => {
  return (
    <div className="main h-[30vh] sm:h-[50vh] md:h-[65vh] lg:h-[85vh] xl:h-[110vh] 2xl:h-[125vh]">
      <div className="overlay top-0 left-0 h-[60vw] xs:h-[60vw] sm:h-[60vw] md:h-[60vw] lg:h-[60vw] xl:h-[60vw] 2xl:h-[60vw]"></div>
      {/* <video src="/public/Infineteck-Intro.mp4" autoPlay loop muted /> */}
      <MediaPlayer
        src={`youtube/qCCl_2fGKYY`}
        playsInline
        autoPlay
        loop
        muted
        className="relative z-[-1] mt-[5%] lg:mt-[3%] object-cover"
      >
        <MediaProvider />
        {/* <PlyrLayout
          // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={plyrLayoutIcons}
          /> */}
      </MediaPlayer>
      {/* h-[40%] sm:h-[60%] md:h-[70%] lg:h-[80%] xl:h-[90%] 2xl:h-[100%] */}
      <div className="content pt-[10vh] sm:pt-[20vh] md:[25vh] lg:pt-[20vh] xl:pt-[35vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-center text-white ">
          <span className="block xl:inline">
            <span className="mb-1 block text-center">Transforming Concepts</span>
            <span className="lg:pl-3 bg-gradient-to-l from-secondary-color to-primary-color bg-clip-text text-transparent">
              into Seamless User Experiences.
            </span>
          </span>
          <div className="">
            <span className="whitespace-nowrap text-primary-color to-secondary-color">
              
              <span className=""></span>
            </span>
          </div>
        </h1>
        <p className="max-w-xl hidden md:block md:max-w-2xl lg:max-w-4xl text-[10px] sm:text-lg lg:text-2xl text-center text-white">
          At Infineteck, we empower small, medium, and large businesses to
          dominate their industries with cutting-edge digital solutions. From
          crafting unforgettable brands to scaling revenue with AI-driven
          strategies, we;&apos;re your one-stop partner for growth that lasts.
        </p>
        <a
          href="/CC Profile-2024.pdf"
          className="mt-[2%] lg:mt-[5%] px-2 lg:px-8 py-3 md:py-4 md:px-8 text-xs sm:text-sm md:text-lg rounded-md border border-transparent shadow bg-primary-color hover:scale-105 transition-all duration-200 font-medium text-white "
          download
        >
          Download Our Company Profile
        </a>
      </div>
    </div>
  );
};

export default VideoHero;
