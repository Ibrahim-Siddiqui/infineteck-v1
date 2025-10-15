"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/ecommerce-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { EcommerceVideoData } from "@/app/services/e-commerce/data";
import { EcommerceFeaturesData } from "@/app/services/e-commerce/data";
import Image1 from "./2.png";
import Image2 from "./3.png";
import Image3 from "./1.png";
import Image from "next/image";
import Plans from "@/app/pricing/components/Plans";
import { ecommercePlans, shopifyPlans } from "@/app/pricing/data";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
const AppDevelopment = () => {

  const [ecommerce, setEcommerce] = useState(true);
  const [shopify, setShopify] = useState(false);

  const handleButtonClick = (stateSetter: (value: boolean) => void) => {
    setEcommerce(false);
    setShopify(false);
    stateSetter(true);
  };
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Sell Smarter with Custom E-commerce Development"
        text="We create feature-rich, scalable, and secure e-commerce platforms designed to boost sales and customer satisfaction. From seamless checkout experiences to AI-driven personalization, we help you succeed in the digital marketplace."
      />
      <VideoSection data={EcommerceVideoData} />
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Our Process
        </h2>
        {/* <p>Equipped with latest tools, our team deliver impactful solutions designed to grow your business</p> */}
        <Image
          src={Image1}
          className=""
          width={3000}
          height={1}
          alt="service image"
        />
      </div>

      <div className="my-[15%] md:mt-[10%] md:mb-[5%] flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Our Tech Stack
        </h2>
        <p className="text-md md:text-lg text-center">
          Equipped with latest tools, our team deliver impactful solutions
          designed to grow your business
        </p>
        <Image
          src={Image2}
          className=""
          width={1920}
          height={1}
          alt="service image"
        />
      </div>
      {/* <FeatureSection
        data={EcommerceFeaturesData}
        initialHeading="Tailored"
        specialText="E-Commerce Solutions"
        endHeading="for Business Growth"
      /> */}
      <FeatureCards />
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
        {" "}
        <Image
          src={Image3}
          className=""
          width={2560}
          height={1}
          alt="service image"
        />
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color py-5">
          Our Pricing
        </h2>
        <div className="mt-5 sm:mt-12 mx-2 flex justify-center gap-2 lg:mx-4  text-md lg:text-lg lg:tracking-tighter">
        <button
          className="rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setEcommerce)}
        >
          E-Commerce
        </button>
        <button
          className="rounded-lg px-2 py-2 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setShopify)}
        >
          Shopify Store
        </button>
      </div>
        {ecommerce ? <Plans plans={ecommercePlans} /> : <></>}
        {shopify ? <Plans plans={shopifyPlans} /> : <></>}
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default AppDevelopment;
