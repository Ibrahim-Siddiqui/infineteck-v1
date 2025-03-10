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
      <Navbar />
      <div className="my-10">
        <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Our Packages
        </h1>
      </div>
      <div className="flex gap-5 justify-center text-lg">
        <button
          className="rounded-lg px-4 py-4 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setWebDev)}
        >
          Web Development
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setBranding)}
        >
          Marketing & Branding
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setEcommerce)}
        >
          E-Commerce
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setVideo)}
        >
          Video & Animation
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setShopify)}
        >
          Shopify Store
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setSeo)}
        >
          SEO
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
          onClick={() => handleButtonClick(setLogo)}
        >
          Logo Design
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105"
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
