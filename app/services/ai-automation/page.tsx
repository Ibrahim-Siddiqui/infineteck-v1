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
import Image from "next/image";
import Image1 from "./2.png";
import Image2 from "./3.png";
import Image3 from "./1.png";
import Plans from "@/app/pricing/components/Plans";
import ContactForm from "@/components/ContactForm";

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
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
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
      {/* <FeatureSection
        data={AIFeaturesData}
        initialHeading=""
        specialText="Unlock Efficiency "
        endHeading="with AI-Powered Automation"
      /> */}
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Infineteck's AI Automation Process
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

      <FeatureCards />

      {/* <div className="mt-5 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color py-5">
          Our Pricing
        </h2>
        <Plans plans={Plans} />
      </div> */}
      <ContactForm />
      <Footer />
    </>
  );
};

export default AppDevelopment;
