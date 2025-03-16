// "use client";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import React from "react";

const VideoHero = () => {
  const css = `   .video-docker video {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .video-docker::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
}
  `;
  return (
    <>
      <section className="relative h-[55vw] flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-[55vw] overflow-hidden">
          <video
            controls={false}
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            muted
            loop
          >
            <source
              
              src="/hero-video.mp4"
              type="video/mp4"
            />
          </video>
          
        </div>
        {/* video-content space-y-2 z-10  text-center */}
        {/* pt-[10vh] sm:pt-[20vh] md:[25vh] lg:pt-[20vh] xl:pt-[35vh] */}
        <div className="relative z-10 pt-[10vw] flex flex-col justify-center items-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-center text-white ">
            <span className="block xl:inline">
              <span className="block text-center">Transforming Concepts</span>
              <span className="lg:pl-3 bg-gradient-to-l from-secondary-color to-primary-color bg-clip-text text-transparent">
                Into Seamless User Experiences.
              </span>
            </span>
          </h1>
          <p className="justify-center max-w-xl hidden md:block md:max-w-2xl lg:max-w-4xl text-[10px] sm:text-lg lg:text-2xl  text-white">
            At Infineteck, we empower small, medium, and large businesses to
            dominate their industries with cutting-edge digital solutions. From
            crafting unforgettable brands to scaling revenue with AI-driven
            strategies
          </p>
          <a
            // href="/CC Profile-2024.pdf"
            className="mt-[2%] lg:mt-[5%] px-2 lg:px-8 py-2 md:py-4 md:px-8 text-[8px] sm:text-sm md:text-lg rounded-md border border-transparent shadow bg-primary-color hover:scale-105 transition-all duration-200 font-medium text-white cursor-pointer"
            // download
          >
            Download Our Company Profile
          </a>
        </div>
      </section>

      <style>{css}</style>
    </>
    
  );
};

export default VideoHero;
