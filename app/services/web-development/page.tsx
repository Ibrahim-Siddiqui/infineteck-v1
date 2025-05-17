"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/web-dev-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { WebVideoData } from "./data";
import { WebFeaturesData } from "./data";

const WebDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="We Authorize Your Web Identity."
        text="As a business owner, you have specific objectives and a vision for
          their realization. Our web development experts are dedicated to
          producing technologically advanced products with unwavering
          commitment."
      />
      <VideoSection data={WebVideoData} />
      <FeatureSection
        data={WebFeaturesData}
        initialHeading="Transform Your"
        specialText="Online Presence"
        endHeading="with Expert Web Development"
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default WebDevelopment;
