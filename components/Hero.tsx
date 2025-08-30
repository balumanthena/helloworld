"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Indian food"
        fill
        className="object-cover brightness-60"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#b02a30]/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience the{" "}
          <span className="text-yellow-400">Flavors of India</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          A culinary journey through vibrant spices, authentic traditions,
          and unforgettable dining experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-yellow-500 transition-all">
            🍽️ Book a Table
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-[#b02a30] transition-all"
          >
            View Menu
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Element (Paisley pattern, optional) */}
      <motion.div
        className="absolute bottom-10 right-10 opacity-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <Image
          src="/paisley-texture.png"
          alt="Paisley design"
          width={120}
          height={120}
        />
      </motion.div>
    </section>
  );
}
