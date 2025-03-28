"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import bannerImg from "@/public/portfolio-banner.jpg";
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
import PageBanner from "@/components/PageBanner";

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
    window.scrollTo(0, 600);
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
      <main className="">
        <NewNavbar />

        <PageBanner
          imgSrc={bannerImg}
          heading="Our Portfolio"
          text="Discover the Projects That Drive Our Success"
        />

        <div className="mt-12 mx-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-5 justify-center text-sm lg:text-lg">
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
        </div>
        {isTextLogo && (
          <>
            <div className="mt-[5rem]">
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
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
