"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";

import { FocusCards } from "@/components/ui/FocusCards";
import { VideoCards } from "@/components/ui/VideoCards";
import {
  UIUXPortfolioData,
  textLogoPortfolioData,
  gameDevPortfolioData,
  shopifyPortfolioData,
  mascotPortfolioData,
  socialMediaPortfolioData,
  videoPortfolioData,
} from "@/data";
import Navbar from "@/components/ui/Navbar";
import NewNavbar from "@/components/NewNavbar";

const Home = () => {
  const [isTextLogo, setIsTextLogo] = useState(true);
  const [isUIUX, setIsUIUX] = useState(false);
  const [isGameDev, setIsGameDev] = useState(false);
  const [isShopify, setIsShopify] = useState(false);
  const [isMascot, setIsMascot] = useState(false);
  const [isSocialMedia, setIsSocialMedia] = useState(false);
  const [isVideoEditing, setIsVideoEditing] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = (stateSetter: (value: boolean) => void) => {
    setIsTextLogo(false);
    setIsGameDev(false);
    setIsMascot(false);
    setIsUIUX(false);
    setIsVideoEditing(false);
    // setSeo(false);
    setIsShopify(false);
    setIsSocialMedia(false);
    setShowMore(false);

    stateSetter(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [
    isTextLogo,
    isGameDev,
    isMascot,
    isShopify,
    isSocialMedia,
    isVideoEditing,
    isUIUX,
  ]);
  return (
    <>
      <main className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <NewNavbar />
        {/* <div className=""> */}
        {/* <Navbar /> */}

        <div className="mt-[20%] md:mt-[10%] mb-10">
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Our Portfolio
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-5 justify-center text-sm lg:text-lg">
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsVideoEditing)}
          >
            Video & Animation
          </button>
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsTextLogo)}
          >
            Logo Design
          </button>
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsMascot)}
          >
            Mascot Logos
          </button>
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsShopify)}
          >
            Shopify Store
          </button>
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsSocialMedia)}
          >
            Social Media
          </button>
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsGameDev)}
          >
            Game Development
          </button>
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all border-2 border-primary-color hover:bg-primary-color hover:scale-105 hover:text-white"
            onClick={() => handleButtonClick(setIsUIUX)}
          >
            UI / UX
          </button>
          {/*  <button
            className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
            onClick={() => handleButtonClick(setSocialMedia)}
            >
            Social Media Management
          </button> */}
        </div>
        {isTextLogo && (
          <>
            <div className="mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                Text Logo Portfolio
              </h1>
            </div>
            <FocusCards cards={textLogoPortfolioData} loadMore={showMore} />
            {textLogoPortfolioData.length > 3 ? (
              <div className="flex justify-center mb-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}

        {isUIUX && (
          <>
            <div className=" mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                UI/UX Portfolio
              </h1>
            </div>
            <FocusCards cards={UIUXPortfolioData} loadMore={showMore} />
            {UIUXPortfolioData.length > 3 ? (
              <div className="flex justify-center my-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}
        {isGameDev && (
          <>
            <div className=" mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                Game Development Portfolio
              </h1>
            </div>
            <FocusCards cards={gameDevPortfolioData} loadMore={showMore} />
            {gameDevPortfolioData.length > 3 ? (
              <div className="flex justify-center my-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}

        {isMascot && (
          <>
            <div className=" mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                Mascot Logo Portfolio
              </h1>
            </div>
            <FocusCards cards={mascotPortfolioData} loadMore={showMore} />
            {mascotPortfolioData.length > 3 ? (
              <div className="flex justify-center my-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}
        {isSocialMedia && (
          <>
            <div className=" mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                Socail Media Posts Portfolio
              </h1>
            </div>
            <FocusCards cards={socialMediaPortfolioData} loadMore={showMore} />
            {socialMediaPortfolioData.length > 3 ? (
              <div className="flex justify-center my-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}
        {isVideoEditing && (
          <>
            <div className=" my-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                Video Editing Portfolio
              </h1>
            </div>
            <VideoCards cards={videoPortfolioData} loadMore={showMore} />
            {videoPortfolioData.length > 4 ? (
              <div className="flex justify-center my-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}

        {isShopify && (
          <>
            <div className=" mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold">
                Shopify UI/UX Portfolio
              </h1>
            </div>
            <FocusCards cards={shopifyPortfolioData} loadMore={showMore} />
            {shopifyPortfolioData.length > 3 ? (
              <div className="flex justify-center my-[5rem]">
                <button
                  className="bg-primary-color p-4 rounded-lg text-white text-xl hover:scale-105 transition-all ease-in-out"
                  onClick={(e) => setShowMore(!showMore)}
                >
                  {!showMore ? <>Show More</> : <>Show Less</>}
                </button>
              </div>
            ) : (
              <div className=""></div>
            )}
          </>
        )}
        <Footer />
        {/* </div> */}
      </main>
    </>
  );
};

export default Home;
