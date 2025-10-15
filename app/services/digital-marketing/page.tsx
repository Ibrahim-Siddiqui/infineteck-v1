"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/marketing-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { MarketingVideoData } from "@/app/services/digital-marketing/data";

import {
  brandingPlans,
  googleAdsPlans,
  seoPlans,
  socialPlans,
} from "@/app/pricing/data";
import Plans from "@/app/pricing/components/Plans";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

const AppDevelopment = () => {
  const [seo, setSeo] = useState(true);
  const [branding, setBranding] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);
  const [googleAds, setGoogleAds] = useState(false);

  const handleButtonClick = (stateSetter: (value: boolean) => void) => {
    setBranding(false);
    setSeo(false);
    setSocialMedia(false);
    setGoogleAds(false);
    stateSetter(true);
  };

  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Elevate Your Brand with Powerful Marketing & Branding Solutions"
        text="We help businesses create a lasting impact with data-driven marketing strategies and compelling brand storytelling. From digital campaigns to brand identity design, our expertise ensures maximum visibility, engagement, and growth."
      />
      <VideoSection data={MarketingVideoData} />
      {/* <FeatureSection
        data={AppFeaturesData}
        initialHeading="Elevate"
        specialText="Your Brand"
        endHeading="with Strategic Digital Marketing & Branding"
        /> */}
      <FeatureCards />

      <div className="mt-5 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color py-5">
          Our Pricing
        </h2>
        <div className="mt-5 sm:mt-12 mx-2 grid grid-rows-2 grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 lg:mx-4  text-md lg:text-lg lg:tracking-tighter">
          <button
            className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
            onClick={() => handleButtonClick(setSeo)}
          >
            SEO
          </button>
          <button
            className=" rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
            onClick={() => handleButtonClick(setBranding)}
          >
            Design & Branding
          </button>
          <button
            className=" rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
            onClick={() => handleButtonClick(setSocialMedia)}
          >
            Social Media Management
          </button>
          <button
            className=" rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
            onClick={() => handleButtonClick(setGoogleAds)}
          >
            Google Ads (PPC)
          </button>
        </div>

        {branding ? <Plans plans={brandingPlans} /> : <></>}
        {seo ? <Plans plans={seoPlans} /> : <></>}
        {socialMedia ? <Plans plans={socialPlans} /> : <></>}
        {googleAds ? <Plans plans={googleAdsPlans} /> : <></>}
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default AppDevelopment;
