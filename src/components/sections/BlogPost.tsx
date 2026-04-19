"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/data/blog";

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { elements.push(<div key={key++} className="h-3" />); continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-beryl-pearl mt-10 mb-4 leading-snug">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-beryl-pearl/90 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="text-black-ribbon leading-relaxed ml-4 list-disc mb-1.5">
          {parseBold(line.slice(2))}
        </li>
      );
    } else if (/^\d+\./.test(line)) {
      elements.push(
        <li key={key++} className="text-black-ribbon leading-relaxed ml-4 list-decimal mb-1.5">
          {parseBold(line.replace(/^\d+\.\s/, ""))}
        </li>
      );
    } else {
      elements.push(
        <p key={key++} className="text-black-ribbon leading-relaxed mb-0">
          {parseBold(line)}
        </p>
      );
    }
  }
  return elements;
}

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="font-semibold text-beryl-pearl/90">{part}</strong>
      : part
  );
}

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <article className="min-h-screen bg-black-metal pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link href="/blog" className="flex items-center gap-2 text-sm text-black-ribbon hover:text-beryl-pearl transition-colors duration-300 w-fit">
            <ArrowLeft size={15} />
            Voltar ao blog
          </Link>
        </motion.div>

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
          className="relative w-full rounded-card overflow-hidden mb-10"
          style={{ height: 320, background: post.coverGradient }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-30">
            {post.coverEmoji}
          </div>
          <div className="absolute bottom-6 left-6">
            <span className="text-xs px-3 py-1 rounded-pill bg-black/40 text-beryl-pearl backdrop-blur-sm border border-white/10">
              {post.category}
            </span>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.44, 0, 0.56, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm text-black-ribbon">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-card-border" />
            <span className="flex items-center gap-1.5 text-sm text-black-ribbon">
              <Clock size={12} /> {post.readTime} de leitura
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-beryl-pearl leading-snug mb-5">
            {post.title}
          </h1>
          <p className="text-lg text-black-ribbon leading-relaxed border-l-2 border-reno-sand/40 pl-4">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="divider mb-10" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-custom"
        >
          {renderMarkdown(post.content)}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 rounded-card bg-card border border-card-border"
        >
          <h3 className="text-xl font-bold text-beryl-pearl mb-3">
            Pronto para automatizar seu negócio?
          </h3>
          <p className="text-black-ribbon mb-6">
            A Alpha Builders mapeia seus processos e implementa automações que geram resultado em semanas.
          </p>
          <a
            href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-reno-sand text-black font-semibold text-sm hover:bg-reno-sand/90 transition-all duration-300"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </article>
  );
}
