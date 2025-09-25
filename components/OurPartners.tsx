"use client";
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { partners } from "@/data";
import { motion } from "framer-motion";

const OurPartners = () => {
  return (
    <div
      className="mt-[5%] z-[-99] text-center"
      // initial={{
      //   opacity: 0,
      //   translateY: 100,
      // }}
      // whileInView={{
      //   translateY: 0,
      //   opacity: 1,
      // }}
      // transition={{
      //   duration: 0.7,
      // }}
      // viewport={{
      //   once: true,
      //   margin: "-250px",
      // }}
    >
      <h1 className="text-2xl md:text-4xl font-bold">
          Trusted by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Visionaries
          </span>
          , Backed by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Industry Leaders
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium">
          Top brands partner with Infineteck to build, scale and lead in the
          digital world.
        </h2>
      {/* <p className="text-sm lg:text-lg text-center">
        We are a company that focuses on smart and productive digital solutions
        that maximize your business opportunities.
      </p> */}

      <Carousel
        opts={{
          direction: "ltr",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 600,
          }),
        ]}
        className="p-5 my-[5%]"
      >
        <CarouselContent className="">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="basis-1/3 md:basis-1/4 ">
              <div className="flex justify-center items-end rounded-lg">
                <Image
                  src={partner.img}
                  width={200}
                  height={50}
                  alt="logo"
                  priority={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <Carousel
        opts={{
          //   align: "",

          direction: "rtl",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="mb-[5%] p-5 bg-blue-100 direction-reverse carousel-direction"
      >
        <CarouselContent className="">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="basis-1/3 md:basis-1/4 ">
              <div className="flex justify-center items-start rounded-lg ">
                <Image src={partner.img} width={150} height={50} alt="logo" priority={true} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </div>
  );
};

export default OurPartners;
