"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/ai-automation-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { AIVideoData } from "@/app/services/ai-automation/data";
import { AIFeaturesData } from "@/app/services/ai-automation/data";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Automate, Optimize, and Innovate with AI"
        text="Leverage the power of AI to automate repetitive tasks, enhance decision-making, and unlock new possibilities. Our AI-driven automation solutions help businesses improve efficiency, reduce costs, and stay ahead of the competition."
      />
      <VideoSection data={AIVideoData} />
      <FeatureSection
        data={AIFeaturesData}
        initialHeading=""
        specialText="Unlock Efficiency "
        endHeading="with AI-Powered Automation"
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default AppDevelopment;
