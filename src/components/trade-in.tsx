"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const perks = [
  "Free cancellation up to 24 hours before pickup",
  "Unlimited mileage on all rentals",
  "Comprehensive insurance included",
];

export default function TradeIn() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              className="w-full h-full object-cover"
              src="/images/misc/trade-in.jpg"
              alt="Premium Driving Experience"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-on-primary">
              <p className="text-4xl font-black mb-2 font-headline">
                Premium Experience
              </p>
              <p className="text-lg opacity-80 max-w-md">
                Every rental includes a full concierge service — from doorstep delivery to 24/7 roadside support.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-8"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-surface-tint uppercase">
            Why Rent With Us
          </span>
          <h2 className="text-5xl font-black leading-tight font-headline">
            Drive your dream car.{" "}
            <span className="text-surface-tint opacity-40">
              No commitment required.
            </span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            Skip the showroom. Our curated fleet of luxury and performance vehicles is ready when you are — from a weekend getaway to a month-long adventure.
          </p>

          <div className="space-y-4">
            {perks.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#vehicles"
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:shadow-lg transition-all inline-flex items-center gap-3"
          >
            Book a Vehicle
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
