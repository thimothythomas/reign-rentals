"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { featuredCars } from "@/lib/cars-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedVehicles() {
  return (
    <section id="vehicles" className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center md:text-left"
      >
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
          Our Fleet
        </span>
        <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-zinc-900 dark:text-zinc-50 leading-[1.1] tracking-tighter max-w-3xl">
          Luxury Cars Available For Rent
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold">
            High Performance
          </span>
          <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-sm font-semibold">
            Instant Booking
          </span>
          <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-sm font-semibold">
            Fully Insured
          </span>
        </div>
      </motion.header>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {featuredCars.map((car) => (
          <motion.div
            key={car.id}
            variants={item}
            className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:translate-y-[-8px]"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={car.image}
                alt={car.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {car.badge && (
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest ${
                      car.badge === "Premium"
                        ? "bg-primary text-on-primary"
                        : "bg-white/90 backdrop-blur-md text-zinc-900"
                    }`}
                  >
                    {car.badge}
                  </span>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-md text-zinc-900 px-3 py-1 rounded-lg text-xs font-bold">
                  {car.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-headline font-bold text-xl text-zinc-900 dark:text-zinc-50 mb-1">
                {car.name}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                {car.subtitle}
              </p>

              <div className="mt-auto flex justify-between items-end">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    {car.seats}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    {car.transmission}
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-zinc-400 font-medium">
                    From
                  </span>
                  <span className="text-lg font-black text-zinc-900 dark:text-zinc-50">
                    {car.pricePerDay}
                    <span className="text-xs font-medium text-zinc-400">/day</span>
                  </span>
                </div>
              </div>

              <button className="mt-5 w-full py-2.5 rounded-full bg-primary/5 dark:bg-zinc-800 text-primary dark:text-zinc-50 font-bold text-sm hover:bg-primary hover:text-on-primary transition-all duration-300">
                Rent This Car
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-24 text-center"
      >
        <a
          href="#vehicles"
          className="group inline-flex items-center gap-4 bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:pr-10 active:scale-95 shadow-2xl shadow-primary/20"
        >
          View Entire Fleet
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="mt-6 text-zinc-400 text-sm font-medium">
          Showing 8 of 200+ luxury vehicles available for rent.
        </p>
      </motion.div>
    </section>
  );
}
