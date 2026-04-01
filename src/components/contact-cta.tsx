"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  pickupDate: string;
  carPreference: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  pickupDate?: string;
}

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    carPreference: "Any",
  });

  function validate(): boolean {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(form.phone)) {
      errs.phone = "Enter a valid phone number";
    }
    if (!form.pickupDate) errs.pickupDate = "Pickup date is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const fieldClass = (field: keyof FormErrors) =>
    `w-full rounded-lg border bg-surface px-4 py-3 text-sm text-on-surface placeholder:text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      errors[field] ? "border-red-500" : "border-outline-variant"
    }`;

  return (
    <section id="cta" className="py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold tracking-[0.3em] text-surface-tint uppercase">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mt-3">
            Ready to Hit the Road?
          </h2>
          <p className="mt-6 text-secondary text-lg leading-relaxed max-w-lg">
            Fill out the form and our team will confirm your booking within the
            hour. Or call us directly for instant reservations.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-sm font-medium text-secondary">Call us</p>
              <p className="mt-1 text-xl font-semibold text-on-surface">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-sm font-medium text-secondary">Email</p>
              <p className="mt-1 text-xl font-semibold text-on-surface">hello@reigncars.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-secondary">Location</p>
              <p className="mt-1 text-xl font-semibold text-on-surface">MG Road, Bangalore 560001</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest p-12 text-center shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">Booking Request Sent!</h3>
              <p className="mt-2 text-secondary">
                We&apos;ll reach out within the hour to confirm your ride.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", pickupDate: "", carPreference: "Any" });
                }}
                className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold text-on-primary transition-transform active:scale-95"
              >
                Book Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-surface-container-lowest p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold font-headline">Book Your Ride</h3>
              <p className="mt-1 text-sm text-secondary">
                Fill in your details and we&apos;ll handle the rest.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input id="name" type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className={fieldClass("name")} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={fieldClass("email")} aria-invalid={!!errors.email} />
                    {errors.email && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input id="phone" type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={fieldClass("phone")} aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pickupDate" className="sr-only">Pickup Date</label>
                    <input id="pickupDate" type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} className={fieldClass("pickupDate")} aria-invalid={!!errors.pickupDate} />
                    {errors.pickupDate && <p className="mt-1 text-xs text-red-500" role="alert">{errors.pickupDate}</p>}
                  </div>
                  <div>
                    <label htmlFor="carPreference" className="sr-only">Car Preference</label>
                    <select id="carPreference" name="carPreference" value={form.carPreference} onChange={handleChange} className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20">
                      <option value="Any">Any Vehicle</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Convertible">Convertible</option>
                      <option value="SUV">SUV</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:shadow-xl active:scale-[0.98]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                  Submit Booking Request
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
