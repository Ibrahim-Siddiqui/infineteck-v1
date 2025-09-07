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

const HeroCarousel = () => {
  return (
    <div
      className="z-[-99] mx-[5%] shadow-sm"
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
            delay: 1000,
          }),
        ]}
        className=""
      >
        <CarouselContent className="">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="basis-1/3 md:basis-1/4 ">
              <div className="flex justify-center items-end rounded-lg">
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
