"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/ecommerce-service.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { EcommerceVideoData } from "@/app/services/e-commerce/data";
import { EcommerceFeaturesData } from "@/app/services/e-commerce/data";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Sell Smarter with Custom E-commerce Development"
        text="We create feature-rich, scalable, and secure e-commerce platforms designed to boost sales and customer satisfaction. From seamless checkout experiences to AI-driven personalization, we help you succeed in the digital marketplace."
      />
      <VideoSection data={EcommerceVideoData} />
      <FeatureSection
        data={EcommerceFeaturesData}
        initialHeading="Tailored"
        specialText="E-Commerce Solutions"
        endHeading="for Business Growth"
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default AppDevelopment;
