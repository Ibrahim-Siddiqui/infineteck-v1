'use client'
import { navItems } from "@/data";

import Hero2 from "@/components/Hero2";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Timeline } from "@/components/ui/timeline";

const Home = () => {
  const timelineData = [
    {
      title: "Who We Are?",
      content: (
        <p className="lg:text-lg">
          At Infineteck, we transform bold ideas into innovative digital
          realities. With a focus on solving complex business challenges, we
          deliver bespoke, high-quality solutions designed to empower growth and
          drive success. Our expertise spans diverse industries, ensuring we
          tailor every project to meet unique goals with precision and
          creativity.
        </p>
      ),
      image: "/aboutWAW.png", // Place this image in the `public` folder
    },
    {
      title: "Why Partner with Us?",
      content: (
        <p className="lg:text-lg">
          With years of proven expertise, we specialize in delivering impactful
          solutions that combine precision, excellence, and unmatched quality in
          every project. Our commitment to providing premium outcomes at
          competitive prices ensures cost-effective results without compromising
          on value. At Infineteck, we take a client-centric approach, building
          trust through reliable and visionary partnerships that drive success.
        </p>
      ),
      image: "/aboutWCU.png",
    },
    {
      title: "What We Excel At?",
      content: (
        <p className="lg:text-lg">
          At Infineteck, we offer cutting-edge services to elevate your
          business. Our expertise includes web and app development for seamless
          user experiences, game development for immersive content, and AI and
          blockchain solutions to future-proof your business. We bring
          creativity to life with 2D and 3D animation, boost online growth with
          e-commerce strategies, and unlock new possibilities with metaverse
          virtual tours for interactive digital experiences.
        </p>
      ),
      image: "/aboutWWEA.png",
    },
    {
      title: "Your Trusted Partner in Digital Success",
      content: (
        <p className="lg:text-lg">
          At Infineteck, we are driven by our unwavering commitment to
          delivering exceptional results that save you time and money while
          adding real value to your business. Our team of experts, specialized
          in every service we offer, is dedicated to solving complex problems
          and presenting your brand powerfully in the digital world. From
          crafting premium-quality solutions to boosting your sales and online
          presence, we ensure every project is tailored to your goals. With
          Infineteck, you gain a trusted partner focused on helping your
          business thrive through innovative, efficient, and impactful
          strategies.
        </p>
      ),
      image: "/aboutYTPIDS.png",
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero2 />
        <Timeline data={timelineData} />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
