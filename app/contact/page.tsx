"use client";
import Footer from "@/components/Footer";
import Select from "react-select";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import { MultiValue } from "react-select";
import NewNavbar from "@/components/NewNavbar";

const Home = () => {
  type OptionType = {
    value: string;
    label: string;
  };

  const options = [
    {
      value: "digital marketing & branding",
      label: "Digital Marketing & Branding",
    },
    {
      label: "Game Development",
      value: "game development",
    },
    { label: "Website & App Development", value: "website & app development" },
    {
      value: "2d & 3d animation - video editing",
      label: "2D & 3D Animation - Video Editing",
    },
    {
      value: "e-commerce solutions",
      label: "Ecommerce Solutions",
    },
    {
      value: "artificial intelligence automation",
      label: "Artificial Intelligence Automation",
    },
  ];

  const [selectedOptions, setSelectedOptions] =
    useState<MultiValue<OptionType>>();

  const handleChange = (option: MultiValue<OptionType>) => {
    setSelectedOptions(option);
    console.log(selectedOptions);
  };

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#fff",
      color: "",
    }),
    option: (styles: any, { isDisabled }: any) => {
      // const color = chrome(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled ? "" : "#fff",
        color: "",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };
  return (
    <>
      <NewNavbar />

      <section className="">
        <div className="pt-[20%] md:pt-[8%] pb-[5%] md:pb-[5%] bg-gradient-to-r from-blue-300 via-accent-color to-primary-color text-white">
          <h1 className="text-4xl md:text-5xl text-center font-bold ">
            {" "}
            <span className=""> Get in Touch with Us Today</span>{" "}
          </h1>
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 flex flex-col px-5">
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="text-lg">
                Have questions or need assistance? Reach out to us and
                we&apos;re here to help!
              </p>
              {/* grid grid-rows-4 row-auto space-y-5 */}
              <div className="grid grid-rows-4 row-auto space-y-5 my-5">
                <div className="flex gap-5 h-6 row-span-2 sm:row-span-1">
                  <img src="/map.png" className="icon" alt="" />
                  <p>
                    60 James Carter Road, Mildenhall, Bury St. Edmunds, England,
                    IP28 7DE
                  </p>
                </div>
                <div className="flex gap-5 w-8 ">
                  <img src="/gmail.png" className="icon" alt="" />
                  <p>info@infineteck.com</p>
                </div>
                <div className="flex gap-5 w-8 ">
                  <img src="/telephone.png" className="icon" alt="" />
                  <p>+4474638365597</p>
                </div>
              </div>

              <div className="">
                <p>Connect with us :</p>
                <div className="flex gap-5 py-5">
                  <a href="#">
                    <img src="/twitter.png" className="icon" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/infineteck/">
                    <img src="/linkedin.png" className="icon" alt="" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61569356296437&mibextid=ZbWKwL">
                    <img src="/facebook.png" className="icon" alt="" />
                  </a>
                  <a href="https://www.instagram.com/infineteck/profilecard/?igsh=dnR6c2FjNjJjcWE2">
                    <img src="/instagram.png" className="icon" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border rounded-lg bg-white p-2 shadow-lg shadow-accent-color lg:col-span-3 lg:px-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 3 </span>
                    </label>
                  </div>
                </div> */}

                <div className="input-container">
                  <Select
                    isMulti
                    options={options}
                    name="services"
                    value={selectedOptions}
                    onChange={(option: MultiValue<OptionType>) =>
                      handleChange(option)
                    }
                    className="shadow-md shadow-secondary-color"
                    placeholder="Select Service Type"
                    styles={colourStyles}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm shadow-lg shadow-secondary-color"
                    placeholder="Message"
                    rows={8}
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4  hover:scale-105 transition-all duration-300">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-primary-color px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
