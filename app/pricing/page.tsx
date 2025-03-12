"use client";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import {
  webDevPlans,
  brandingPlans,
  videoPlans,
  ecommercePlans,
  shopifyPlans,
  seoPlans,
  logoPlans,
  socialPlans,
} from "./data";
import Plans from "./components/Plans";
import NewNavbar from "@/components/NewNavbar";

const PricingPage = () => {
  const [webDev, setWebDev] = useState(true);
  const [branding, setBranding] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);
  const [video, setVideo] = useState(false);
  const [seo, setSeo] = useState(false);
  const [logo, setLogo] = useState(false);
  const [shopify, setShopify] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);

  const handleButtonClick = (stateSetter: (value: boolean) => void) => {
    setWebDev(false);
    setBranding(false);
    setEcommerce(false);
    setVideo(false);
    setSeo(false);
    setLogo(false);
    setShopify(false);
    setSocialMedia(false);

    stateSetter(true);
  };

  return (
    <>
      <NewNavbar />
      <div className="mt-[20%] md:mt-[10%] mb-10">
        <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color hover:bg-primary-color">
          Our Packages
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:gap-4 mx-2 lg:mx-1 lg:flex lg:justify-center lg:flex-wrap text-md lg:text-lg">
        <button
          className="rounded-lg px-4 py-4 text-primary-color transition-all bg-white hover:scale-105  border-2 border-primary-color  hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setWebDev)}
        >
          Web Development
        </button>
        <button
          className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105  border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setLogo)}
        >
          Logo Design
        </button>
        <button
          className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setEcommerce)}
        >
          E-Commerce
        </button>
        <button
          className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setVideo)}
        >
          Video & Animation
        </button>
        <button
          className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
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
          className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setBranding)}
        >
          Marketing & Branding
        </button>
        <button
          className="rounded-lg px-4 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setSocialMedia)}
        >
          Social Media Management
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
    </>
  );
};

export default PricingPage;
