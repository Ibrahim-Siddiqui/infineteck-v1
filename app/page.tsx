"use client";
import dynamic from "next/dynamic";
// import { navItems } from "@/data";
import { Menus } from "@/data";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
import DesktopMenu from "@/components/ui/DesktopMenu";
import Navbar from "@/components/ui/Navbar";
import HomeHero from "@/components/HomeHero";
import USP from "@/components/USP";
import HomeOffer from "@/components/HomeOffer";
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import OurPartners from "@/components/OurPartners";

const Home = () => {
  return (
    <main className="w-full">
      {/* <div className="max-w-7xl w-full"> */}

      {/* <FloatingNav navItems={navItems} /> */}
      <Navbar />
      <HomeHero />
      <USP />
      <HomeOffer />
      <FAQ />
      <OurPartners />
      <Testimonial />
      {/* <DesktopMenu menu={Menus}/> */}
      {/* <Hero /> */}
      {/* <Grid /> */}
      {/* <Experience /> */}
      {/* <Clients /> */}
      {/* <Approach /> */}
      <Footer />
      {/* </div> */}
    </main>
  );
};

export default Home;
