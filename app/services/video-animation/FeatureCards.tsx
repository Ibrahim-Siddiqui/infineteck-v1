"use client";
import { motion } from "framer-motion";
import {
  ImagePlus,
  PersonStanding,
  PilcrowRight,
  Presentation,
  Rotate3d,
  SquareMousePointer,
} from "lucide-react";

const FeatureCards = () => {
  const WebCardsData = [
    {
      id: 1,
      name: "2D & 3D Animation",
      desc: "Our mission is to create a highly effective and suitable plan that will help you achieve your business goals.",
      icon: <Rotate3d size={48} />,
    },
    {
      id: 2,
      name: "Logo Animation",
      desc: "Synctal Solutions offers current, creative animated solutions that will make your company’s logo stand out and leave a lasting impression on viewers.",
      icon: <SquareMousePointer size={48} />,
    },
    {
      id: 3,
      name: "Cartoon Animation",
      desc: "Synctal Solutions uses top-notch 2D and 3D animation programs. We enjoy creating cartoon animation because it gives our designers and illustrators a chance to showcase their skills.",
      icon: <PersonStanding size={48} />,
    },
    {
      id: 4,
      name: "Motion Graphics Animation",
      desc: "In our 2D and 3D animations service, we blend creativity and cutting-edge technology to deliver animations that resonate with your audience.",
      icon: <ImagePlus size={48} />,
    },
    {
      id: 5,
      name: "Whiteboard Animation",
      desc: "We put a lot of effort and commitment into making whiteboard-animated videos. Whiteboard animation is far more effective in illustrating a more complicated idea or subject.",
      icon: <Presentation size={48} />,
    },
    {
      id: 6,
      name: "Typography Animation",
      desc: "Text and motion are used to convey ideas and evoke feelings among viewers. This method can be used on any project, including YouTube videos, websites, mobile apps, advertisements, and others.",
      icon: <PilcrowRight size={48} />,
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
