"use client";

import { motion } from "framer-motion";
import type { FolderProject } from "@/components/ui/AnimatedFolder";
import Badge from "./Badge";

interface ProjectCardProps {
  project: FolderProject & { category?: string; tags?: string[] };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-card border border-card-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-reno-sand/20 hover:shadow-lg hover:shadow-reno-sand/5"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#111] to-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-3 left-3">
          {project.category && <Badge variant="accent">{project.category}</Badge>}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
          <div className="w-20 h-20 border border-reno-sand/30 rounded-xl rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
          <div className="absolute w-14 h-14 border border-white/10 rounded-lg rotate-12 group-hover:rotate-[22deg] transition-transform duration-500" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-black-ribbon text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-beryl-pearl/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="text-reno-sand text-sm font-medium hover:underline inline-flex items-center gap-1 group/link"
        >
          Ver Projeto
          <span className="group-hover/link:translate-x-1 transition-transform">
            &rarr;
          </span>
        </a>
      </div>
    </motion.div>
  );
}
