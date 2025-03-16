import Image from "next/image";
import React from "react";
import HeroCounter from "./ui/HeroCounter";

const HomeHero = () => {
  return (
    // bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200
    // bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25
    <section className="pb-[5%] pt-[15%] md:pt-[5%]">
      <div className="hidden xl:block absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[50%] lg:h-[60%] w-[20%] lg:w-[30%] -translate-x-[10%] lg:-translate-x-[30%] translate-y-[180%] lg:translate-y-[30%] rounded-full bg-secondary-color opacity-70 blur-[80px]"></div>
      </div>
      <div className="flex flex-col lg:flex-row h-[100%] my-[5%] lg:my-0 justify-center items-center dark:bg-slate-800 ">
        <div className="w-[100%] pl-[5%] flex flex-col items-start sm:mt-12 md:mt-16 lg:mt-20 ">
          <div className="">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                <span className="mb-1 block">Transforming Concepts</span>
                <span className="lg:pl-3 bg-gradient-to-l from-secondary-color to-primary-color bg-clip-text text-transparent">
                  into Seamless
                </span>
              </span>
              <div className="mt-2">
                <span className="lg:pl-3 mt-3 whitespace-nowrap text-primary-color to-secondary-color">
                  {/* <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                  preserveAspectRatio="none"
                  >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg> */}
                  <span className="">User Experiences.</span>
                </span>
              </div>
            </h1>
            <p className="lg:pl-3 mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
              At Infineteck, we empower small, medium, and large businesses to
              dominate their industries with cutting-edge digital solutions.
              From crafting unforgettable brands to scaling revenue with
              AI-driven strategies, we;&apos;re your one-stop partner for growth
              that lasts.
            </p>
            <HeroCounter />

            <a
              href="/CC Profile-2024.pdf"
              className="lg:ml-[5%] mt-[5%] lg:mt-[5%] px-8 py-3 md:py-4 md:px-10 text-sm md:text-lg rounded-md border border-transparent shadow bg-primary-color hover:scale-105 transition-all duration-200 font-medium text-white "
              download
            >
              Download Our Company Profile
            </a>
          </div>
        </div>
        <div className="hidden lg:w-[120%] xl:w-[110%] 2xl:w-[100%] pr-[5%] xl:flex justify-center">
          <Image src="/C.png" width={1000} height={100} alt="person image" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
