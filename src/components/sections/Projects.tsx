"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectCategories, type Project } from "@/data/projects";
import dynamic from "next/dynamic";

const N8nAnimation  = dynamic(() => import("@/components/ui/N8nAnimation"),              { ssr: false });
const CRMMockup     = dynamic(() => import("@/components/ui/mockups/CRMMockup"),         { ssr: false });
const ERPMockup     = dynamic(() => import("@/components/ui/mockups/ERPMockup"),         { ssr: false });
const WebAppMockup  = dynamic(() => import("@/components/ui/mockups/WebAppMockup"),      { ssr: false });
const MobileMockup  = dynamic(() => import("@/components/ui/mockups/MobileMockup"),      { ssr: false });
const SiteMockup    = dynamic(() => import("@/components/ui/mockups/SiteMockup"),        { ssr: false });

const mockupMap: Record<string, React.ComponentType> = {
  automacoes: N8nAnimation,
  crm:        CRMMockup,
  erp:        ERPMockup,
  webapp:     WebAppMockup,
  mobile:     MobileMockup,
  sites:      SiteMockup,
};

export default function Projects() {
  const [activeCat, setActiveCat] = useState(projectCategories[0].id);
  const [activeProject, setActiveProject] = useState<Project>(projectCategories[0].projects[0]);

  const category = projectCategories.find((c) => c.id === activeCat)!;
  const Mockup = mockupMap[activeCat];

  function selectCategory(id: string) {
    setActiveCat(id);
    const cat = projectCategories.find((c) => c.id === id)!;
    setActiveProject(cat.projects[0]);
  }

  return (
    <section id="projetos" className="py-24 bg-black-metal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beryl-pearl mb-3">
            Projetos que <span className="text-reno-sand">entregamos</span>
          </h2>
          <p className="text-black-ribbon max-w-xl">
            Selecione uma categoria para ver os sistemas que já construímos.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Mobile: horizontal scroll pills ── */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-none">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  activeCat === cat.id
                    ? "bg-card border-reno-sand/30 text-beryl-pearl"
                    : "border-transparent text-black-ribbon bg-card/40"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* ── Desktop: vertical category list ── */}
          <div className="hidden lg:flex flex-col gap-2 lg:w-64 flex-shrink-0">
            {projectCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
                onClick={() => selectCategory(cat.id)}
                className={`flex items-start gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group ${
                  activeCat === cat.id
                    ? "bg-card border border-reno-sand/30"
                    : "hover:bg-card/60 border border-transparent"
                }`}
              >
                <span className="text-xl mt-0.5 flex-shrink-0">{cat.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-semibold transition-colors ${
                    activeCat === cat.id ? "text-beryl-pearl" : "text-black-ribbon group-hover:text-beryl-pearl"
                  }`}>
                    {cat.label}
                  </p>
                  <p className="text-xs text-black-ribbon/70 leading-relaxed mt-0.5 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                {activeCat === cat.id && (
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-reno-sand flex-shrink-0" />
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Right: Detail panel ──────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }}
                className="bg-card border border-card-border rounded-2xl overflow-hidden"
              >
                {/* Category title bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 border-b border-card-border">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm font-semibold text-beryl-pearl">{category.label}</span>
                    <span className="text-xs text-black-ribbon ml-1">({category.projects.length})</span>
                  </div>
                  {/* Project tabs */}
                  <div className="flex gap-1 overflow-x-auto scrollbar-none">
                    {category.projects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveProject(p)}
                        className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                          activeProject.id === p.id
                            ? "bg-reno-sand/20 text-reno-sand"
                            : "text-black-ribbon hover:text-beryl-pearl"
                        }`}
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Mockup area */}
                  <div className="md:flex-1 relative bg-bg-surface-alt overflow-hidden" style={{ minHeight: 260 }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCat}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 flex items-stretch"
                      >
                        {Mockup && <Mockup />}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Project info */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
                      className="md:w-64 flex-shrink-0 p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-card-border"
                    >
                      <div>
                        <h3 className="text-base font-semibold text-beryl-pearl mb-2">
                          {activeProject.title}
                        </h3>
                        <p className="text-xs text-black-ribbon leading-relaxed">
                          {activeProject.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-md bg-bg-elevated text-black-ribbon border border-card-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {activeProject.url && (
                        <a
                          href={activeProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto flex items-center gap-2 text-xs font-semibold text-beryl-pearl px-4 py-2.5 rounded-lg bg-reno-sand/10 hover:bg-reno-sand/20 border border-reno-sand/20 hover:border-reno-sand/40 transition-all duration-300 w-fit"
                        >
                          Ver Projeto
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
