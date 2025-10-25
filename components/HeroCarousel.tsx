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
import { motion } from "framer-motion";

const HeroCarousel = () => {
  const partners = [
    { img: "/google-partner-logo.png" },
    { img: "/Marriott_hotels_logo14.png" },
    { img: "/hostinger8547.jpg" },
    { img: "/titan-logo-.png" },
    { img: "/Met-Business-Partners.webp" },
    { img: "/shopify-partner-1.png" },
  ];

  return (
    <div
      className="px-[5%] shadow-sm"
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
      <Carousel
        opts={{
          direction: "ltr",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        className=""
      >
        <CarouselContent className="flex items-center">
          {partners.map((partner) => (
            <CarouselItem
              key={partner.img}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 "
            >
              <div className="flex justify-center items-center rounded-lg h-[200px] w-[200px]">
                <Image
                  src={partner.img}
                  width={180}
                  height={50}
                  alt="logo"
                  priority={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
