"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero4 from "@/components/Hero4";
import { FocusCards } from "@/components/ui/FocusCards";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero4 />
        <h1 className="heading">BRANDING</h1>
        <br />
        <br />
        <FocusCards
          cards={[
            {
              title: "Text Logo",
              src: "/branding7.jpg", // Replace with your image paths
            },
            {
              title: "Text Logo",
              src: "/branding8.jpg",
            },
            {
              title: "Text Logo",
              src: "/branding9.jpg",
            },
            {
              title: "Text Logo",
              src: "/branding10.jpg", // Replace with your image paths
            },
            {
              title: "Text Logo",
              src: "/branding11.jpg",
            },
            {
              title: "Text Logo",
              src: "/branding12.jpg",
            },
            {
              title: "Business Card",
              src: "/branding1.jpg",
            },
            {
              title: "Business Card",
              src: "/branding2.jpg",
            },
            {
              title: "Business Card",
              src: "/branding3.jpg",
            },
            {
              title: "Business Stationery",
              src: "/branding4.jpg",
            },
            {
              title: "Business Stationery",
              src: "/branding5.jpg",
            },
            {
              title: "Business Stationery",
              src: "/branding6.jpg",
            },
          ]}
        />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
