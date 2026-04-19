"use client";

import { motion } from "framer-motion";
import { AnimatedFolder } from "@/components/ui/AnimatedFolder";
import { folderCategories } from "@/data/projects";

export default function FolderProjects() {
  return (
    <section id="projetos" className="py-24 bg-black-metal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs text-reno-sand uppercase tracking-widest mb-4 block">Portfólio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-beryl-pearl mb-3">
            Projetos que <span className="text-reno-sand">entregamos</span>
          </h2>
          <p className="text-black-ribbon max-w-xl mx-auto">
            23 projetos reais. Clique em uma pasta para explorar os sistemas que construímos.
          </p>
        </motion.div>

        {/* Folder grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 place-items-center max-w-5xl mx-auto"
        >
          {folderCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] } },
              }}
            >
              <AnimatedFolder
                title={cat.title}
                count={cat.projects.length}
                projects={cat.projects}
                gradient={cat.gradient}
                accentColor={cat.accentColor}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-xs text-black-ribbon/50 mt-12"
        >
          Clique em qualquer pasta para ver os projetos · Navegue com as setas para explorar
        </motion.p>
      </div>
    </section>
  );
}
