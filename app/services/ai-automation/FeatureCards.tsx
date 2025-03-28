"use client";
import { motion } from "framer-motion";
import { BotMessageSquare, Sparkles, Workflow } from "lucide-react";

const FeatureCards = () => {
  const WebCardsData = [
    {
      id: 1,
      name: "Intelligent Chatbots",
      desc: "Automate customer interactions with AI-powered chatbots that provide instant responses and 24/7 support.",
      icon: <BotMessageSquare  size={48} />,
    },
    {
      id: 2,
      name: "Smart Workflow Automation",
      desc: "Boost productivity by automating repetitive tasks, streamlining operations, and reducing manual workload.",
      icon: <Workflow  size={48} />,
    },
    {
      id: 3,
      name: "AI-Powered Insights",
      desc: "Leverage AI-driven analytics to make data-driven decisions, predict trends, and optimize business strategies.",
      icon: <Sparkles size={48} />,
    },
  ];

  return (
    <motion.section
      className="mb-[5%]"
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
        margin: "-250px",
      }}
    >
      <div className="pt-[5%] mx-auto max-w-7xl ">
        <h1 className="text-2xl lg:text-3xl text-center font-bold">
          Enhance Your Business with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            {" "}
            AI Automation{" "}
          </span>
          <br />
        </h1>
        <h1 className="my-[2%] text-lg lg:text-2xl text-center font-medium">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color"></span>
        </h1>
      </div>
      <div className="mx-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {WebCardsData.map((card: any) => (
          <div
            className="cursor-pointer transition-all duration-300 ease-in-out"
            key={card.id}
          >
            <CardItem item={card} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeatureCards;

const CardItem = ({ item }: any) => {
  return (
    <div
      key={item.id}
      // border-2 border-primary-color rounded-lg
      className="h-[90%] flex flex-col justify-center group border border-primary-color rounded-lg p-[5%] my-[5%] mx-[2%] hover:bg-accent-color hover:text-white hover:transition-all duration-1000 ease-in-out"
    >
      <div className="flex flex-col gap-5 justify-between items-start">
        <div className="text-primary-color group-hover:text-white">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{item.name}</h3>
      </div>
      <hr className="border-1 border-primary-color group-hover:border-white" />

      <p className="row-span-3 my-[5%] text-md lg:text-lg tracking-tight">
        {item.desc}
      </p>
    </div>
  );
};
