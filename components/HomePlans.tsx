"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brandingPlans, socialPlans, webDevPlans } from "@/app/pricing/data";
const HomePlans = ({ plans }: any) => {
  const [webDev, setWebDev] = useState(true);
  const [branding, setBranding] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);
  const handleButtonClick = (stateSetter: (value: boolean) => void) => {
    setWebDev(false);
    setBranding(false);
    setSocialMedia(false);

    stateSetter(true);
  };
  return (
    <div className="mt-5 sm:mt-12 mx-2 lg:mx-4">
      <h2 className="py-5 text-2xl md:text-5xl text-center font-bold leading-5 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
        Our Competitive Pricing
      </h2>
      <div className="flex justify-center gap-5 text-sm lg:text-lg lg:tracking-tighter">
        <button
          className="rounded-lg px-2 py-2 md:py-4 text-primary-color transition-all bg-white hover:scale-105  border-2 border-primary-color  hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setWebDev)}
        >
          Web Development
        </button>
        <button
          className=" rounded-lg px-2 py-2 md:py-4 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setBranding)}
        >
          Design & Branding
        </button>
        <button
          className=" rounded-lg px-2 py-2 md:py-4 text-primary-color transition-all bg-white hover:scale-105 border-2 border-primary-color hover:bg-primary-color hover:text-white"
          onClick={() => handleButtonClick(setSocialMedia)}
        >
          Social Media Management
        </button>
      </div>

      {webDev ? <HomePlan plans={webDevPlans} /> : <></>}
      {branding ? <HomePlan plans={brandingPlans} /> : <></>}
      {socialMedia ? <HomePlan plans={socialPlans} /> : <></>}
    </div>
  );
};

export default HomePlans;

export const HomePlan = ({ plans }: any) => {
  return (
    <motion.div
      className="px-4 pt-5 sm:px-6 lg:px-8 lg:pb-12"
      initial={{
        // opacity: 0,
        translateY: 150,
      }}
      whileInView={{
        translateY: 0,
        // opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
        margin: "-250px",
      }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
        {/* <AnimatePresence> */}
        {plans.map((plan: any) => (
          // divide-y-2 divide-accent-color
          <motion.div
            key={plan.id}
            className="flex flex-col justify-between  rounded-2xl border-2 border-secondary-color shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 10 }}
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900">
                {plan.title}
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700 font-semibold">{plan.addOn}</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  {plan.discountedPrice}{" "}
                </strong>

                <span className="text-sm font-medium text-gray-700"></span>
              </p>
              {plan.originalPrice && (
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl line-through">
                    {" "}
                    {plan.originalPrice}{" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700"></span>
                </p>
              )}
              {plan.savings && (
                <p className="text-lg font-medium text-gray-900 sm:text-xl">
                  {plan.savings}
                </p>
              )}
            </div>

            <div className="p-6 sm:px-8 h-full">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                {plan.inclusion}
              </p>

              <ul
                className="mt-2 space-y-2 sm:mt-4 h-full max-h-[60vh] overflow-x-auto overflow-y-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#1c3be9 white",
                }}
              >
                {plan.features.map((feature: any) => (
                  <li key={feature} className="flex items-center gap-1">
                    {feature[0] !== "\t" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}

                    <span className="text-gray-700 whitespace-pre">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              className="my-4 mx-5 block rounded-sm border bg-primary-color px-12 py-3 text-center text-lg font-medium text-white transition-all duration-300 hover:scale-105 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="/contact"
            >
              ORDER NOW
            </a>
          </motion.div>
        ))}
        {/* </AnimatePresence> */}
      </div>
    </motion.div>
  );
};
