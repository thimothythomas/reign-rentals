"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative px-6 md:px-12 lg:px-20 py-12 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 z-10"
        >
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] text-primary mb-8 font-headline">
            Rent Luxury <br />
            Performance <br />
            <span className="text-surface-tint opacity-20">Vehicles</span>
          </h1>

          <p className="text-secondary text-lg max-w-md mb-8">
            More than just a rental — it&apos;s a way of life. At Reign, performance meets lifestyle.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#vehicles"
              className="bg-primary text-on-primary px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all"
            >
              Browse Fleet
            </a>
            <a
              href="#about"
              className="bg-surface-container-high text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-surface-container-highest transition-all"
            >
              About us
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-4">
              <Image
                className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                src="/images/avatars/avatar-1.jpg"
                alt="Customer"
                width={48}
                height={48}
              />
              <Image
                className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                src="/images/avatars/avatar-2.jpg"
                alt="Customer"
                width={48}
                height={48}
              />
              <Image
                className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                src="/images/avatars/avatar-3.jpg"
                alt="Customer"
                width={48}
                height={48}
              />
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary flex items-center justify-center text-on-primary text-xs font-bold">
                +10k
              </div>
            </div>
            <div>
              <p className="text-2xl font-black font-headline tracking-tight">
                10,000+
              </p>
              <p className="text-sm text-secondary font-medium uppercase tracking-widest">
                Happy renters
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container opacity-20 blur-[100px] rounded-full" />
          <Image
            alt="Mercedes-AMG GT"
            className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10"
            src="/images/hero-car.jpg"
            width={800}
            height={600}
            priority
          />
          <div className="absolute bottom-8 -left-8 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-zinc-700/20 shadow-lg z-20 hidden md:block">
            <p className="text-xs uppercase font-bold tracking-widest text-primary/60 dark:text-zinc-400 mb-1">
              Featured Rental
            </p>
            <p className="text-xl font-black text-primary dark:text-zinc-50 font-headline">
              Mercedes-AMG GT — ₹32,999/day
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
