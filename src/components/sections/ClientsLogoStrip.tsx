"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/logos/medsys-logo.png",           alt: "MedSys" },
  { src: "/logos/Simbolo-HIAE-_500x500px.png", alt: "HIAE" },
  { src: "/logos/cropped-logo.png",           alt: "Cliente" },
  { src: "/logos/cyberg-logo-CIh-xHVv.png",  alt: "Cyberg" },
  { src: "/logos/logo-clinicamedtech.png",    alt: "Clínica MedTech" },
  { src: "/logos/logo-hagios-recortada.png",  alt: "Hagios" },
  { src: "/logos/logo-strattner.png",         alt: "Strattner" },
  { src: "/logos/logo_pay.png",               alt: "Pay" },
  { src: "/logos/nexdrive-logo.png",          alt: "NexDrive" },
  { src: "/logos/progastro-logo.png",         alt: "ProGastro" },
];

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center mx-4 sm:mx-8 w-24 sm:w-32 h-12 sm:h-14">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={48}
        className="object-contain max-h-12 w-auto transition-all duration-300"
        style={{
          filter: "grayscale(100%)",
          opacity: 0.5,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
          (e.currentTarget as HTMLImageElement).style.opacity = "1";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
          (e.currentTarget as HTMLImageElement).style.opacity = "0.5";
        }}
        unoptimized
      />
    </div>
  );
}

export default function ClientsLogoStrip() {
  const row1 = logos;
  const row2 = [...logos].reverse();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
      className="py-12 bg-white overflow-hidden border-y border-gray-100"
    >
      <p className="text-center text-xs text-gray-400 mb-8 tracking-widest uppercase">
        Mais de 100 empresas confiam em nossos agentes de IA
      </p>

      {/* Row 1 — left */}
      <div className="relative mb-6">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10" style={{ background: "linear-gradient(90deg, #ffffff 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10" style={{ background: "linear-gradient(271deg, #ffffff 0%, transparent 100%)" }} />
        <div className="flex animate-marquee-left">
          {[...row1, ...row1].map((logo, i) => (
            <LogoItem key={`r1-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10" style={{ background: "linear-gradient(90deg, #ffffff 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10" style={{ background: "linear-gradient(271deg, #ffffff 0%, transparent 100%)" }} />
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((logo, i) => (
            <LogoItem key={`r2-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
