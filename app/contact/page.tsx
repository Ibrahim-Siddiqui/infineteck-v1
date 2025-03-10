"use client";
import Footer from "@/components/Footer";
import Select from "react-select";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import { MultiValue } from "react-select";

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
      value: "game development"
    },
    { label: "Website & App Development",
      value: "website & app development" 
    },
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

  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>();

  const handleChange = (option: MultiValue<OptionType>) => {
    setSelectedOptions(option);
    console.log(selectedOptions)
  };


  const colourStyles = {
    control: (styles:any) => ({ ...styles, backgroundColor: '#fff', color:"#1c3be9"}),
    option: (styles: any, { isDisabled,}: any) => {
      // const color = chrome(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : '#fff',
        color: '#1c3be9',
        cursor: isDisabled ? 'not-allowed' : 'default',
        
      };
    },
    
  };
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="">
        <Navbar />
        {/* <FloatingNav navItems={navItems} /> */}
        {/* <Hero3 /> */}
        <div className="mt-[5%]">
          <h1 className="text-5xl text-center font-bold ">
            {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color">
              {" "}
              Get in Touch{" "}
            </span>{" "}
            with Us Today
          </h1>
        </div>
        <div className="container">
          <span className="big-circle"></span>
          <img src="/shape.png" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Get in touch</h3>
              <p className="">
                Have questions or need assistance? Reach out to us and
                we&apos;re here to help!
              </p>

              <div className="info">
                <div className="information">
                  <img src="/map.png" className="icon" alt="" />
                  <p>
                    60 James Carter Road, Mildenhall, Bury St. Edmunds, England,
                    IP28 7DE
                  </p>
                </div>
                <div className="information">
                  <img src="/gmail.png" className="icon" alt="" />
                  <p>info@infineteck.com</p>
                </div>
                <div className="information">
                  <img src="/telephone.png" className="icon" alt="" />
                  <p>+4474638365597</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
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

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form action="index.html" autoComplete="off">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" />
                  <label htmlFor="">Username</label>
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label htmlFor="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container ">
                  <Select
                    isMulti
                    options={options}
                    name="services"
                    value={selectedOptions}
                    onChange={(option: MultiValue<OptionType>) => handleChange(option)}
                    className="bg-primary-color"
                    placeholder="Select Service Type"
                    styles={colourStyles}
                  />
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label className="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
