import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";

const Testimonial = () => {
  return (
    <div className="max-w-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Client Feedback</h2>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">Testimonials</h1>
      </div>
      <div className="relative flex justify-center py-[2rem] mx-auto">
        <Carousel className="max-w-[75%] sm:max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
          <CarouselPrevious className="mx-15" />
          <CarouselContent className="">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="flex flex-col items-center justify-center">
                <h1 className="text-xl text-center font-bold">
                  Top Notch Service
                </h1>
                <p className="text-center text-lg italic">
                  <span className="text-primary-color text-4xl font-bold">
                    &#8220;
                  </span>{" "}
                  {testimonial.quote} <br />
                  <span className="text-primary-color text-4xl font-bold float-right">
                    &#8220;
                  </span>
                </p>
                <p className="text-center text-xl font-bold text-primary-color">
                  {testimonial.name}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mx-15" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
