"use client";

import { motion } from "framer-motion";

const footerLinks: Record<string, { label: string; bold?: boolean }[]> = {
  Fleet: [
    { label: "All Vehicles", bold: true },
    { label: "Luxury Sedans" },
    { label: "Sports Cars" },
    { label: "Convertibles" },
  ],
  "Rental Info": [
    { label: "How It Works" },
    { label: "Pricing" },
    { label: "Insurance" },
    { label: "FAQs" },
  ],
  Company: [
    { label: "About Us" },
    { label: "Careers" },
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-50 dark:bg-zinc-950 w-full pt-20 pb-10 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-200 dark:border-zinc-800 pb-16"
      >
        <div className="col-span-1">
          <a href="#hero" className="text-3xl font-black text-zinc-900 dark:text-zinc-50 font-headline uppercase">
            Reign
          </a>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm font-body leading-relaxed">
            Premium luxury car rentals. Drive the world&apos;s finest performance vehicles — by the day, week, or month.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading}>
            <h4 className="font-bold font-headline uppercase tracking-widest text-zinc-900 dark:text-zinc-50 mb-6 text-xs">{heading}</h4>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
                      item.bold ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-400 text-xs font-medium">
          © {new Date().getFullYear()} Reign Rentals. Built by Timothy Thomas.
        </p>
        <div className="flex gap-8">
          {["Instagram", "Twitter/X", "LinkedIn"].map((social) => (
            <a key={social} href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-xs">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
