"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stats } from "@/lib/cars-data";

export default function About() {
  return (
    <>
      <section id="about" className="relative px-8 md:px-20 py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-[0.03]">
          <span className="text-[15vw] font-headline font-extrabold uppercase leading-none tracking-tighter select-none whitespace-nowrap">
            Reign Rentals
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Luxury Fleet", "Concierge Service", "Flexible Rentals"].map((tag) => (
              <span key={tag} className="bg-secondary-container text-on-secondary-container px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-on-surface max-w-5xl tracking-tight mb-20">
            Reign Delivers Premium Rental Experiences — From Weekend Getaways To Extended Road Trips. Your Dream Car Is One Booking Away.
          </h2>

          <div className="w-full h-[500px] rounded-xl overflow-hidden mb-24 relative">
            <Image
              alt="Ferrari on a showroom floor"
              className="w-full h-full object-cover"
              src="/images/misc/ferrari.jpg"
              fill
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </section>

      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between aspect-square group hover:bg-primary transition-all duration-500 cursor-pointer"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-surface-tint group-hover:text-on-primary transition-colors">
                  {stat.icon === "groups" && (<><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" /></>)}
                  {stat.icon === "history_edu" && (<><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></>)}
                  {stat.icon === "verified" && (<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />)}
                  {stat.icon === "directions_car" && (<><path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17l-1 3M19 17l1 3" /><circle cx="7.5" cy="13" r="1.5" /><circle cx="16.5" cy="13" r="1.5" /></>)}
                </svg>
                <div>
                  <div className="text-5xl font-headline font-black text-on-surface group-hover:text-on-primary mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-secondary font-body uppercase text-xs font-bold tracking-widest group-hover:text-on-primary/70 transition-colors">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="font-headline font-bold text-4xl text-on-surface uppercase tracking-tight">The Reign Experience</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl font-body">
              We don&apos;t just rent cars; we curate driving experiences. Every vehicle in our fleet is hand-selected, meticulously maintained, and delivered to your door — because luxury should be effortless.
            </p>
            <div className="pt-4">
              <a href="#about" className="group flex items-center gap-4 text-on-surface font-headline font-bold uppercase tracking-widest">
                Our Philosophy
                <span className="bg-primary text-on-primary p-3 rounded-full group-hover:translate-x-2 transition-transform inline-flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden relative">
              <Image
                alt="Porsche sports car on an open road at sunset"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/misc/showroom.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-body italic text-surface-tint text-sm leading-relaxed">
                &ldquo;Every car tells a story. We make sure yours begins with the perfect chapter.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
