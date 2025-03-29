"use client";
import { motion } from "framer-motion";
import { Blocks, ShoppingCart, Wrench } from "lucide-react";

const FeatureCards = () => {
  const WebCardsData = [
    {
      id: 1,
      name: "Web Maintenance and Support",
      // title: "Branding That Converts",
      desc: "We provide top-tier web maintenance and support services to ensure your website runs smoothly and efficiently. Our team handles updates, security, and performance monitoring, allowing you to focus on growing your business while we take care of the technical aspects.",
      icon: <Wrench size={48} />,

    },
    {
      id: 2,
      name: "E-Commerce Website Development:",
      // title: "Branding That Converts",
      desc: "We specialize in building robust e-commerce websites tailored to your business needs. From seamless product catalog navigation to secure payment gateways, our solutions provide a smooth shopping experience for your customers.",
      icon: <ShoppingCart size={48} />,
    },
    {
      id: 3,
      name: "CMS Integration and Development",
      // title: "Branding That Converts",
      desc: "Our CMS integration and development services empower you to manage your website content with ease. We work with top platforms like WordPress, Drupal, Shopify, and Joomla to create custom solutions that suit your business requirements.",
      icon: <Blocks size={48} />,
    },
  ];

  return (
    <section
      className="mb-[5%]"
      // initial={{
      //   opacity: 0,
      //   translateY: 100,
      // }}
      // whileInView={{
      //   translateY: 0,
      //   opacity: 1,
      // }}
      // transition={{
      //   duration: 1,
      // }}
      // viewport={{
      //   once: true,
      //   margin: "-250px",
      // }}
    >
      <div className="pt-[5%] mx-auto max-w-7xl ">
        <h1 className="text-2xl lg:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Hire Web Design & Development Professionals infineteck is a leading
          center for web design and development services
        </h1>
        <h1 className="my-[2%] text-lg lg:text-2xl text-center font-medium">
          Aside from operating as a point of service, your web presence is
          critical for your brand. Begin with an expert team that understands
          exactly what you require to move forward.
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
    </section>
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
        <h3 className="text-2xl font-bold tracking-tight">{item.name}</h3>
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
