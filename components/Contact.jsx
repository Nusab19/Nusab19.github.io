// "use client";
// import { useState, useEffect } from "react";

import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#001219] text-gray-100">
      <div className="mx-auto min-h-screen max-w-screen-lg px-0">
        <header className="py-10 text-center text-3xl font-bold md:mb-20 md:text-5xl">
          Contact Me
        </header>

        <div className="flex flex-col items-center justify-center">
          <form className="w-full px-2 lg:px-0">
            <div className="relative mb-4">
              <input
                type="text"
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
                Name
              </label>
            </div>

            <div className="mb-4 w-full rounded-lg border border-gray-950 bg-[#1e2529]">
              <div className="rounded-t-lg bg-[#2b363b] px-4 py-2">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  className="w-full bg-[#2b363b]  px-0 text-sm text-white placeholder-gray-400 outline-none"
                  placeholder="Write a message..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between px-3 py-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-[#235167] px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-[#224453] focus:ring-4 focus:ring-blue-900"
                >
                  Post comment
                </button>
                <div className="flex space-x-1 ps-0 rtl:space-x-reverse sm:ps-2">
                  <button
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
                  </button>
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
