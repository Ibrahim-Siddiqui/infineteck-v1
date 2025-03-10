import { ChevronRight, LucideMonitorX} from "lucide-react";
import Image from "next/image";
import React from "react";

const offers = [
  {
    id: 1,
    name: "Digital Marketing & Branding",
    title: "Branding That Converts",
    desc: "Build unforgettable brands and dominate search engines with data-driven marketing strategies.",
    icon: "/exp5.png",
  },
  {
    id: 2,
    
    name: "Website & App Development",
    title: "Future-Ready Websites & Apps",
    desc: "Craft lightning-fast websites and intuitive apps that engage users, boost conversions, and grow your business.",
    icon: "/exp2.png",
  },
  {
    id: 3,
    name: "Game Development",
    title: "Immersive Game Experiences",
    desc: "Design 2D/3D games that captivate audiences, from casual mobile games to high-end console adventures.",
    icon: "/exp4.png",
  },
  {
    id: 4,
    name: "2D & 3D Animation - Video Editing",
    title: "Animation & Video That Wows",
    desc: "Bring ideas to life with stunning animations and polished video edits that tell your story.",
    icon: "/exp6.png",
  },
  {
    id: 5,
    name: "E-commerce Solutions",
    title: "E-commerce That Scales",
    desc: "Build high-converting online stores with seamless checkout, smart inventory, and AI-powered insights.",
    icon: "/exp7.png",
  },
  {
    id: 6,
    name: "Artificial Intelligence Automation",
    title: "AI-Driven Business Growth",
    desc: "Automate workflows, predict trends, and unlock efficiency with tailor-made AI solutions.",
    icon: "/exp8.png",
  },
];

const HomeOffer = () => {
  return (
    // bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200
    <section className="">
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
    </section>
  );
};

export default HomeOffer;

const OfferItem = ({ item }: any) => {
  return (
    <div
      key={item.id}
      className="flex flex-col justify-center border-2 border-primary-color rounded-lg p-[5%] my-[5%] mx-[2%]"
    >
      <div className="flex gap-5 items-center">

      <Image src={item.icon} width={100} height={100} alt="icon" />
      <h3 className="text-2xl font-bold">{item.name}</h3>
      </div>
      <hr className="border-1 border-primary-color" />
      
      <h3 className="mt-[5%] mb-[2%] text-2xl font-semibold">
        {item.title}
      </h3>
      <p className="my-[5%] text-lg lg:text-xl">{item.desc}</p>

      <a className="flex gap-2 my-[2%] text-primary-color font-semibold">
        Read More
        <ChevronRight />
      </a>
    </div>
  );
};
