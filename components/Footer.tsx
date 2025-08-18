import { socialMedia } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-screen pt-[5%] border-t border-t-gray-200">
      {/* <div className="hidden xl:block absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-[100%] h-[30%] lg:h-[25%] w-[30%] lg:w-[10%] -translate-x-[10%] lg:-translate-x-[55%] translate-y-[180%] lg:translate-y-[250%] rounded-full bg-secondary-color opacity-70 blur-[80px]"></div>
      </div> */}
      <div className="sm:px-6 text-gray-800 sm:grid md:grid-cols-6 sm:grid-cols-2">
        <div className="p-5 col-span-1 flex flex-col justify-between">
          <div className="">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              priority={true}
              alt="logo"
            />
            <h2 className="my-[5%] text-lg font-semibold">
              Driving Online Success
            </h2>
          </div>
          <a
            href="https://www.trustpilot.com/review/infineteck.com"
            target="_blank"
          >
            <Image
              src="/trust-pilot.png"
              width={200}
              height={200}
              priority={true}
              alt="logo"
            />
          </a>
        </div>
        <div className="p-5 col-span-1">
          <div className="text-md uppercase text-primary-color font-bold">
            Quick Links
          </div>
          <a className="my-3 block" href="/">
            Home <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/about">
            About Us <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/blog">
            Blog <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/contact">
            Contact <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/pricing">
            Pricing <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div className="p-5 col-span-1 md:col-span-1">
          <div className="text-md uppercase text-primary-color font-bold">
            Services
          </div>
          <a className="my-3 block" href="/services/web-development">
            Web Development
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/services/app-development">
            App Development
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/services/digital-marketing">
            Marketing & Branding
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/services/game-development">
            Game Development<span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/services/video-animation">
            Animation - Video Editing{" "}
            <span className="text-teal-600 text-xs p-1"></span>
          </a>

          <a className="my-3 block" href="/services/e-commerce">
            E-commerce Solutions{" "}
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/services/ai-automation">
            AI Automation <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div className="p-5 col-span-1 md:col-span-1">
          <div className="text-md uppercase text-primary-color font-bold">
            Legal
          </div>
          <a className="my-3 flex gap-2" href="/legal/privacy-policy">
            Privacy Policy
          </a>
          <a className="my-3 flex gap-2" href="/legal/terms-and-conditions">
            Terms & Conditions
          </a>
          <a className="my-3 flex gap-2" href="/legal/refund-policy">
            Refund Policy
          </a>

          <div className="text-md uppercase text-primary-color font-bold">
            Resources
          </div>
          <a className="my-3 flex gap-2" href="/blog">
            Blog
          </a>
          <a className="my-3 flex gap-2" href="/articles">
            Articles
          </a>
        </div>
        <div className="p-5 col-span-1 md:col-span-1">
          <div className="text-md uppercase text-primary-color font-bold">
            Contact us
          </div>
          <a className="my-3 flex gap-2" href="">
            <span className="text-teal-600 text-xs py-1">
              <MapPin />
            </span>
            60 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28
            7DE
          </a>
          <a className="my-3 flex gap-2" href="">
            <span className="text-teal-800 text-xs py-1">
              <Mail />
            </span>
            info@infineteck.com
          </a>
          <a className="my-3 flex gap-2" href="">
            <span className="text-teal-800 text-xs py-1">
              <Phone />
            </span>
            +447463836597
          </a>
        </div>
        <div className="py-5 col-span-1">
          <div className="flex flex-col justify-end items-center">
            <Image
              src="/stripe.png"
              width={100}
              height={100}
              priority={true}
              alt="Stripe Logo"
            />
            <Image
              src="/zelle.png"
              width={100}
              height={1}
              priority={true}
              alt="Zelle Logo"
            />
            <Image
              src="/venmo.png"
              width={150}
              height={100}
              priority={true}
              alt="Venmo Logo"
            />
            <Image
              src="/paypal.png"
              width={300}
              height={300}
              priority={true}
              alt="Paypal Logo"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl pt-2">
        <div
          className="flex flex-col md:flex-row-reverse justify-evenly pb-5 pt-5 border-t text-gray-800 text-sm 
          max-w-screen-2xl items-center"
        >
          <div className="flex gap-4 mt-2 flex-row">
            <a
              href="https://www.facebook.com/profile.php?id=61569356296437&mibextid=ZbWKwL"
              className="w-8"
              target="_blank"
            >
              <Image
                src="/facebook.png"
                width={200}
                height={200}
                priority={true}
                alt="social-logo"
              />
            </a>
            <a
              href="https://www.instagram.com/infineteck/profilecard/?igsh=dnR6c2FjNjJjcWE2"
              className="w-8 mx-1"
              target="_blank"
            >
              <Image
                src="/instagram.png"
                width={200}
                height={200}
                priority={true}
                alt="social-logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/infineteck/"
              className="w-8 mx-1"
              target="_blank"
            >
              <Image
                src="/linkedin.png"
                width={200}
                height={200}
                priority={true}
                alt="social-logo"
              />
            </a>
            <a href="/#" className="w-8 mx-1" target="_blank">
              <Image
                src="/twitter.png"
                width={200}
                height={200}
                priority={true}
                alt="social-logo"
              />
            </a>
            {/* <a href="/#" className="w-8 mx-1"></a> */}
          </div>
          <div className="my-5">© 2025 Infineteck. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
