"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (e: any) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const sendFormDataToApi = async (event: any) => {
    event.preventDefault();

    const formURL = event.target.action;

    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setIsSubmitted(true);

    const emailSend = await fetch("http://localhost:3000/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <main className="items-center justify-evenly">
      {isSubmitted ? (
        <div className="absolute bg-white bg-opacity-70 mt-28 m-10 laptop:mt-44 justify-center laptop:ml-40 laptop:mr-20 dark:bg-gray-900">
          <div className="py-4 laptop:py-16 px-4 laptop:mx-auto ">
            <a className="mb-4 text-xl tracking-tight font-thin text-center text-blue-400 dark:text-blue-200">
              Thank you for your message, our team will respond to you soon!
            </a>
          </div>
        </div>
      ) : (
        <section className="absolute bg-white bg-opacity-70 mt-28 m-10 laptop:mt-44 justify-center laptop:ml-40 laptop:mr-20 dark:bg-gray-900">
          <div className="py-4 laptop:py-16 px-4 laptop:mx-auto ">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-blue-600 dark:text-blue-200">
              Contact Form
            </h2>
            <p className="mb-8 p-5 lg:mb-16 font-light text-center text-blue-700 dark:text-blue-200 sm:text-xl">
              Schedule a show, leave feedback from a perforance, ask a question.
              We will respond soon
            </p>
            <form action="#" className="space-y-8" onSubmit={sendFormDataToApi}>
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-700 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={onChange}
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  onChange={onChange}
                  className="block p-3 w-full text-sm text-blue-700 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Request, Comment, etc."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-blue-700 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  onChange={onChange}
                  className="block p-2.5 w-full text-sm text-blue-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Send a message..."
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-blue-700 rounded-lg bg-blue-200 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}
