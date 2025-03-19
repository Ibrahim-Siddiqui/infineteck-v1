import Image from "next/image";
import React from "react";
import {
  ChevronRight,
  Play,
  MonitorSmartphone,
  ShoppingCart,
  Gamepad2,
  BrainCircuit,
  LucideBarChart,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    name: "Digital Marketing & Branding",
    title: "Branding That Converts",
    desc: "Build unforgettable brands and dominate search engines with data-driven marketing strategies.",
    icon: <LucideBarChart size={48} />,
  },
  {
    id: 2,

    name: "Website & App Development",
    title: "Future-Ready Websites & Apps",
    desc: "Craft lightning-fast websites and intuitive apps that engage users, boost conversions, and grow your business.",
    icon: <MonitorSmartphone size={48} />,
  },
  {
    id: 3,
    name: "Game Development",
    title: "Immersive Game Experiences",
    desc: "Design 2D/3D games that captivate audiences, from casual mobile games to high-end console adventures.",
    icon: <Gamepad2 size={48} />,
  },
  {
    id: 4,
    name: "2D & 3D Animation - Video Editing",
    title: "Animation & Video That Wows",
    desc: "Bring ideas to life with stunning animations and polished video edits.",
    icon: <Play size={48} />,
  },
  {
    id: 5,
    name: "E-commerce Solutions",
    title: "E-commerce That Scales",
    desc: "Build high-converting online stores with seamless checkout, smart inventory, and AI-powered insights.",
    icon: <ShoppingCart size={48} />,
  },
  {
    id: 6,
    name: "AI Automation",
    title: "AI-Driven Business Growth",
    desc: "Automate workflows, predict trends, and unlock efficiency with tailor-made AI solutions.",
    icon: <BrainCircuit size={48} />,
  },
];

const HomeOffer = () => {
  return (
    // bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200
    
    <motion.section className=""
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
        margin: '-250px',
      }}
    >
      <div className="pt-[5%]">
        <h1 className="text-3xl lg:text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Our Services
        </h1>
        <h1 className="my-[2%] text-3xl lg:text-5xl text-center font-extrabold">
          Transform your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Business
          </span>
        </h1>
      </div>
      <div className="mx-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((item) => (
          <div
            className="cursor-pointer transition-all duration-300 ease-in-out"
            key={item.id}
          >
            <OfferItem item={item} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HomeOffer;

const OfferItem = ({ item }: any) => {
  return (
    <div
      key={item.id}
      // border-2 border-primary-color rounded-lg
      className="h-[90%] flex flex-col justify-center group border border-primary-color rounded-lg p-[5%] my-[5%] mx-[2%] hover:bg-accent-color hover:text-white hover:transition-all duration-1000 ease-in-out"
    >
      <div className="flex flex-col gap-5 justify-between items-start">
        {/* <Image src={item.icon} width={100} height={100} alt="icon" /> */}
        <div className="text-primary-color group-hover:text-white">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold tracking-tighter">{item.name}</h3>
      </div>
      <hr className="border-1 border-primary-color group-hover:border-white" />

      {/* <h3 className="mt-[5%] mb-[2%] text-2xl font-semibold">
        {item.title}
      </h3> */}
      <p className="row-span-3 my-[5%] text-md lg:text-lg tracking-tight">{item.desc}</p>

      {/* <a className="flex gap-2 my-[2%] text-primary-color group-hover:text-inherit font-semibold">
        Read More
        <ChevronRight />
      </a> */}
    </div>
  );
};
