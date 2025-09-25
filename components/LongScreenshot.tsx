// // components/LongScreenshot.js

// import Image from "next/image";

// export default function LongScreenshot() {
//   return (
//     <div className="relative w-full max-w-md h-96 overflow-hidden group border border-gray-300 rounded-md shadow">
//       <div className="absolute">
//         <Image
//           src="/ui-ux-4.jpg"
//           alt=""
//           width={700}
//         //   layout="fill"
//         height={100}
//           objectFit="cover"
//           objectPosition="top"
//           className="transition-transform duration-[5000ms] hover:animate-scrollY"
//         />
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useRef } from 'react';
// import Image from 'next/image';

// export default function LongScreenshot({ alt = "Long screenshot" }) {
//   const containerRef = useRef(null);
//   const scrollTimeoutRef = useRef(null);

//   // Scroll smoothly from top to bottom
//   const handleMouseEnter = () => {
//     const container = containerRef.current;
//     if (!container) return;

//     const maxScroll = container.scrollHeight - container.clientHeight;

//     container.scrollTo({
//       top: maxScroll,
//       behavior: 'smooth',
//     });
//   };

//   // Reset scroll back to top when mouse leaves
//   const handleMouseLeave = () => {
//     const container = containerRef.current;
//     if (!container) return;

//     // Optionally, cancel ongoing scroll
//     container.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="w-full max-w-md h-96 overflow-hidden overflow-y-hidden border border-gray-300 rounded-md shadow"
//     >
//       <Image
//         src="/ui-ux-4.jpg"
//         alt={alt}
//         width={400}
//         height={1200}
//         className="w-full object-cover"
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { UIUXPortfolioData } from "@/data";

type AutoScrollImageProps = {
  alt?: string;
  height?: number; // container height
  duration?: number; // scroll duration in seconds
  path?: string;
};

export default function LongScreenshot({
  alt = "screenshot",
  height = 600,
  duration = 5,
  path,
}: AutoScrollImageProps) {
  const controls = useAnimation();
  const [imgHeight, setImgHeight] = useState(0);
  // const downDuration = 10
  const upDuration = 1


  const handleMouseEnter = () => {
    if (imgHeight > height) {
      controls.start({
        y: -(height),
        transition: { duration, ease: "linear" },
      });
    }
    // if (imgHeight > height * 2) {
      
    // }
  };

  const handleMouseLeave = () => {
    controls.start({
      y: 0,
      transition: { upDuration , ease: "linear" },
    });
  };

  return (
    <div className="">
    
      <div
      className="overflow-y-hidden rounded-md w-[400px] h-[450px]"
      // style={{ height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        // src="/ui-ux-9.jpg"
        src={path}
        alt={alt}
        className="col-span-1 object-cover"
        animate={controls}
        onLoad={(e) => setImgHeight(e.currentTarget.naturalHeight)}
        />
    </div>
    
     </div>
  );
}
