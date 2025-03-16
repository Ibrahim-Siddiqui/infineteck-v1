import React from "react";
import CountUp from "react-countup";

const HeroCounter = () => {
  return (
    <div className="text-primary-color">
      <div className="grid grid-cols-3 lg:flex lg:gap-5">
        <div className="w-full md:w-1/2 py-8">
          <div className="">
            <CountUp
              end={100}
              duration={2}
              className="text-4xl md:text-5xl  font-semibold text-center"
            />
            <h2 className="inline text-4xl md:text-5xl  font-semibold text-center">
              +
            </h2>
            <p className=" mb-2 text-left text-black">Happy Clients</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-8">
          <div className="">
            <CountUp
              end={100}
              duration={2}
              className="text-4xl md:text-5xl  font-semibold text-center"
            />
            <h2 className="inline text-4xl md:text-5xl  font-semibold text-left">
              +
            </h2>
            <p className=" mb-2 text-left text-black">Projects Done</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-8">
          <div className="">
            <CountUp
              end={98}
              duration={2}
              className="text-4xl md:text-5xl  font-semibold text-center"
            />
            <h2 className="inline text-4xl md:text-5xl  font-semibold text-center">
              %
            </h2>
            <p className=" mb-2 text-left text-black">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCounter;
