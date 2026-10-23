"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Remplace terre4.gif (38 Mo) : meme animation, ~1 Mo et une definition
          superieure. Le poster s'affiche le temps que la video demarre. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/assets/terre4-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/assets/terre4.webm" type="video/webm" />
        <source src="/assets/terre4.mp4" type="video/mp4" />
      </video>

      {/* Le voile est une couche distincte : auparavant l'opacite portait sur le
          conteneur du titre, qui se retrouvait lui aussi translucide. */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative flex h-full items-center justify-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[600px] text-center text-[33px] font-bold text-white md:text-[45px]"
        >
          Un Avertissement pour notre Planète : L&apos;Histoire de Nos Choix
        </motion.h1>
      </div>
    </header>
  );
}
