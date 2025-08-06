import Footer from "@/components/Footer";
import NewNavbar from "@/components/NewNavbar";
import Link from "next/link";
import React from "react";

const RefundPolicy = () => {
  return (
    <>
      <NewNavbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
        <main className="max-w-screen-xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Refund Policy</h1>

          <article className="">
            <p className="text-md">
              At Infineteck, we take pride in delivering high-quality software
              development, mobile app development, and custom digital solutions
              to clients across the United States, United Kingdom, Canada and
              globally. Infineteck's goal is to ensure that every project we
              take on provides real value and results for your business.
              <br />
              However, Infineteck understands that situations change. That’s why
              Infineteck’s teams have created a clear, fair and human first
              refund policy to help guide any unexpected issues with your
              project.
              <br />
              This policy applies to all of Infineteck services including:
            </p>
            <ul className="list-inside text-sm py-4">
              <li className="list-disc">Website Development</li>
              <li className="list-disc">E-Commerce Solution</li>
              <li className="list-disc">Custom Software Solutions</li>
              <li className="list-disc">Mobile App Development</li>
              <li className="list-disc">UI/UX Design & Prototyping</li>
              <li className="list-disc">IT Consulting & Support</li>
              <li className="list-disc">Marketing & Branding</li>
              <li className="list-disc">Game Development</li>
              <li className="list-disc">Animation - Video Editing</li>
              <li className="list-disc">AI Automation</li>
            </ul>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              Our Commitment to Clients
            </h2>
            <p className="text-md">
              Infineteck knows every software project is unique, just like your
              business. Our process is rooted in clarity and professionalism.
              That is why, before Infineteck begin any development, we go
              through:
            </p>
            <ul className="list-inside text-sm py-4">
              <li className="list-disc">✅ A thorough discovery session</li>
              <li className="list-disc">
                ✅ Finalized Software Requirement Specification (SRS)
              </li>
              <li className="list-disc">✅ Timeline approval</li>
              <li className="list-disc">✅ Budget confirmation</li>
            </ul>
            <p className="text-md">
              Once these steps are completed and mutually agreed upon, the
              project moves into execution by Infineteck.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              💳 Upfront Payment Policy
            </h2>
            <p className="text-md">
              To kick off any project with Infineteck, we require an initial
              upfront payment. This confirms your commitment to the project and
              allows Infineteck’s team to allocate resources, including
              designers, developers, project managers and QA engineers to bring
              your vision to life. Whether you are based in Austin, New York,
              San Francisco or anywhere from the world, this Infineteck policy
              applies equally.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              🚫 No Refund After Project Initiation
            </h2>
            <p className="text-md">
              Once Infineteck has received the upfront payment and the project
              has officially started, no refund will be issued. Here is why:
            </p>
            <ul>
              <li className="list-disc">
                Infineteck immediately began allocating time, talent, and
                technology.
              </li>
              <li className="list-disc">
                Project resources and schedules are booked in advance.
              </li>
              <li className="list-disc">
                Milestones and deliverables are scheduled based on your specific
                scope.
              </li>
            </ul>
            <p className="text-md">
              Infineteck doesn't recycle templates or use shortcuts, your
              software is built from scratch, based on your approved SRS
              document.
              <br />
              That is why Infineteck can’t issue refunds once development is in
              motion.
            </p>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              📦 No Refund After Project Completion & File Delivery
            </h2>

            <p className="text-lg">
              Once your project is completed, tested and delivered, along with
              all source code, documentation and login credentials, you will not
              be eligible for a refund under any circumstance.
              <br />
              This includes:
            </p>

            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                Final builds of mobile apps (iOS & Android)
              </li>
              <li className="list-disc">Front end and back-end files</li>
              <li className="list-disc">Server setups and API integrations</li>
              <li className="list-disc">UI/UX design assets</li>
              <li className="list-disc">Admin dashboards or CMS systems</li>
            </ul>
            <p className="text-lg">
              Infineteck encourages all clients to thoroughly test the software
              before final delivery. Infineteck is always happy to fix bugs or
              make tweaks during the warranty period, but Infineteck cannot
              offer refunds once the files have been delivered.
            </p>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              🛑 The Only Exception, SRS Non-Compliance
            </h2>
            <p className="text-md">
              The only scenario where a refund may be considered is if
              Infineteck fails to deliver the software as outlined in the signed
              Software Requirement Specification (SRS) document. If a major
              deliverable is completely missing or the project was not built
              according to the scope detailed in the final SRS, even after
              giving Infineteck a chance to revise it, you may be eligible for a
              partial refund. To be clear, this applies only if:
            </p>
            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                You have a signed and approved SRS document with Infineteck
              </li>
              <li className="list-disc">
                We have not delivered critical features explicitly defined in
                that document
              </li>
              <li className="list-disc">
                You have raised this issue during the project or immediately
                upon delivery
              </li>
              <li className="list-disc">
                No external tampering or code changes were made by third parties
              </li>
            </ul>

            <p className="text-md">
              This ensures a fair and accountable partnership, where
              expectations are clearly defined.
            </p>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              📍 Geo-Focused Client Support
            </h2>
            <p className="text-md">
              No matter where your business is based, Infineteck refund terms
              remain the same. We serve clients across the world with
              consistency, integrity and clear deliverables.
              <br />
              Infineteck team uses modern project management tools and video
              check-ins to keep you in the loop, whether you are across the
              country or across the street.
              <br />
              Need help reviewing your project scope or timeline? Contact our
              project team{" "}
              <Link href="/contact" className="text-secondary-color underline">
                {" "}
                here.
              </Link>
            </p>
            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                Payments are typically split into phases (e.g. advance,
                milestone, final). All terms are outlined in the proposal or
                agreement.
              </li>
              <li className="list-disc">
                Late payments may result in delays or suspension of services.
              </li>
              <li className="list-disc">
                Refunds are subject to the service type and stage of the
                project. Infineteck always aim to resolve disputes fairly.
              </li>
            </ul>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              📝 Important Notes
            </h2>
            <ul className="list-inside text-sm py-4">
              <li className="list-disc">
                <strong>Digital Services Are Non-Tangible: </strong> Because
                Infineteck products are custom made and digitally delivered,
                they cannot be returned like physical items.
              </li>
              <li className="list-disc">
                <strong>Support and Maintenance: </strong> Refunds do not apply
                to support packages, retainer services, or maintenance
                agreements once initiated.
              </li>
              <li className="list-disc">
                <strong>Client Delays: </strong> Delays caused by clients (lack
                of communication, delay in feedback, etc.) do not constitute
                grounds for a refund.
              </li>
            </ul>

            <h2 className="text-lg md:text-xl py-4 font-semibold">
              🔄 How to Request a Refund (if applicable)
            </h2>

            <p className="text-md">
              If you believe a refund is justified under our SRS exception
              clause, follow these steps:
            </p>
            <ul className="list-inside text-sm py-4">
              <li className="list-decimal">Email us at info@infineteck.com</li>
              <li className="list-decimal">
                Include your project name, invoice number and a brief
                description of the issue
              </li>
              <li className="list-decimal">
                Attach your signed SRS document for reference
              </li>
              <li className="list-decimal">
                Infineteck team will investigate and respond within 5 business
                days
              </li>
            </ul>
            <h2 className="text-lg md:text-xl py-4 font-semibold">
              💬 Let’s Keep It Clear and Fair
            </h2>

            <p className="text-md">
              At Infineteck, our mission is to build long lasting relationships
              not just one time projects. Infineteck do our best to keep you
              informed at every step, from wireframes to final delivery.
              <br />
              Infineteck asks that our clients engage with the same transparency
              and mutual respect.
            </p>

            <p className="text-md">
              Got questions about this policy? Need help understanding the SRS
              terms or your payment plan?{" "}
              <Link href="/contact">Reach out here</Link> Infineteck are happy
              to help.
            </p>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
