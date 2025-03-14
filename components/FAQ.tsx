import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";

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

  return (
    <>
      <div className="">
        <h1 className="text-2xl lg:text-5xl font-bold text-center py-[5%]">
          Frequently Asked{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            {" "}
            Questions
          </span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-md md:text-xl focus:outline-none p-4 bg-white rounded-lg shadow-sm shadow-primary-color flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
              }
            >
              {faq.question}
              {activeQuestion === faq.id ? (
                <MinusCircle className="text-primary-color" />
              ) : (
                <PlusCircle className="text-primary-color" />
              )}
            </button>
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
    </>
  );
};

export default FAQ;
