import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import headerImg from "@/public/web-dev-service.jpg";
import VideoSection from "../components/VideoSection";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
const WebDevelopment = () => {
  return (
    <>
      <NewNavbar />
      <HeaderBanner imgSrc={headerImg} />
      <VideoSection
        heading="Our Services will take your business to the"
        specialText="Next Level"
        paragraph="Our amazing team will walk you through the whole process of developing the best site that your business needs."
      />
      <Footer />
    </>
  );
};

export default WebDevelopment;
