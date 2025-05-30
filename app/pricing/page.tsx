"use client";
import Navbar from "@/components/ui/Navbar";
import { useEffect, useState } from "react";
import {
  webDevPlans,
  brandingPlans,
  videoPlans,
  ecommercePlans,
  shopifyPlans,
  seoPlans,
  logoPlans,
  socialPlans,
  googleAdsPlans,
  uiuxPlans,
} from "./data";
import Plans from "./components/Plans";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import bannerImg from "@/public/pricing-banner-min.jpg";

const PricingPage = () => {
  const [webDev, setWebDev] = useState(true);
  const [branding, setBranding] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);
  const [video, setVideo] = useState(false);
  const [seo, setSeo] = useState(false);
  const [logo, setLogo] = useState(false);
  const [shopify, setShopify] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);
  const [googleAds, setGoogleAds] = useState(false);
  const [uiux, setUiUx] = useState(false);

  const handleButtonClick = (stateSetter: (value: boolean) => void) => {
    setWebDev(false);
    setBranding(false);
    setEcommerce(false);
    setVideo(false);
    setSeo(false);
    setLogo(false);
    setShopify(false);
    setSocialMedia(false);
    setGoogleAds(false);
    setUiUx(false);

    stateSetter(true);
  };
  useEffect(() => {
    window.scrollTo(0, 600);
  }, [
    webDev,
    branding,
    ecommerce,
    video,
    seo,
    logo,
    shopify,
    socialMedia,
    googleAds,
    uiux,
  ]);
  return (
    <>
      <NewNavbar />

      <PageBanner
        imgSrc={bannerImg}
        heading="Our Packages"
        text="Tailored Plans, Transparent Costs"
      />

      <div className="mt-5 sm:mt-12 mx-2 grid grid-cols-2 gap-2 md:grid-rows-2 md:grid-cols-5 lg:mx-4  text-md lg:text-lg lg:tracking-tighter">
        <button
          className="rounded-lg px-2 py-4 text-primary-color transition-all bg-white hover:scale-105  border-2 border-primary-color  hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setWebDev)}
        >
          Web Development
        </button>
        <button
          className="rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105  border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setLogo)}
        >
          Logo Design
        </button>
        <button
          className="rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setEcommerce)}
        >
          E-Commerce
        </button>
        <button
          className="rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setVideo)}
        >
          Video & Animation
        </button>
        <button
          className="rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setShopify)}
        >
          Shopify Store
        </button>
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
        <button
          className=" rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setUiUx)}
        >
          UI/UX
        </button>
      </div>

      {webDev ? <Plans plans={webDevPlans} /> : <></>}
      {branding ? <Plans plans={brandingPlans} /> : <></>}
      {video ? <Plans plans={videoPlans} /> : <></>}
      {ecommerce ? <Plans plans={ecommercePlans} /> : <></>}
      {shopify ? <Plans plans={shopifyPlans} /> : <></>}
      {seo ? <Plans plans={seoPlans} /> : <></>}
      {logo ? <Plans plans={logoPlans} /> : <></>}
      {socialMedia ? <Plans plans={socialPlans} /> : <></>}
      {googleAds ? <Plans plans={googleAdsPlans} /> : <></>}
      {uiux ? <Plans plans={uiuxPlans} /> : <></>}

      <Footer />
    </>
  );
};

export default PricingPage;
