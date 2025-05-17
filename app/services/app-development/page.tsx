"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/app-dev-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { AppVideoData } from "@/app/services/app-development/data";
import { AppFeaturesData } from "@/app/services/app-development/data";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Innovative App Development for Future-Ready Businesses"
        text="We craft high-performance, scalable, and user-centric applications tailored to your business needs. From seamless cloud integration to AI-powered solutions, our expert team ensures cutting-edge technology and exceptional user experiences."
      />
      <VideoSection data={AppVideoData} />
      <FeatureSection
        data={AppFeaturesData}
        initialHeading="Empowering"
        specialText="Your Business"
        endHeading="with Advanced Mobile App Solutions"
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default AppDevelopment;
