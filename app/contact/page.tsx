"use client";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero3 from "@/components/Hero3";
// import img from "next/img";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero3 />
        <div className="container">
          <span className="big-circle"></span>
          <img src="/shape.png" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Get in touch</h3>
              <p className="text">
                Have questions or need assistance? Reach out to us and were
                here to help!
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
