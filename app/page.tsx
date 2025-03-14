"use client";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import HomeHero from "@/components/HomeHero";
import USP from "@/components/USP";
import HomeOffer from "@/components/HomeOffer";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import OurPartners from "@/components/OurPartners";
import NewNavbar from "@/components/NewNavbar";
import VideoHero from "@/components/VideoHero";

const Home = () => {
  return (
    <main className="">
      {/* <div className="max-w-7xl w-full"> */}
      <NewNavbar />
      {/* <HomeHero /> */}
      <VideoHero />
      <USP />
      <HomeOffer />
      <FAQ />
      <OurPartners />
      <Testimonial />
      <Footer />
      {/* </div> */}
    </main>
  );
};

export default Home;
