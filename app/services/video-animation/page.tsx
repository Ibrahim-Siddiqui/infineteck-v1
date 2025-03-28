"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/video-editing.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { AnimationVideoData } from "@/app/services/video-animation/data";
import { AnimationFeaturesData } from "@/app/services/video-animation/data";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Motion That Captivates, Stories That Inspire"
        text=" We specialize in high-quality video editing and animation that bring your ideas to life. Whether it’s explainer videos, social media content, or brand animations, we ensure seamless storytelling with stunning visuals."
      />
      <VideoSection data={AnimationVideoData} />
      <FeatureSection
        data={AnimationFeaturesData}
        initialHeading="Transform  "
        specialText="Your Content"
        endHeading="with Stunning Animation & Video Editing"
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default AppDevelopment;
