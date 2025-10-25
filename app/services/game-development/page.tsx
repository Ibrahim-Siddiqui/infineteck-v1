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
import Image from "next/image";
import Image1 from "./2.png";
import Image2 from "./3.png";
import Image3 from "./1.png";
import Plans from "@/app/pricing/components/Plans";
import ContactForm from "@/components/ContactForm";
import { FocusCards } from "@/components/ui/FocusCards";
import { gameDevPortfolioData } from "@/data";

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
        data={GameFeaturesData}
        initialHeading="Immersive Game Development with"
        specialText="Cutting-Edge Technology"
        endHeading=""
      /> */}
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Infineteck's Game Development Process
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
      <div className=" mt-[5rem]">
        <h1 className="text-black text-4xl md:text-5xl text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Our Portfolio
        </h1>
      </div>
      <FocusCards cards={gameDevPortfolioData} loadMore={false} />

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

      <ContactForm />

      <Footer />
    </>
  );
};

export default AppDevelopment;
