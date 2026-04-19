"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Integration {
  name: string;
  description: string;
  iconSrc: string;
}

export interface IntegrationShowcaseProps {
  title: string;
  subtitle: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
  integrations: Integration[];
  className?: string;
}

const HighlightedTitle = ({ text }: { text: string }) => {
  const parts = text.split(/~/);
  return (
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
      {parts.map((part, index) =>
        index === 1 ? (
          <span key={index} className="relative whitespace-nowrap gradient-text">
            <span className="relative">{part}</span>
          </span>
        ) : (
          part
        )
      )}
    </h2>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.44, 0, 0.56, 1] as const },
  },
};

export const IntegrationShowcase = React.forwardRef<
  HTMLElement,
  IntegrationShowcaseProps
>(({ title, subtitle, illustrationSrc, illustrationAlt, integrations, className }, ref) => {
  return (
    <section ref={ref} className={cn("w-full py-12 md:py-16 bg-white", className)}>
      <div className="max-w-6xl md:container mx-auto px-4">

        {/* Header */}
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 lg:grid-cols-2 mb-12">
          <div className="max-w-xl">
            <HighlightedTitle text={title} />
            <p className="mt-4 text-base text-gray-400 sm:text-lg leading-relaxed">{subtitle}</p>
          </div>
          {illustrationSrc && (
            <div className="flex items-center justify-center">
              <img
                src={illustrationSrc}
                alt={illustrationAlt ?? ""}
                className="w-56 h-auto object-contain opacity-80"
              />
            </div>
          )}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {integrations.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-[#F9F9F9] hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-100">
                <img
                  src={item.iconSrc}
                  alt={`${item.name} logo`}
                  className="h-5 w-5 object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-0.5 text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

IntegrationShowcase.displayName = "IntegrationShowcase";
