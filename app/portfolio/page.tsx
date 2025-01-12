"use client";

import React, { useState } from "react";

import Hero4 from "@/components/Hero4";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FocusCards } from "@/components/ui/FocusCards";
import { VideoCards } from "@/components/ui/VideoCards";

import { navItems } from "@/data";
import { UIUXPortfolioData } from "@/data";
import { textLogoPortfolioData } from "@/data";
import { gameDevPortfolioData } from "@/data";
import { shopifyPortfolioData } from "@/data";
import { mascotPortfolioData } from "@/data";
import { socialMediaPortfolioData } from "@/data";
import { videoPortfolioData } from "@/data";

const Home = () => {
  const [isTextLogo, setIsTextLogo] = useState(false);
  const [isUIUX, setIsUIUX] = useState(false);
  const [isGameDev, setIsGameDev] = useState(false);
  const [isShopify, setIsShopify] = useState(false);
  const [isMascot, setIsMascot] = useState(false);
  const [isSocialMedia, setIsSocialMedia] = useState(false);
  const [isVideoEditing, setIsVideoEditing] = useState(false);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero4 />
        {/* <h1 className="heading">BRANDING</h1>  */}
        {/* <br />
        <br /> */}

        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            Text Logo Portfolio
          </h1>
        </div>
        <FocusCards cards={textLogoPortfolioData} loadMore={isTextLogo} />
        {textLogoPortfolioData.length > 3 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsTextLogo(!isTextLogo)}
            >
              {!isTextLogo ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}

        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            UI/UX Portfolio
          </h1>
        </div>
        <FocusCards cards={UIUXPortfolioData} loadMore={isUIUX} />
        {UIUXPortfolioData.length > 3 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsUIUX(!isUIUX)}
            >
              {!isUIUX ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}

        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            Game Development Portfolio
          </h1>
        </div>
        <FocusCards cards={gameDevPortfolioData} loadMore={isGameDev} />
        {gameDevPortfolioData.length > 3 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsGameDev(!isGameDev)}
            >
              {!isGameDev ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}

        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            Mascot Logo Portfolio
          </h1>
        </div>
        <FocusCards cards={mascotPortfolioData} loadMore={isMascot} />
        {mascotPortfolioData.length > 3 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsMascot(!isMascot)}
            >
              {!isMascot ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}

        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            Socail Media Posts Portfolio
          </h1>
        </div>
        <FocusCards cards={socialMediaPortfolioData} loadMore={isSocialMedia} />
        {socialMediaPortfolioData.length > 3 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsSocialMedia(!isSocialMedia)}
            >
              {!isSocialMedia ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}

        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            Video Editing Portfolio
          </h1>
        </div>
        <VideoCards cards={videoPortfolioData} loadMore={isVideoEditing} />
        {videoPortfolioData.length > 4 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsVideoEditing(!isVideoEditing)}
            >
              {!isVideoEditing ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}


        <div className="relative my-[5rem]">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold">
            Shopify UI/UX Portfolio
          </h1>
        </div>
        <FocusCards cards={shopifyPortfolioData} loadMore={isShopify} />
        {shopifyPortfolioData.length > 3 ? (
          <div className="flex justify-center my-5">
            <button
              className="bg-blue-900 p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
              onClick={(e) => setIsShopify(!isShopify)}
            >
              {!isShopify ? <>Show More</> : <>Show Less</>}
            </button>
          </div>
        ) : (
          <div className=""></div>
        )}

        <Footer />
      </div>
    </main>
  );
};

export default Home;
