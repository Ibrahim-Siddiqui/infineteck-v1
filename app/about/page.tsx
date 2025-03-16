"use client";

import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import NewNavbar from "@/components/NewNavbar";
import Hero from "./components/Hero";
import QuoteCard from "./components/QuoteCard";
import { Handshake, TrendingUp } from "lucide-react";
import ValueCard from "./components/ValueCard";
import ContactForm from "./components/ContactForm";
import HeroCounter from "@/components/ui/HeroCounter";

const Home = () => {
  const values = [
    {
      id: 1,
      title: "Why Partner with Us?",
      content: (
        <p className="lg:text-lg">
          At Infineteck, we don’t just deliver projects—we fuel transformations.
          With 95% client retention and 200+ successful projects, we’ve mastered
          the art of turning challenges into opportunities.
        </p>
      ),
      image: <Handshake size={48} />,
    },
    {
      id: 2,
      title: "What We Excel At?",
      content: (
        <p className="lg:text-lg">
          We’re not just tech enthusiasts—we’re problem solvers. We help you
          dominate your industry’s digital landscape thorugh technology mastery
          and creative brilliance.
        </p>
      ),
      image: <TrendingUp size={48} />,
    },
    {
      id: 3,
      title: "Your Trusted Partner in Digital Success",
      content: (
        <p className="lg:text-lg">
          We’re not just tech enthusiasts—we’re problem solvers. We help you
          dominate your industry’s digital landscape thorugh technology mastery
          and creative brilliance.
        </p>
      ),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chart-no-axes-combined"
        >
          <path d="M12 16v5" />
          <path d="M16 14v7" />
          <path d="M20 10v11" />
          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
          <path d="M4 18v3" />
          <path d="M8 14v7" />
        </svg>
      ),
    },
  ];

  const mission =
    "To empower businesses of all sizes with future-ready solutions that drive growth, enhance efficiency, and unlock infinite possibilities. We believe in:";
  const missionPoints = [
    {
      id: 1,
      heading: "Innovation: ",
      text: "Leveraging AI, automation, and cutting-edge tech to solve real-world challenges.",
    },
    {
      id: 2,
      heading: "Creativity: ",
      text: "Crafting brands and digital experiences that resonate deeply with audiences.",
    },
    {
      id: 3,
      heading: "Results: ",
      text: "Delivering ROI-focused strategies that scale with your ambitions.",
    },
  ];
  const vision =
    "To become the global catalyst for digital excellence, where every business—regardless of size—can harness technology to dominate their industry, inspire loyalty, and shape the future.";

  return (
    <main className="relative overflow-hidden ">
      <div className="">
        <NewNavbar />
        <Hero />
        <div className="px-[5%] pt-[15%] sm:pt-[5%] flex flex-col lg:flex-row justify-center gap-[5%]">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              Infineteck's Achievements
            </h1>
            <p className="text-lg md:text-xl text-gray-500">
              We take pride in empowering businesses worldwide with innovative
              solutions.
            </p>
            <p className="text-lg md:text-xl text-gray-500">
              Infineteck bring an unwavering commitment to excellence, backed by
              a global presence.
            </p>
          </div>
          <HeroCounter />
        </div>
        <div className="">
          <div className="px-[10%] pt-[10%] sm:pt-[5%] flex ">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              Our Mission
            </h1>
          </div>
          <QuoteCard text={mission} points={missionPoints} />

          <div className="px-[10%] pt-[25%] sm:pt-[5%] flex ">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              Our Vision
            </h1>
          </div>
          <QuoteCard text={vision} points="" />
        </div>

        <div className="pt-[15%] sm:pt-[5%]">
          <h1 className="text-3xl lg:text-5xl text-center font-extrabold ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              Our Values
            </span>
          </h1>
        </div>
        <div className="mx-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              className="cursor-pointer transition-all duration-300 ease-in-out"
              key={value.id}
            >
              <ValueCard item={value} />
            </div>
          ))}
        </div>
        <RecentProjects />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
