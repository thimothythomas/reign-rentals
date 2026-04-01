"use client";

import { motion } from "framer-motion";

export default function SearchFilter() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-sm font-bold tracking-[0.3em] text-surface-tint uppercase">
              Rental Explorer
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 font-headline">
              Find Your Perfect Ride
            </h2>
          </div>
          <button className="flex items-center gap-2 font-bold group">
            View all vehicles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-surface-container-lowest rounded-[2rem] shadow-sm"
        >
          <div className="flex flex-col gap-2 p-4">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary">
              Car Brand
            </label>
            <select className="bg-transparent border-none focus:ring-0 text-lg font-semibold p-0 text-on-surface">
              <option>All Brands</option>
              <option>Mercedes-Benz</option>
              <option>Porsche</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Jaguar</option>
              <option>Ford</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 p-4 lg:border-l border-surface-container">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary">
              Body Type
            </label>
            <select className="bg-transparent border-none focus:ring-0 text-lg font-semibold p-0 text-on-surface">
              <option>Any Type</option>
              <option>Coupe</option>
              <option>Sedan</option>
              <option>Convertible</option>
              <option>SUV</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 p-4 lg:border-l border-surface-container">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary">
              Pickup Date
            </label>
            <input
              type="date"
              className="bg-transparent border-none focus:ring-0 text-lg font-semibold p-0 text-on-surface"
            />
          </div>
          <div className="flex flex-col gap-2 p-4 lg:border-l border-surface-container">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary">
              Duration
            </label>
            <select className="bg-transparent border-none focus:ring-0 text-lg font-semibold p-0 text-on-surface">
              <option>1–3 Days</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month+</option>
            </select>
          </div>
          <div className="flex items-center justify-center p-2">
            <button className="w-full h-full bg-primary text-on-primary rounded-2xl flex items-center justify-center gap-3 font-bold py-4 hover:scale-[1.02] transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
