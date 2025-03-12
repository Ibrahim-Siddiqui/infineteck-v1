"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/public/logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

// import todoImage from "@/assets/images/icon-todo.svg";
// import calendarImage from "@/assets/images/icon-calendar.svg";
// import remindersImage from "@/assets/images/icon-reminders.svg";
// import planningImage from "@/assets/images/icon-planning.svg";
import webDevIcon from "@/public/web-dev.svg";
import appdDevIcon from "@/public/app-dev.svg";
import gameDevIcon from "@/public/game-dev.svg";
import marketingIcon from "@/public/digital-marketing.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  // {
  //   label: "About",
  //   link: "/about",
  // },
  {
    label: "Services",
    link: "#",
    children: [
      {
        label: "Web Development",
        link: "#",
        iconImage: webDevIcon,
      },
      {
        label: "App Development",
        link: "#",
        iconImage: appdDevIcon,
      },
      {
        label: "Game Development",
        link: "#",
        iconImage: gameDevIcon,
      },
      {
        label: "Digital Marketing",
        link: "#",
        iconImage: marketingIcon,
      },
    ],
  },
  // {
  //   label: "Compnay",
  //   link: "#",
  //   children: [
  //     {
  //       label: "History",
  //       link: "#",
  //     },
  //     {
  //       label: "Our Team",
  //       link: "#",
  //     },
  //   ],
  // },
  {
    label: "Portfolio",
    link: "/portfolio",
  },
  {
    label: "Pricing",
    link: "/pricing",
  },

  {
    label: "About",
    link: "/about",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    // bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200
    <nav className="flex w-full justify-between lg:justify-evenly px-[5%] py-5 text-sm md:text-lg">
      {/* left side  */}
      <div ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Image
          src={logo}
          alt=" logo"
          className="w-[10rem] lg:w-[13rem] flex items-center mb-[1%]"
        />
      </div>
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      <div className="hidden lg:flex gap-4 justify-center transition-all">
        {navItems.map((d, i) => (
          <Link
            key={i}
            href={d.link ?? "#"}
            className="relative group px-2 py-3 transition-all "
          >
            <p className="flex cursor-pointer items-center gap-2 text-accent-color group-hover:text-primary-color ">
              {d.label}
              {d.children && (
                <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
              )}
            </p>

            {/* dropdown */}
            {d.children && (
              <div className="absolute right-[-10] top-12 hidden w-[200%] flex-col gap-1 rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex hover:text-white">
                {d.children.map((ch, i) => (
                  <div key={i} className="flex flex-row px-[2%] gap-2 hover:text-primary-color">
                    {ch.iconImage && (
                      <Image
                        src={ch.iconImage}
                        className="w-[10%] m-0 p-0"
                        width={1}
                        height={1}
                        alt="icon"
                      />
                    )}
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 px-2 text-accent-color"
                    >
                      {/* image */}

                      {/* item */}
                      <p className="">{ch.label}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
      {/* navitems */}

      {/* right side data */}
      <div className=" hidden lg:flex items-center gap-4 ">
        <Link href="/blog" className="text-accent-color px-4 py-2 rounded-lg transition-all hover:bg-primary-color hover:text-white hover:scale-105">
          Blog
        </Link>

        <Link href="/contact" className="rounded-lg px-4 py-2 text-white transition-all bg-primary-color hover:scale-105">
          Contact
        </Link>
      </div>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl lg:hidden"
      />
    </nav>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="absolute left-0 top-0 flex h-full min-h-screen w-full justify-even bg-black/60 lg:hidden z-[99]">
      <div className=" h-full w-[95%] bg-white px-4 py-4">
        <div className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </div>
        <div className=" flex flex-col text-xl gap-2 transition-all px-[5%]">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <div className="flex flex-col gap-5 mt-4 items-center">
          <Link href="/blog" className="h-fit w-full max-w-[200px] px-4 py-2 rounded-lg text-center  text-accent-color transition-all hover:text-primary-color border-2 border-primary-color">
            Blog
          </Link>

          <Link href="/contact" className="w-full max-w-[200px] rounded-lg border-2 border-primary-color px-4 py-2 text-white text-center text-primary-color transition-all focus:scale-105 bg-primary-color">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <div className="">
      <Link
        ref={animationParent}
        onClick={toggleItem}
        href={d.link ?? "#"}
        className="relative px-2 py-3 transition-all "
      >
        <p className="flex cursor-pointer items-center gap-2 text-secondary-color group-hover:text-secondary-color ">
          <p>{d.label}</p>
          {d.children && (
            // rotate-180
            <IoIosArrowDown
              className={`text-xs transition-all ${
                isItemOpen && " rotate-180"
              }`}
            />
          )}
        </p>
      </Link>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1 rounded-lg bg-white py-3  transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-accent-color hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && (
                <Image
                  src={ch.iconImage}
                  className="w-[10%] m-0 p-0"
                  width={1}
                  height={1}
                  alt="icon"
                />
              )}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
