// "use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    route: string;
    // icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  // const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  // const [visible, setVisible] = useState(true);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   // Check if current is not undefined and is a number
  //   if (typeof current === "number") {
  //     let direction = current! - scrollYProgress.getPrevious()!;

  //     if (scrollYProgress.get() < 0.05) {
  //       // also set true for the initial state
  //       setVisible(true);
  //     } else {
  //       if (direction < 0) {
  //         setVisible(true);
  //       } else {
  //         setVisible(false);
  //       }
  //     }
  //   }
  // });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  // const router = useRouter();

  return (
    <nav className="sticky top-0 bg-white shadow-md flex lg:flex lg:justify-between z-[1]">
      <div className={`container py-2 lg:flex justify-between`}>
        <Link href="/" className="text-xl font-light capitalcase flex items-center">
          <Image src="/logo.png" width={50} height={50} alt="cosmic jewels logo"/>
          {/* Cosmic Jewels */}
        </Link>
        
        <button
          className="lg:hidden inline-flex float-right border h-15 w-15 outline-none focus:outline-none border-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image src="/logo.png" height={50} alt="menu icon" width={40} />
        </button>

        <div
          className={`lg:flex lg:w-auto mt-4 lg:mt-0 lg:items-end ${
            isMobileMenuOpen
              ? "transition-all transform duration-500 focus:ease-in-out flex"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:w-auto space-y-2 lg:space-y-0 lg:space-x-2">
            <li className="">
              <Link
                href="/"
                className="flex px-4 py-2 font-medium hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                href="/about"
                className="flex px-4 py-2 font-medium hover:text-gray-600"
              >
                About Us
              </Link>
            </li> */}
            <li className="relative">
              {isMobileMenuOpen ? (
                // <Link
                //   href="/services"
                //   className="flex px-4 py-2 font-medium hover:text-gray-600"
                //   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                // >
                <button
                  className=" flex px-4 py-2 font-medium hover:text-gray-600"
                  onClick={() => {setIsDropdownOpen(!isDropdownOpen); }}
                > 
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 pt-1 ml-1 inline-block group-open::rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ) : (
                // </Link>

                <Link
                  href="/services"
                  className="flex px-4 py-2 font-medium hover:text-gray-600"
                  //   onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseOver={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services
                  <button className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 pt-1 ml-1 inline-block"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              )}

              <div
              // bg-[#dbd9d9]
                className={`lg:absolute bg-white lg:border lg:border-gray-300 top-12 ml-4 w-96 lg:w-64 ${
                  !isDropdownOpen ? "hidden" : ""
                }`}
                onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <ul className="space-y-2 p-2">
                  <li className="border-solid border-1 p-2 hover:text-gray-600">
                    <Link href="/services/modeling" className="hover:text-gray-600">Modeling</Link>
                  </li>
                  <Link href="/services/sketching">
                    <li className="border-solid border-1 p-2 hover:text-gray-600">
                      Sketching
                    </li>
                  </Link>

                  <Link href="/services/rendering">
                    <li className="border-solid border-1 p-2 hover:text-gray-600">
                      Rendering
                    </li>
                  </Link>
                  <Link href="/services/animation">
                    <li className="border-solid border-1 p-2 hover:text-gray-600">
                      Animation
                    </li>
                  </Link>
                  <Link href="/services/3d-design">
                    <li className="border-solid border-1 p-2 hover:text-gray-600">
                      3D Jewellery Design
                    </li>
                  </Link>
                  <Link href="/services/card-design">
                    <li className="border-solid border-1 p-2 hover:text-gray-600">
                      Jewllery Card Design
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="flex px-4 py-2 font-medium hover:text-gray-600"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex px-4 py-2 font-medium hover:text-gray-600"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex px-4 py-2 font-medium hover:text-gray-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

{
  /* </div> */
}
