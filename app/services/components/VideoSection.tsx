import Image from "next/image";
import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

const VideoSection = ({ heading, specialText, paragraph, video }: any) => {
  return (
    <div className="">
      <div className="pt-16 sm:pt-24">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            
              <div className="space-y-4 lg:pl-5">
                <div className="space-y-2">
                  {/* <span
                                className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                Early Access
                            </span> */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    <span className="sm:text-6xl"></span> {heading}
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary-color to-primary-color">
                      {" "}
                      {specialText}
                    </span>
                    <br />
                  </h1>
                </div>

                <p className="text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {paragraph}
                </p>
              </div>

              {/* <div className="border-t border-gray-700"></div> */}

              <div className="flex space-x-4 items-center text-white">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-shrink-0 -space-x-1">
                    {/* <Image loading="lazy" width="400" height="400" decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                    src="https://randomuser.me/api/portraits/men/29.jpg" />
                                <Image loading="lazy" width="400" height="400" decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                    src="https://randomuser.me/api/portraits/men/90.jpg" />
                                <Image loading="lazy" width="100" height="100" decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                    src="https://randomuser.me/api/portraits/men/75.jpg" />
                                <Image loading="lazy" width="200" height="200" decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                    src="https://randomuser.me/api/portraits/men/5.jpg" /> */}
                  </div>

                  {/* <span className="flex-shrink-0 text-xs font-medium leading-5">+15</span> */}
                </div>

                {/* <div className="h-4 border-l border-gray-700"></div> */}

                {/* <div className="flex items-center">

                            <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                </path>
                            </svg>

                        </div> */}
                {/* <div className="h-4 border-l border-gray-700"></div>
                        <a href="" target="_blank">
                            <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light" className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16" width="250" height="54" />
                        </a> */}
              </div>
            
          </div>

          <div className="flex items-center w-[90%] col-span-6">
            <div className="h-96 lg:h-100% w-full mx-[2%] flex justify-center items-center">
                <div className="w-full h-full flex justify-center ">
                  <MediaPlayer
                    src={`youtube/qCCl_2fGKYY`}
                    playsInline
                    className=""
                  >
                    <PlyrLayout icons={plyrLayoutIcons} />  
                    <MediaProvider className="min-w-full absolute object-cover" />
                  </MediaPlayer>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
