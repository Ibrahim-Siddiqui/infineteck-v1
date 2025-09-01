"use client";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export const Subscription = () => {
  const [email, setEmail] = useState("");
  const formData = new FormData();
  formData.append("Email", email);
  formData.append("Submission Type", "Subscription");

  function isValidEmail(mail: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail);
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      if (isValidEmail(email)) {
        const response = await fetch("https://formbold.com/s/6Q5Jv", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          toast("Form submitted successfully!");
        } else {
          toast("Form submission failed.");
        }
      } else {
        toast("Please enter a valid email");
      }
    } catch (error) {
      toast("Error submitting form");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row items-center">
        <input
          // onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className=" border-2 rounded-md text-sm md:text-lg p-2 md:p-4"
        />
        <button
          // onClick={handleSubmit}
          className="flex gap-2 md:gap-4 items-center text-sm md:text-lg rounded-lg border-2 border-accent-color p-2 md:p-4 text-white transition-all duration-300 bg-primary-color hover:scale-102"
        >
          Subscribe
          <Send size={15} />
        </button>
      </div>
    </>
  );
};

export default Subscription;
