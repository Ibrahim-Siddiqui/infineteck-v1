"use client";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Handshake,
  SearchCheck,
  SearchCode,
  SquareActivity,
  ThumbsUp,
} from "lucide-react";

const FeatureCards = () => {
  const WebCardsData = [
    {
      id: 1,
      name: "Digital Consultancy",
      // title: "Branding That Converts",
      desc: "Infineteck provides end-to-end digital consulting, guiding you from strategy to execution. We focus on innovation to elevate your digital business, optimize operations, and enhance customer experiences for sustainable growth.",
      icon: <Handshake size={48} />,
    },
    {
      id: 2,
      name: "Brand Marketing",
      // title: "Branding That Converts",
      desc: "Brand marketing involves developing and managing a strategic approach to position your organization as a market leader. It focuses on building brand awareness, ensuring your audience recognizes and trusts your brand.",
      icon: <BadgeCheck size={48} />,
    },
    {
      id: 3,
      name: "Software Analysis",
      // title: "Branding That Converts",
      desc: "Infineteck conducts comprehensive software performance analysis to evaluate the functionality and efficiency of your program. We help optimize your software to ensure it operates smoothly under varying conditions, providing a better user experience and improving overall system reliability.",
      icon: <SearchCode size={48} />,
    },
    {
      id: 4,
      name: "Traffic Analysis",
      // title: "Branding That Converts",
      desc: "We offer effective website traffic analytics strategies that can be implemented in your business to drive increased traffic to your website. Our site traffic analysis strategies involve tracking user behavior, identifying traffic sources, and understanding audience engagement.",
      icon: <SearchCheck size={48} />,
    },
    {
      id: 5,
      name: "Social Media Marketing",
      // title: "Branding That Converts",
      desc: "A strong social media marketing strategy is key to building a trusted and engaged audience. We assist you in maintaining a consistent social presence, capturing the attention of your target audience across relevant social platforms.",
      icon: <ThumbsUp size={48} />,
    },
    {
      id: 5,
      name: "Performance Monitoring Tool",
      // title: "Branding That Converts",
      desc: "For emerging businesses and growing organizations, a digital expert can create a tailored digital marketing strategy to help you attract and retain a loyal customer base. Our digital experts employ data-driven strategies, including personalized marketing campaigns targeted content creation.",
      icon: <SquareActivity size={48} />,
    },
  ];

  return (
    <section
      className="mb-[5%]"
     
    >
      {/* <div className="pt-[5%] mx-auto max-w-7xl ">
        <h1 className="text-2xl lg:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          Hire App Design & Development Professionals
          <br />
          Infineteck is a leading center for App design and development
          services.
        </h1>
        <h1 className="my-[2%] text-lg lg:text-2xl text-center font-medium">
          Aside from operating as a point of service, your app presence is
          critical for your brand. Begin with an expert team that understands
          exactly what you require to move forward.
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color"></span>
        </h1>
      </div> */}
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
