"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/game-dev-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { GameVideoData } from "@/app/services/game-development/data";
import { GameFeaturesData } from "@/app/services/game-development/data";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Build Immersive Gaming Experiences with Us"
        text="We create interactive and visually stunning games tailored to your audience. From game design to development and optimization, our team delivers innovative gaming solutions that stand out."
      />
      <VideoSection data={GameVideoData} />
      <FeatureSection
        data={GameFeaturesData}
        initialHeading="Immersive Game Development with"
        specialText="Cutting-Edge Technology"
        endHeading=""
      />
      <FeatureCards />
      <Footer />
    </>
  );
};

export default AppDevelopment;
