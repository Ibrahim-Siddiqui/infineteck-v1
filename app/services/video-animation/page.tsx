"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/video-editing-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureSection from "../components/FeatureSection";
import FeatureCards from "./FeatureCards";
import { AnimationVideoData } from "@/app/services/video-animation/data";
import { AnimationFeaturesData } from "@/app/services/video-animation/data";
import Image from "next/image";
import Image1 from "./2.png";
import Image2 from "./3.png";
import Image3 from "./1.png";
import Plans from "@/app/pricing/components/Plans";
import { videoPlans } from "@/app/pricing/data";
import ContactForm from "@/components/ContactForm";

const AppDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner
        imgSrc={headerImg}
        title="Motion That Captivates, Stories That Inspire"
        text=" We specialize in high-quality video editing and animation that bring your ideas to life. Whether it’s explainer videos, social media content, or brand animations, we ensure seamless storytelling with stunning visuals."
      />
      <VideoSection data={AnimationVideoData} /><div className="hidden my-5 md:flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Why Choose Infineteck?
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
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Infineteck's Video & Animation Process
        </h2>
        {" "}
        <Image
          src={Image3}
          className=""
          width={2560}
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
        data={AnimationFeaturesData}
        initialHeading="Transform  "
        specialText="Your Content"
        endHeading="with Stunning Animation & Video Editing"
      /> */}
      <FeatureCards />
      <div className="mt-5 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color py-5">
          Our Pricing
        </h2>
        <Plans plans={videoPlans} />
      </div>

      <ContactForm />
      <Footer />
    </>
  );
};

export default AppDevelopment;
