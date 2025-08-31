import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="flex flex-col md:flex-row mx-[5%] my-[5%]">
      <div className="md:max-w-[50%] flex flex-col justify-start gap-[5%] pt-[5%]">
        <h2 className="text-2xl md:text-5xl font-semibold">
          The Brain behind the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            Build by Infineteck
          </span>{" "}
          Unfiltered
        </h2>
        <p className="text-md md:text-lg">
          Level up your digital strategy with curated articles, blogs, how to
          guides and industry forecasts all from the minds at Infineteck which
          dives deep into what really drives digital success with bold ideas and
          no fluff.
          <br />
          From code to commerce, Infineteck shares the tools, trends and tech
          shaping tomorrow’s business. Stay current; stay fearless with
          Infineteck in your feed.
        </p>
        <div className="my-[5%] flex justify-start gap-5">
          <Link
            href="/blog"
            prefetch={false}
            className="text-sm md:text-xl rounded-lg border-2 border-accent-color px-4 py-2 md:px-6 md:py-4 text-white transition-all duration-300 bg-primary-color hover:scale-105"
          >
            Explore More Blogs
          </Link>
          <Link
            href="/articles"
            prefetch={false}
            className="text-sm md:text-xl rounded-lg border-2 border-accent-color px-4 py-2 md:px-8 md:py-4 text-white transition-all duration-300 bg-primary-color hover:scale-105"
          >
            Explore More Articles
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src="/blogs.png"
          width={1000}
          height={100}
          alt="Blogs Image"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Blogs;
