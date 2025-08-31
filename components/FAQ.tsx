import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate, color } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";
import Link from "next/link";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqs = [
    {
      id: 1,
      question:
        "What makes Infineteck different from other software companies?",
      answer:
        "We combine creative branding, AI automation, and industry-specific expertise to deliver end-to-end solutions. Unlike generic agencies, we focus on scalable growth, ensuring your website, app, or marketing strategy evolves with your business.",
    },
    {
      id: 2,
      question: "How long does it take to develop a website or app?",
      answer:
        "Timelines vary based on complexity, but most projects are delivered in 4-8 weeks. We prioritize quality and collaboration, keeping you updated at every stage to ensure deadlines align with your goals.",
    },
    {
      id: 3,
      question: "What's the cost of your services?",
      answer:
        "We offer tailored pricing to match your budget and needs. Whether you’re a startup or enterprise, our solutions are designed to maximize ROI—transparent quotes with no hidden fees.",
    },
    {
      id: 4,
      question: "Can AI automation work for small businesses?",
      answer:
        "Absolutely! Our AI solutions streamline tasks like customer support, data analysis, and inventory management, freeing your team to focus on growth. We customize tools to fit businesses of all sizes.",
    },
    {
      id: 5,
      question: "How do you measure success in digital marketing?",
      answer:
        "We track real metrics: traffic growth, conversion rates, ROI, and social engagement. Monthly reports and strategy tweaks ensure your campaigns stay ahead of competitors.",
    },
  ];
  const variants = {
    enter: { scale: 1.03, transition: { duration: 0.5 } },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } }
  };  
  const backgroundStyle = `.bg-color{
  background
  }`;

  return (
    <div
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
    //   margin: '-250px',
    // }}
    >
      <div className="my-[5%]">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">
        Got Questions? {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            {" "}
            Infineteck Has the Answers
          </span>
        </h1>
        <h3 className="text-lg md:text-xl text-center font-medium leading-[100%]">
        From pricing to project timelines, tech stacks to support Infineteck believes in full transparency.
        <br />
        Explore our FAQs to see how Infineteck makes your digital journey smooth, smart and stress free.
          </h3>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4 last:mb-0">
            <AnimatePresence>
              <motion.button
                className="w-full text-left text-md md:text-xl focus:outline-none p-4 bg-white rounded-lg shadow-sm shadow-primary-color flex justify-between items-center group"
                onClick={() =>
                  setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
                }
                initial={{ scale: 1, backgroundColor: "#fff" }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                }}
                whileTap={{
                  scale: 1.03,
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                }}
                transition={{ scale: { type: "spring", stiffness: 100, duration: 2 } }}
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
                  className="mt-2 px-[5%] md:px-5 text-md md:text-lg"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="my-[5%] flex justify-center gap-5">
              <Link
                href="/faqs"
                prefetch={false}
                className="text-sm md:text-xl rounded-lg border-2 border-accent-color px-6 py-2 md:px-10 md:py-4 text-white transition-all duration-300 bg-primary-color hover:scale-105"
              >
                For More Visit
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="text-sm md:text-xl rounded-lg border-2 border-accent-color px-2 py-2 md:px-6 md:py-4 text-white transition-all duration-300 bg-primary-color hover:scale-105"
              >
                Free Expert Advice
              </Link>
            </div>
    </div>
  );
};

export default FAQ;
