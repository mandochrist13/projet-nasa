"use client";
import "../globals.css";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isVisible] = useState(true);
  return (
    <header
      className="bg-cover bg-center h-svh"
      style={{ backgroundImage: "url(/assets/Section.png)" }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-around gap-4 px-5">
          <AnimatePresence>
            <div className="">
              <Image
                src="/assets/globe.gif"
                width={200}
                height={113}
                alt="gif"
                className="animate-levitate md:w-auto h-screen"
              />
            </div>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 w-1/3 md:w-full max-w-[500px]"
              >
                <h1 className="text-[23px] md:text-4xl text-center font-bold text-white">
                Un Avertissement pour notre Planète : L&apos;Histoire de Nos Choix
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
