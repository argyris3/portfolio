"use client";
import github from "../../public/images/github.svg";
import linkedin from "../../public/images/linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_s6njxsr", "template_0qzgek5", form.current, {
        publicKey: "gSm_4rlULFtWMgy7o",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // const data = {
    //   email: e.target.email.value,
    //   subject: e.target.subject.value,
    //   message: e.target.message.value,
    // };
    // const JSONdata = JSON.stringify(data);
    // const endpoint = '/api/send';

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // };

    // const response = await fetch(endpoint, options);
    // const resData = await response.json();

    // if (response.status === 200) {
    //   console.log('Message sent.');
    //   setEmailSubmitted(true);
    // }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I always looking for new opportunities,my inbox is always open..I will
          try my best to get back to you..
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/argyris3">
            <Image src={github} width={60} alt="github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/%CE%B1%CF%81%CE%B3%CF%85%CF%81%CE%B9%CE%BF%CF%82-%CF%80%CE%B1%CF%80%CE%BF%CF%85%CE%BB%CE%B9%CE%B4%CE%B7%CF%82-b41aa1319/">
            <Image src={linkedin} width={60} alt="linkedin icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-xl">Email sent succefully</p>
        ) : (
          <form ref={form} className="flex flex-col " onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="email"
                type="email"
                className="text-white block  text-sm mb-2 font-medium "
              >
                Your Email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191e] border border-[#33353f] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block  text-sm mb-2 font-medium "
              >
                Name
              </label>
              <input
                name="user_name"
                type="text"
                required
                className="bg-[#18191e] border border-[#33353f] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block  text-sm mb-2 font-medium "
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="bg-[#18191e] border border-[#33353f] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message{" "}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
export default EmailSection;
