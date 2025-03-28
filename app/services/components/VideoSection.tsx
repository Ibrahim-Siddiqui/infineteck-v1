import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { Circle, CircleCheck } from "lucide-react";
const VideoSection = ({ data }: any) => {
  // console.log(data)
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-16">
      {data.map((dataItem: any) => (
        <div key={dataItem.heading} className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* rounded-lg shadow-md shadow-accent-color border border-accent-color */}
            <div className="lg:pr-8 lg:pt-4 px-8 py-8 ">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-2 text-indigo-600">
                Produce faster
              </h2> */}
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
                    {dataItem.heading}
                  </span>
                </h2>
                <p className="text-lg md:text-xl tracking-tight leading-8 text-gray-600">
                  {dataItem.paragraph}
                  {/* Founded with a passion for
                innovation, we empower businesses to thrive in a fast-paced
                digital world by merging creativity, technology, and strategy. */}
                </p>
                <dl className="mt-4 max-w-xl space-y-2 text-lg leading-7 text-gray-600 lg:max-w-none">
                  {dataItem.bullets.map((bullet: any) => (
                    <div key={bullet.id} className="relative pl-8">
                      <dt className="flex gap-2 font-semibold text-gray-900">
                        {/* {bullet.icon} */}
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                          <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                          <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                        </svg> */}
                        <CircleCheck size={24} className="text-primary-color"/>
                        {bullet.text}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MediaPlayer
                src={`youtube/${dataItem.video}`}
                playsInline
                loop
                className=""
              >
                <MediaProvider />
                <PlyrLayout icons={plyrLayoutIcons} />
              </MediaPlayer>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VideoSection;
