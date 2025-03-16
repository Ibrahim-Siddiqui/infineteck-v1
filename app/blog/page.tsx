import React from "react";
import Image from "next/image";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
const Blog = () => {
  return (
    <>
      <NewNavbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Image
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          width={100}
          height={100}
          alt="Logo"
          className="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
            This page is under maintenance
          </span>
        </h1>
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
          We&apos;ll be back in a few days...
        </p>

        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
          For any inquiries please{" "}
          {/* <a href="mailto:sales@kobana.de">sales@kobana.de</a> */}
          <a
            href="/contact"
            className="bg-primary-color px-4 py-2 text-lg font-medium text-white rounded-lg border border-primary-color hover:scale-105 duration-300"
          >
            Contact US
          </a>
        </p>
      </div>
      {/* <div className="">
        <div className=""></div>
        <div className="">
          <div className="pt-[20%] md:pt-[8%] pb-[5%] md:pb-[5%] bg-gradient-to-r from-blue-300 via-accent-color to-primary-color text-white">
            <h1 className="text-4xl md:text-5xl text-center font-bold ">
              {" "}
              <span className=""> From the Blog</span>{" "}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-center text-gray-200 sm:mt-4">
              Welcome to our blog where we discuss technical topics and industry
              insights in simple terms for you.
            </p>
          </div>

          <div className="mx-auto px-[5%] py-[5%] grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-md shadow-accent-color">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  width={500}
                  height={100}
                  src="/web-development-blog.png"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="/blog/web-development" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Custom Web App Development: What You Need to Know
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Discover the benefits, types, and development processes of
                      custom web apps, emphasizing business efficiency,
                      scalability, and competitiveness.
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-md shadow-accent-color">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  width={500}
                  height={100}
                  src="/gen-ai-blog.png"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      How Generative AI is Shaping the Future of Healthcare
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Generative AI is transforming the healthcare industry by
                      enhancing diagnostics, personalizing treatments, and
                      improving operational efficiency.{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-md shadow-accent-color">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  width={500}
                  height={100}
                  src="/integration-blog.png"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Tech Made Simple: Effective System Integration{" "}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Essential strategies for effective system integration to
                      enhance operational efficiency and reduce IT costs.lery
                      business by using a client of ours as a subject.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Blog;
