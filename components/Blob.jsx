"use client";
import { useState, useEffect } from "react";

const Blob = () => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    function handleMouseMove(event) {
      const blob = document.getElementById("blob");
      const blur = document.getElementById("blur");

      const { clientX, clientY } = window.event;

      if (firstRender) {
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
        blur.style.left = `${clientX}px`;
        blur.style.top = `${clientY}px`;
        setFirstRender(false);
      }
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
      blur.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [firstRender]);
  return (
    <>
      <section className="absolute z-auto">
        <div
          id="blob"
          className="bg-white h-32 w-32 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-0 bg-gradient-to-r from-emerald-500 to-sky-500 rotate"
        ></div>
        <div
          id="blur"
          className="absolute h-52 w-52 backdrop-blur-lg rounded-full -translate-x-10 -translate-y-10"
        ></div>
      </section>
    </>
  );
};

export default Blob;
