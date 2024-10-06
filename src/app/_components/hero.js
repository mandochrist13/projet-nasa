"use client";
import "../globals.css";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isVisible] = useState(true);
  return (
    <header
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/assets/terre4.gif)" }}
    >
      <div className="opacity-70 bg-black bg-blend-overlay w-full h-full">
        <div className="flex h-full flex-col-reverse md:flex-row items-center justify-center md:justify-around gap-4 px-5">
          <AnimatePresence>
            <div className="hidden">
              <Image
                src="/assets/globe.gif"
                width={200}
                height={113}
                alt="gif"
                className="animate-levitate md:w-auto md:h-screen"
              />
            </div>
            {isVisible && (
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.10, ease: "easeOut" }}
              className="flex flex-col gap-4 w-full max-w-[600px]"
            >
              <h1 className="text-[33px] md:text-[45px] text-center font-bold text-white">
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
