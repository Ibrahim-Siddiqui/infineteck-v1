import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Plans = ({ plans }: any) => {
  return (
    <motion.div
      className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-8 ">
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

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
              {plan.originalPrice && (
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl line-through">
                    {" "}
                    {plan.originalPrice}{" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    /month
                  </span>
                </p>
              )}
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4 max-h-[50vh] overflow-y-scroll">
                {plan.features.map((feature: any) => (
                  <li key={feature} className="flex items-center gap-1">
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

                    <span className="text-gray-700">{feature}</span>
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

export default Plans;
