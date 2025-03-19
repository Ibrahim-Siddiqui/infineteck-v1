import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      className="max-w-screen"
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
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Client Feedback</h2>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Testimonials
        </h1>
      </div>
      <div className="flex justify-center py-[2rem] mx-auto">
        <Carousel
          className="sticky max-w-[75%] sm:max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl z-[-1]"
          opts={{
            //   align: "",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          {/* <CarouselPrevious className="mx-15" /> */}
          <CarouselContent className="">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="flex flex-col items-center justify-center"
              >
                {/* <h1 className="text-xl text-center font-bold">
                  Top Notch Service
                </h1> */}
                <p className="text-center text-lg italic">
                  <span className="text-primary-color text-4xl font-bold">
                    &#8220;
                  </span>{" "}
                  {testimonial.quote}{" "}
                  <span className="text-primary-color text-4xl/5 font-bold">
                    &#8220;
                  </span>
                </p>
                <p className="text-center text-xl font-bold text-primary-color">
                  {testimonial.name}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselNext className="mx-15" /> */}
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Testimonial;
