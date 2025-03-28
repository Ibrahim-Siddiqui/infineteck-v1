"use client";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Gauge,
  HandCoins,
  Handshake,
  SearchCheck,
  SearchCode,
  ShoppingCart,
  SquareActivity,
  Store,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const FeatureCards = () => {
  const WebCardsData = [
    {
      id: 1,
      name: "WooCommerce Development",
      desc: "Build flexible and scalable WooCommerce stores with seamless WordPress integration.",
      icon: <Image src="/woo-logo.svg" width={48} height={48} sizes="48" alt="woo-commerce logo"/>,
    },
    {
      id: 2,
      name: "Shopify Store Setup",
      desc: "Launch high-converting Shopify stores with optimized user experiences.",
      icon: <Image src="/shopify-logo.svg" width={48} height={48} sizes="48" alt="woo-commerce logo"/>,
    },
    {
      id: 3,
      name: "Custom E-Commerce Development",
      desc: "Create unique online stores with tailored features and advanced functionalities.",
      icon: <ShoppingCart  size={48} />,
    },
    {
      id: 4,
      name: "Payment Gateway Integration",
      desc: "Enable secure, fast, and reliable payment processing for smooth transactions.",
      icon: <HandCoins  size={48} />,
    },
    {
      id: 5,
      name: "SEO & Performance Optimization",
      desc: "Enhance speed, user experience, and search engine rankings for better conversions.",
      icon: <Gauge  size={48} />,
    },
    {
      id: 5,
      name: "Multi-Vendor Marketplace",
      desc: "Develop a feature-rich marketplace supporting multiple sellers and seamless transactions.",
      icon: <Store  size={48} />,
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
        <h1 className="text-2xl lg:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Comprehensive E-Commerce Solutions
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
      <p className="row-span-3 my-[5%] text-md lg:text-lg tracking-tight">
        {item.desc}
      </p>

      {/* <a className="flex gap-2 my-[2%] text-primary-color group-hover:text-inherit font-semibold">
          Read More
          <ChevronRight />
        </a> */}
    </div>
  );
};
