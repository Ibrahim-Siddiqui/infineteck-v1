import React from "react";

const QuoteCard = ({ text, points }: any) => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col max-w-5xl align-center justify-between border border-accent-color shadow-md shadow-accent-color bg-white dark:bg-gray-800 rounded-xl px-[2%] mx-[2%] ">
        <div className="flex flex-col px-6 pt-8 space-y-5 p-[2%]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-color dark:text-gray-600 fill-current"
          >
            <path
              d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
              fill="current"
            ></path>
          </svg>
          <p className="text-xl md:text-2xl body-medium m-0 pb-5 dark:text-gray-200 hyphens-auto">
            {text}
          </p>
        </div>
        {points && (
          <ul className="pb-[5%]">
            {points.map((point: any) => (
              <div key={point.id} className="py-2 text-lg md:text-xl">
                <li key={point.id} className="pl-[5%]">
                  <span className="font-semibold text-accent-color">{point.heading}</span>
                </li>
                <li className="pl-[5%]">{point.text}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuoteCard;
