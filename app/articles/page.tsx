import React from "react";
import Image from "next/image";
import bannerImg from "@/public/blog-banner-min.jpg";
import NewNavbar from "@/components/NewNavbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

import { articlesData } from "./data";
import { Calendar } from "lucide-react";
const Blog = () => {
  return (
    <>
      <NewNavbar />
      <div className="">
        <div className="">
          <PageBanner
            imgSrc={bannerImg}
            heading=""
            text="Insights, Expert Tips, and Trends for Business Growth."
          />

          <div className="mx-auto px-[5%] py-[5%] grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {articlesData.map((blog) => (
              <div
                key={blog.blogUrl}
                className="flex flex-col overflow-hidden rounded-lg "
              >
                <div className="flex-shrink-0">
                  <Image
                    className="</strong>h-56 w-full object-cover rounded-lg"
                    width={500}
                    height={200}
                    priority={true}
                    src={blog.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-2">
                  <div className="flex-1">
                    <p className="text-accent-color text-md mb-4">
                      By Infineteck | <Calendar size={20} className="inline" />{" "}
                      {blog.postDate}
                    </p>
                    <a href={blog.blogUrl} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
                        {blog.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {blog.text}{" "}
                        <a className="text-secondary-color" href={blog.blogUrl}>
                          Read More
                        </a>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
