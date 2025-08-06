import Footer from "@/components/Footer";
import NewNavbar from "@/components/NewNavbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <NewNavbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
        <main className="max-w-screen-xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            🔒 Privacy Policy
          </h1>

          <article className="">
            <p className="text-md">
              Your privacy matters to us at Infineteck. This Privacy Policy
              explains what information we collect, why Infineteck collects it
              and how we use and protect it.
            </p>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              1. Information We Collect
            </h2>
            <p className="text-md">
              When you visit Infineteck website or contact us, Infineteck may
              collect:
            </p>

            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                Personal Info: Name, email, phone number (when you contact
                Infineteck)
              </li>
              <li className="list-disc">
                Business Info: Company name, project requirements
              </li>
              <li className="list-disc">
                Usage Data: Pages visited, time on site, browser/device type
              </li>
              <li className="list-disc">
                Cookies: To help improve your experience on our website
              </li>
            </ul>
            <p className="text-md">
              Infineteck never collects sensitive data like passwords, payment
              card details, or national ID info through our public website.
            </p>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              2. How We Use Your Data
            </h2>

            <p className="text-lg">
              Infineteck use the information we collect to:
            </p>

            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                Understand your needs and respond to your inquiries
              </li>
              <li className="list-disc">
                Offer tailored services or proposals
              </li>
              <li className="list-disc">
                Improve website experience and functionality
              </li>
              <li className="list-disc">
                Send updates or replies about Infineteck services
              </li>
            </ul>
            <p className="text-md">
              Infineteck does not sell or share your personal data with any
              third parties for marketing purposes.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              3. Cookies & Analytics
            </h2>

            <p className="text-md">
              Infineteck uses cookies and tools like Google Analytics to
              understand how users interact with our website. This helps
              Infineteck improve performance and design. You can disable cookies
              in your browser settings if you prefer.
            </p>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              4. Third-Party Tools
            </h2>

            <p className="text-md">
              If Infineteck embed or integrate third-party tools (e.g.: forms,
              videos or chat plugins), they may collect limited data. Infineteck
              recommends reviewing their respective privacy policies too.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              5. Data Protection & Security
            </h2>

            <p className="text-md">
              Your data is stored securely. Infineteck uses encryption, secure
              servers and access control to protect your information. However,
              no system is 100% secure online. Please avoid sending sensitive
              data through public forms.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              6. Your Rights
            </h2>

            <p className="text-md">You have the right to:</p>
            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                Access the data Infineteck have stored about you
              </li>
              <li className="list-disc">
                Ask Infineteck to correct or delete your personal information
              </li>
              <li className="list-disc">
                Withdraw consent at any time (for example, unsubscribe from
                emails)
              </li>
            </ul>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              7. Changes to This Policy
            </h2>

            <p className="text-md">
              Infineteck may occasionally update this Privacy Policy. If
              Infineteck makes major changes, we will post a notice on our site
              and update it.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              8. Contact Us
            </h2>
            <p className="text-md">
              For questions, concerns or data access requests, reach out:
            </p>

            <p className="text-md">
              📧 Email us at info@infineteck.com
              <br />
              🌐 Visit: https://www.infineteck.com
              <br />
              📍 UK Registered
              <br />
              Thank you for choosing Infineteck. We look forward to building
              something great together.
            </p>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
