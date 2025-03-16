import Footer from "@/components/Footer";
import NewNavbar from "@/components/NewNavbar";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
    <NewNavbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Image
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          width={100}
          height={100}
          alt="Logo"
          className="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            This page is under maintenance
          </span>
        </h1>
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">We&apos;ll be back in a few days...</p>
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
          For any inquiries please{" "}
          {/* <a href="mailto:sales@kobana.de">sales@kobana.de</a> */}
          <a
            href="/contact"
            className="bg-primary-color px-4 py-2 text-lg font-medium text-white rounded-lg border border-primary-color hover:scale-105 duration-300"
          >
            Contact US
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Services;
