"use client";
import NewNavbar from "@/components/NewNavbar";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { faqs, faqs2 } from "./data";
import { MinusCircle, PlusCircle } from "lucide-react";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  return (
    <div>
      <NewNavbar />

      <div className="mt-[25%] md:mt-[10%] px-[5%]">
        <h2 className="text-xl md:text-3xl text-center font-semibold">
          <span className="text-primary-color underline">Questions??</span>{" "}
          We're happy to help!
        </h2>
        <p className="text-sm md:text-lg text-center">
          Below are answers to frequently asked questions about how Clutchpilot
          works and how you can make the most of it through Clutchpilot.
        </p>
      </div>
      <div className="my-[10%] md:my-[5%] md:grid grid-cols-2">
          <div className="">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4 last:mb-0 px-5">
              <AnimatePresence>
                <motion.button
                  className="w-full text-left text-sm md:text-lg focus:outline-none p-4 bg-white rounded-md shadow-sm shadow-primary-color flex justify-between items-center group"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
                  }
                  initial={{ scale: 1, backgroundColor: "#fff" }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                  }}
                  whileTap={{
                    scale: 1.03,
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 100, duration: 2 },
                  }}
                >
                  {faq.question}
                  {activeQuestion === faq.id ? (
                    <MinusCircle className="text-primary-color group-hover:text-inherit" />
                  ) : (
                    // <style>{backgroundStyle}</style>
                    <PlusCircle className="text-primary-color group-hover:text-inherit" />
                  )}
                </motion.button>
              </AnimatePresence>
              <AnimatePresence>
                {activeQuestion === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 px-[5%] md:px-5 text-sm md:text-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          </div>
          <div className="">
          {faqs2.map((faq) => (
            <div key={faq.id} className="mb-4 last:mb-0 px-5">
              <AnimatePresence>
                <motion.button
                  className="w-full text-left text-sm md:text-lg focus:outline-none p-4 bg-white rounded-md shadow-sm shadow-primary-color flex justify-between items-center group"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
                  }
                  initial={{ scale: 1, backgroundColor: "#fff" }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                  }}
                  whileTap={{
                    scale: 1.03,
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 100, duration: 2 },
                  }}
                >
                  {faq.question}
                  {activeQuestion === faq.id ? (
                    <MinusCircle className="text-primary-color group-hover:text-inherit" />
                  ) : (
                    // <style>{backgroundStyle}</style>
                    <PlusCircle className="text-primary-color group-hover:text-inherit" />
                  )}
                </motion.button>
              </AnimatePresence>
              <AnimatePresence>
                {activeQuestion === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 px-[5%] md:px-5 text-sm md:text-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default FAQs;
