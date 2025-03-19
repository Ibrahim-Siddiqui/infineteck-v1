import React from "react";
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
    <motion.div
      className="mt-[5%] z-[-99]"
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
        margin: "-250px",
      }}
    >
      <h1
        className="text-4xl lg:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color
      to-primary-color"
      >
        Our Partners
      </h1>
      <h3 className="text-2xl lg:text-3xl text-center font-semibold py-5">
        Achieve Online Success and Boosted Revenues
      </h3>
      <p className="text-sm lg:text-lg text-center py-5">
        We are a company that focuses on smart and productive digital solutions
        that maximize your business opportunities.
      </p>

      <Carousel
        opts={{
          //   align: "",

          direction: "ltr",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className=" p-5 bg-blue-100"
      >
        <CarouselContent className="">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="basis-1/3 md:basis-1/4 ">
              <div className="flex justify-center items-end rounded-lg">
                <Image src={partner.img} width={150} height={50} alt="logo" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
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
                <Image src={partner.img} width={150} height={50} alt="logo" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

export default OurPartners;
