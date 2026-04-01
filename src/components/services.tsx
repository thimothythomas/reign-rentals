"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brands } from "@/lib/cars-data";

export default function Services() {
  return (
    <>
      {/* Brand Strip */}
      <section className="py-12 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {brands.map((brand) => (
              <span key={brand} className="font-headline font-extrabold text-xl tracking-widest uppercase whitespace-nowrap">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase leading-none max-w-3xl">
            Rent With{" "}
            <span className="text-outline-variant opacity-40">Confidence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl"
          >
            <div className="h-[400px] overflow-hidden relative">
              <Image
                alt="Doorstep Delivery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/misc/sell-car.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">
                Doorstep Delivery & Pickup
              </h3>
              <p className="text-on-surface-variant mb-8 max-w-sm">
                We bring the car to you — home, office, or airport. After your rental, we collect it wherever you are. Zero hassle.
              </p>
              <button className="flex items-center gap-2 font-bold font-headline uppercase text-sm group-hover:gap-4 transition-all">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl"
          >
            <div className="h-[400px] overflow-hidden relative">
              <Image
                alt="Corporate Fleet"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/misc/valuation.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">
                Corporate & Event Rentals
              </h3>
              <p className="text-on-surface-variant mb-8 max-w-sm">
                Need a fleet for a corporate event or a showstopper for a special occasion? Our dedicated team builds custom rental packages.
              </p>
              <button className="flex items-center gap-2 font-bold font-headline uppercase text-sm group-hover:gap-4 transition-all">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-none">
              Rent From The World&apos;s
              <br />
              Best Brands
            </h2>
            <div className="flex gap-4">
              {["Mercedes", "Porsche", "Audi"].map((name) => (
                <div key={name} className="flex items-center justify-center w-24 h-24 bg-surface-container rounded-xl">
                  <span className="font-black text-xs tracking-tighter opacity-40 uppercase">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
