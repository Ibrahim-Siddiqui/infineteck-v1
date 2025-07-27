"use client";
import Footer from "@/components/Footer";
import Select from "react-select";
import { useState } from "react";
import { MultiValue } from "react-select";
import NewNavbar from "@/components/NewNavbar";
import PageBanner from "@/components/PageBanner";
import bannerImg from "@/public/contact-banner-min.jpg";
import { formRequest } from "./components/FormRequest";
import Image from "next/image";

// export interface formDataType
// {
//   name: string;
//   company: string;
//   email: string;
//   phone: string;
//   message: string;
//   services: MultiValue<OptionType>;
// };

const Home = () => {
  type OptionType = {
    value: string;
    label: string;
  };

  const options = [
    {
      value: "Digital Marketing & Branding",
      label: "Digital Marketing & Branding",
    },
    {
      label: "Game Development",
      value: "Game Development",
    },
    { label: "Website & App Development", value: "Website & App Development" },
    {
      value: "2D & 3D Animation - Video Editing",
      label: "2D & 3D Animation - Video Editing",
    },
    {
      value: "Ecommerce Solutions",
      label: "Ecommerce Solutions",
    },
    {
      value: "AI Automation",
      label: "AI Automation",
    },
  ];

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

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<OptionType>
  >([]);
  let optionArray: any = [];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    Object.values(selectedOptions).map((option) =>
      optionArray.push(option.value)
    );
    const formData = {
      name: name,
      company: companyName,
      email: email,
      phone: phone,
      message: message,
      services: optionArray.join(", "),
    };
    console.log(formData);
    formRequest(formData).then(() =>
      console.log("form submitted successfully")
    );
    
  };

  return (
    <>
      <NewNavbar />

      <PageBanner
        imgSrc={bannerImg}
        heading="Contact Us"
        text="Your Next Project Starts Here"
      />
      <section className="">
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
                  <Image src="/map.png" className="icon" alt="" />
                  <p>
                    60 James Carter Road, Mildenhall, Bury St. Edmunds, England,
                    IP28 7DE
                  </p>
                </div>
                <div className="flex gap-5 w-8 ">
                  <Image src="/gmail.png" className="icon" alt="" />
                  <p>info@infineteck.com</p>
                </div>
                <div className="flex gap-5 w-8 ">
                  <Image src="/telephone.png" className="icon" alt="" />
                  <p>+447463836597</p>
                </div>
              </div>

              <div className="">
                <p>Connect with us :</p>
                <div className="flex gap-5 py-5">
                  <a href="#">
                    <Image src="/twitter.png" className="icon" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/infineteck/">
                    <Image src="/linkedin.png" className="icon" alt="" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61569356296437&mibextid=ZbWKwL">
                    <Image src="/facebook.png" className="icon" alt="" />
                  </a>
                  <a href="https://www.instagram.com/infineteck/profilecard/?igsh=dnR6c2FjNjJjcWE2">
                    <Image src="/instagram.png" className="icon" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border rounded-lg bg-white p-2 shadow-lg shadow-accent-color lg:col-span-3 lg:px-12">
              <form
                // action="https://formbold.com/s/oJldZ"
                onSubmit={handleSubmit}
                // method="POST"
                // encType="multipart/form-data"
                className="space-y-4"
              >
                {/* <div> */}
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {/* </div> */}
                {/* <div> */}
                <label className="sr-only" htmlFor="name">
                  Company Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                  placeholder="Business Name"
                  type="text"
                  id="name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {/* </div> */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* <div> */}
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {/* </div> */}

                  {/* <div> */}
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 shadow-md shadow-secondary-color p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {/* </div> */}
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

                {/* <div className="input-container"> */}
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
                  inputValue=""
                  required
                />
                {/* </div> */}

                {/* <div> */}
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm shadow-lg shadow-secondary-color"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {/* </div> */}

                <div className="mt-4  hover:scale-105 transition-all duration-300">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-primary-color px-5 py-3 font-medium text-white sm:w-auto"
                    onSubmit={handleSubmit}
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
