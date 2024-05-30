"use client";
import { useState, useEffect, useRef } from "react";

import { Toaster, toast } from "sonner";

const Contact = () => {
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        var start = e.target.selectionStart;
        var end = e.target.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        e.target.value =
          e.target.value.substring(0, start) +
          "\t" +
          e.target.value.substring(end);

        // put caret at right position again
        e.target.selectionStart = e.target.selectionEnd = start + 1;
      }
    };

    const messageElem = messageRef.current;

    messageElem.addEventListener("keydown", handleKeyDown);

    return () => {
      messageElem.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-[#0c0c14] text-gray-100">
      <Toaster closeButton richColors visibleToasts={2} />
      <div className="mx-auto max-w-screen-lg px-0 pb-40 pt-10">
        <header className="py-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          Contact Me
        </header>

        <div className="flex flex-col items-center justify-center">
          <form
            className="w-full px-2 lg:px-0"
            onSubmit={(e) => {
              e.preventDefault();
              toast.promise(
                async () => {
                  return await sendMessage({
                    name: e.target[0].value || "Anonymous",
                    message: message,
                  });
                },
                {
                  loading: "Sending message...",
                  success: (data) => {
                    setMessage("");
                    messageRef.current.value = "";
                    e.target[0].value = "";
                    return `Message sent!`;
                  },
                  error: "Could not send message!",
                },
              );
            }}
          >
            <div className="relative mb-4">
              <input
                type="text"
                maxLength={50}
                id="floating_outlined"
                className="border-1 peer block w-full rounded-lg border-gray-700  bg-[#2b363b] px-2.5 pb-2.5 pt-4 text-sm text-gray-200 focus:outline-none focus:ring-0"
                placeholder=" "
                autoComplete="off"
              />
              <label
                htmlFor="floating_outlined"
                className="absolute start-1 top-2 z-10 origin-[0] -translate-y-8 transform px-2 text-sm text-gray-400
                duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:px-4 peer-focus:top-2 peer-focus:-translate-y-8 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Name (Optional)
              </label>
            </div>

            <div className="mb-4 w-full rounded-lg border border-gray-950 bg-[#1b1e20]">
              <div className="rounded-t-lg bg-[#2b363b] px-4 py-2">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  ref={messageRef}
                  maxLength={4000}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  rows="6"
                  className="w-full bg-[#2b363b]  px-0 text-sm text-white placeholder-gray-400 outline-none"
                  placeholder="Write a message..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between px-3 py-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-[#235167] px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-[#224453] focus:ring-2 focus:ring-[#3a677c]"
                >
                  Send Message
                </button>
                <div className="flex space-x-1 ps-0 rtl:space-x-reverse sm:ps-2">
                  {/* <button
                    type="button"
                    className="inline-flex cursor-pointer items-center justify-center rounded p-2  text-gray-400 hover:bg-gray-600 hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button> */}
                  <p className="text-sm font-semibold text-gray-400">
                    {message.length} / 4000
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

async function sendMessage({ name, message }) {
  const jsonData = { name, message };
  const res = await fetch("/api/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
  const resp = await res.json();
  if (!resp.ok) throw new Error(resp.message);
  return resp;
}
