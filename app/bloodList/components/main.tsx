"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BloodPage() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(false);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {[...Array(13)].map((_, i) => (
          <motion.div
            key={i}
            className={`${
              isHidden ? "hidden" : "absolute"
            } rounded-full bg-red-600/20`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 80}%`,
              width: `${Math.random() * 7 + 7}vh`,
              height: `${Math.random() * 100 + 7}px`,
            }}
            animate={{
              scale: [1, 1.5, 1.7, 0.9, 1],
              opacity: [0.1, 0.4, 0.7, 0.4, 0.1],
              transition: {
                duration: Math.random() * 7 + 3,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      <div className="absolute top-16 md:top-11 lg:top-12">
        <p className="blood-text-shadow text-3xl font-black text-[hsl(0,66%,52%)] md:text-6xl lg:md:text-7xl">
          Blood List of Hostel
        </p>
      </div>

      <div className="absolute h-28 w-28 select-none rounded-full bg-red-600/20 md:h-32 md:w-32" />

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 333,
          damping: 17,
        }}
        className="w-auto px-4"
      >
        <a
          href="https://docs.google.com/spreadsheets/d/1HTsANu_CuIL-COFojYi-ZM0r2jtt7orlRLQ2cmauYao/edit?usp=sharing"
          target="_blank"
        >
          <Button
            size="lg"
            variant="destructive"
            className="group relative z-10 w-full overflow-hidden px-6 py-3 text-base font-semibold sm:w-auto sm:text-lg"
          >
            <span className="relative z-10">See the Blood Sheet</span>
            <motion.div
              className="absolute inset-0 bg-red-800"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </a>
      </motion.div>
    </div>
  );
}
