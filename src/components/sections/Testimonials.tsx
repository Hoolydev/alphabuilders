"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-black-metal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beryl-pearl mb-4">
            O que dizem as empresas que{" "}
            <span className="text-reno-sand">pararam de improvisar</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[340px] sm:w-[400px] bg-card border border-card-border rounded-2xl p-6 snap-start"
            >
              <div className="text-4xl text-reno-sand/60 mb-3 leading-none font-serif">
                &ldquo;
              </div>
              <p className="text-beryl-pearl/80 text-sm leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-black-ribbon text-xs mt-0.5">
                  {t.role} &middot; {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
