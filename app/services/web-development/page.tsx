"use client";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/web-dev-service-min.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import FeatureCards from "./FeatureCards";
import LongScreenshot from "@/components/LongScreenshot";
import Plans from "@/app/pricing/components/Plans";
import ContactForm from "@/components/ContactForm";
import { WebVideoData } from "./data";
import { UIUXPortfolioData } from "@/data";
import { webDevPlans } from "@/app/pricing/data";
import Image from "next/image";
import Image1 from "./2.png";
import Image2 from "./3.png";
import Image3 from "./1.png";

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
      <div className="hidden my-5 md:flex flex-col justify-center items-center">
        {" "}
        <h2 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color my-5">
          Infineteck's Web Development Process
        </h2>
        <Image
          src={Image3}
          className=""
          width={2560}
          height={1}
          alt="service image"
        />
      </div>

      <h1 className="text-3xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color mt-5 mb-2">
        Our Portfolio
      </h1>
      <p className="md:hidden text-xs text-center font-semibold">
        (Tap on the image for it to scroll)
      </p>
      <p className="hidden md:block text-md text-center font-semibold">
        (Hover over the image for it to scroll)
      </p>
      <div
        className="flex justify-center overflow-y-auto my-5 h-[650vh] md:h-[300vh] 2xl:h-[350%]"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[2%] sm:gap-x-[10%] lg:gap-y-[5%]">
          {/* sm:gap-x-[10%] */}
          {UIUXPortfolioData.map((item) => (
            <LongScreenshot key={item.id} path={item.src} />
          ))}
        </div>
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
      <div className="mt-5 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color py-5">
          Our Pricing
        </h2>
        <Plans plans={webDevPlans} />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default WebDevelopment;
