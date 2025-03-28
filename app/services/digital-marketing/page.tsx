"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/marketing-service.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { MarketingVideoData } from "@/app/services/digital-marketing/data";
import { AppFeaturesData } from "@/app/services/digital-marketing/data";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Elevate Your Brand with Powerful Marketing & Branding Solutions"
        text="We help businesses create a lasting impact with data-driven marketing strategies and compelling brand storytelling. From digital campaigns to brand identity design, our expertise ensures maximum visibility, engagement, and growth."
      />
      <VideoSection data={MarketingVideoData} />
      <FeatureSection
        data={AppFeaturesData}
        initialHeading="Elevate"
        specialText="Your Brand"
        endHeading="with Strategic Digital Marketing & Branding"
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default AppDevelopment;
