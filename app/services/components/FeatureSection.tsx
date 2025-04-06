import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const FeatureSection = ({
  data,
  initialHeading,
  specialText,
  endHeading,
}: any) => {
  return (
    <section>
      <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        {initialHeading}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
          {specialText}
        </span>{" "}
        {endHeading}
      </h1>
      <div className="mx-auto max-w-7xl lg:px-8">
        {data.map((item: any) =>
          item.isReversed ? (
            <div
              key={item.id}
              className="my-[15%] sm:my-[5%] mx-5 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2
              border border-primary-color rounded-lg shadow-md shadow-primary-color md:px-5 pt-5 md:py-10"
              // initial={{
              //   opacity: 0,
              //   translateY: 100,
              // }}
              // whileInView={{
              //   translateY: 0,
              //   opacity: 1,
              // }}
              // transition={{
              //   duration: 1,
              // }}
              // viewport={{
              //   once: true,
              //   margin: "-250px",
              // }}
            >
              {/* rounded-lg shadow-md shadow-accent-color border border-accent-color */}
              <div className="lg:pr-8 px-8">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
                      {item.heading}
                    </span>
                  </h2>
                  <p className="text-xl tracking-tight leading-8 text-gray-600">
                    {item.paragraph}
                  </p>
                  <dl className="mt-4 max-w-xl space-y-2 text-lg leading-7 text-gray-600 lg:max-w-none">
                    {item.bullets.map((bullet: any) => (
                      <div key={bullet.id} className="relative pl-2">
                        <dt className="flex gap-2 font-semibold text-gray-900">
                          <CircleCheck
                            size={24}
                            className="text-primary-color"
                          />

                          {bullet.text}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={item.image}
                  width={800}
                  height={200}
                  className="rounded-b-lg lg:rounded-none"
                  alt="Image representing a feature"
                />
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className="my-[15%] sm:my-[5%] mx-5 sm:mx-0 grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2
              border border-primary-color rounded-lg shadow-md shadow-primary-color md:px-5 pb-5 md:py-10"
              // initial={{
              //   opacity: 0,
              //   translateY: 100,
              // }}
              // whileInView={{
              //   translateY: 0,
              //   opacity: 1,
              // }}
              // transition={{
              //   duration: 1,
              // }}
              // viewport={{
              //   once: true,
              //   margin: "-250px",
              // }}
            >
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={item.image}
                  width={1000}
                  height={100}
                  className="rounded-t-lg lg:rounded-none"
                  alt="Image representing a feature"
                />
              </div>
              {/* rounded-lg shadow-md shadow-accent-color border border-accent-color */}
              <div className="lg:pr-8 px-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
                      {item.heading}
                    </span>
                  </h2>
                  <p className="text-xl tracking-tight leading-8 text-gray-600">
                    {item.paragraph}
                  </p>
                  <dl className="mt-4 max-w-xl space-y-2 text-lg leading-7 text-gray-600 lg:max-w-none">
                    {item.bullets.map((bullet: any) => (
                      <div key={bullet.id} className="relative pl-2">
                        <dt className="flex gap-2 font-semibold text-gray-900">
                          <CircleCheck
                            size={24}
                            className="text-primary-color"
                          />
                          {bullet.text}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
