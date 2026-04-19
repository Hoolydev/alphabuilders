"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

function PostCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        {/* Cover */}
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-5"
          style={{ height: 220, background: post.coverGradient }}
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }}
          />
          {/* Emoji */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 group-hover:opacity-60 transition-opacity duration-450 group-hover:scale-110 transform transition-transform">
            {post.coverEmoji}
          </div>
          {/* Category pill */}
          <div className="absolute top-4 left-4">
            <span className="text-xs px-3 py-1 rounded-pill bg-black/40 text-beryl-pearl backdrop-blur-sm border border-white/10">
              {post.category}
            </span>
          </div>
          {/* Arrow on hover */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={14} className="text-beryl-pearl" />
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-black-ribbon">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-card-border" />
          <span className="flex items-center gap-1 text-xs text-black-ribbon">
            <Clock size={11} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-beryl-pearl mb-2 leading-snug group-hover:text-reno-sand transition-colors duration-300">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-black-ribbon leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </Link>
    </motion.article>
  );
}

export default function BlogListing() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="min-h-screen bg-black-metal pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
          className="mb-16"
        >
          <span className="text-xs text-reno-sand uppercase tracking-widest mb-4 block">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-beryl-pearl mb-4 max-w-2xl leading-tight">
            Insights sobre software,<br />
            <span className="text-reno-sand">automação e IA</span>
          </h1>
          <p className="text-black-ribbon max-w-xl">
            Conteúdo direto ao ponto para empresas que querem entender e aproveitar a transformação digital.
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.44, 0, 0.56, 1] }}
          className="mb-16"
        >
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 bg-card rounded-card border border-card-border overflow-hidden hover:border-reno-sand/30 transition-all duration-450">
              {/* Cover */}
              <div
                className="relative min-h-64"
                style={{ background: featured.coverGradient }}
              >
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-40">
                  {featured.coverEmoji}
                </div>
                <div className="absolute top-5 left-5">
                  <span className="text-xs px-3 py-1 rounded-pill bg-black/40 text-beryl-pearl backdrop-blur-sm border border-white/10">
                    Em destaque
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-center gap-4">
                <span className="text-xs text-reno-sand uppercase tracking-widest">{featured.category}</span>
                <h2 className="text-2xl font-bold text-beryl-pearl leading-snug group-hover:text-reno-sand transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-sm text-black-ribbon leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-black-ribbon">{featured.date}</span>
                  <span className="flex items-center gap-1 text-xs text-black-ribbon">
                    <Clock size={11} /> {featured.readTime}
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-reno-sand group-hover:gap-2.5 transition-all duration-300">
                    Ler artigo <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
