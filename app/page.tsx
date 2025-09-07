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
import ContactForm from "../components/ContactForm";
import Blogs from "@/components/Blogs";
import HomePlans from "@/components/HomePlans";
import HomeReviews from "@/components/HomeReviews";

const Home = () => {
  return (
    <main className="">
      <NewNavbar />
      <HomeHero />
      <USP />
      <HomeOffer />
      <HomePlans />
      <Blogs />
      <FAQ />
      <OurPartners />
      <Testimonial />
      <HomeReviews />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
