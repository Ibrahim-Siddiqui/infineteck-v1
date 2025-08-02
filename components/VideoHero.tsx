"use client";
import React from "react";

const VideoHero = () => {
//   const css = `   .video-docker video {
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }

//     .video-docker::after {
//       content: "";
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       top: 0;
//       left: 0;
//       background: rgba(0, 0, 0, 0.4);
//       z-index: 1;
// }
//   `;
  return (
    <>
      <section className="relative h-screen sm:h-[70vh] xl:h-[80vh] flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker after:content-[] after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-black/40 after:z-1">
        {/* w-full h-full overflow-hidden */}
          <video
            className="min-w-full min-h-full absolute object-cover top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-content space-y-8 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-center text-white ">
            <span className="block xl:inline">
              <span className="block text-center">Transforming Concepts</span>
              <span className="lg:pl-3 bg-gradient-to-l from-secondary-color to-primary-color bg-clip-text text-transparent">
                Into Seamless User Experiences.
              </span>
            </span>
          </h1>
          <p className="px-[10%] text-center text-md sm:text-lg lg:text-2xl text-white">
            At Infineteck, we empower small, medium, and large businesses to
            dominate their industries with cutting-edge digital solutions. From
            crafting unforgettable brands to scaling revenue with AI-driven
            strategies
          </p>
          <div className="">
            <a
              href="/Company Profile.pdf"
              className="px-2 lg:px-8 py-2 md:py-4 md:px-8 text-xs sm:text-sm md:text-lg rounded-md border border-transparent shadow bg-primary-color hover:scale-105 transition-all duration-200 font-medium text-white cursor-pointer"
              download
            >
              Download Our Company Profile
            </a>
          </div>
        </div>
      </section>

      {/* <style>{css}</style> */}
    </>
  );
};

export default VideoHero;
