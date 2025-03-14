import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Menus } from "@/data/utils";
import Link from "next/link";

export default function MobMenu({ Menus }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<any>(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-white text-black p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="text-lg md:text-xl">
          {Menus.map(({ name, link, subMenu }: any, i: number) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <Link href={link} key={name}>
                <li className="">
                  <span
                    className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"} `}
                      />
                    )}
                  </span>
                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-5"
                    >
                      {subMenu.map(({ name, icon: Icon }: any) => (
                        <li
                          key={name}
                          className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                        >
                          <Icon size={17} />
                          {name}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              </Link>
            );
          })}
          <div className="lg:hidden">
          <Link
            href="/blog"
            aria-label="sign-in"
            className="text-primary-color text-md text-center px-4 py-2 my-5 shadow rounded-lg border-2 border-primary-color hover:bg-primary-color hover:text-white hover:scale-105 transition-all duration-300 flex justify-center"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            aria-label="sign-in"
            className="bg-primary-color text-white text-md text-center px-4 py-2 my-5 shadow rounded-lg border-2 border-primary-color hover:scale-105 transition-all duration-300 flex justify-center"
          >
            Contact
          </Link>
        </div>
        </ul>
      </motion.div>
    </div>
  );
}
