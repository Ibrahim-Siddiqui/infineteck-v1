"use client";
import { useState } from "react";
import { formRequest } from "./FormRequest";

const ResponseForm = ({blogTitle}: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const title = blogTitle;
  
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = {
      blogTitle: title,
      name: name,
      email: email,
      comment: comment,
    };

    console.log(formData);

    formRequest(formData)
    .then(() =>
      console.log("form submitted successfully")
    );
  };

  return (
    <div className="">
      <h2 className="mt-[10%] mb-[-2%] text-xl md:text-3xl font-medium">
        We would love to hear your thoughts
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div> */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        </div>

        <label className="sr-only" htmlFor="comment">
          Comment
        </label>

        <textarea
          className="w-full rounded-lg border border-gray-200 p-3 text-sm shadow-lg shadow-secondary-color"
          placeholder="Comment"
          rows={8}
          id="message"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="mt-4  hover:scale-105 transition-all duration-300">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-primary-color px-5 py-3 font-medium text-white sm:w-auto"
            onSubmit={handleSubmit}
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResponseForm;
