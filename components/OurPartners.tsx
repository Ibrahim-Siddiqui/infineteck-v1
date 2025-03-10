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

const OurPartners = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold">Our Partners</h1>
      <h3 className="text-3xl text-center font-semibold py-5">
        Achieve Online Success and Boosted Revenues
      </h3>
      <p className="text-lg text-center py-5">
        We are a company that focuses on smart and productive digital solutions
        that maximize your business opportunities.
      </p>

      <Carousel
        opts={
          {
            //   align: "",
            loop: true
          }
        }
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className=" pb-[10%] mx-[5%]"
      >
        <CarouselContent className="">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="basis-1/2 md:basis-1/3 ">
              <div className="p-1 flex justify-center bg-gray-100 rounded-lg">
                {/* <Card> */}
                {/* <CardContent className="flex justify-center"> */}
                <Image src={partner.img} width={300} height={100} alt="logo" />
                {/* <Image src="/appName.svg" width={100} height={100} alt="logo" /> */}
                {/* </CardContent> */}
                {/* </Card> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OurPartners;
