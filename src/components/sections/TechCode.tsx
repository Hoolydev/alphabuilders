"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const codeSnippet = `// Configuracao do projeto Alpha Builders
import { createApp } from '@alpha/core';
import { database, auth, api } from '@alpha/modules';

const app = createApp({
  // Inicializar modulos principais
  modules: [database(), auth(), api()],

  // Configuracoes de performance
  config: {
    cache: true,
    rateLimit: 1000,
    region: 'sa-east-1',  // Sao Paulo
  },
});

// Iniciar aplicacao em producao
await app.deploy({ env: 'production' });
console.log('Sistema no ar! 🚀');`;

export default function TechCode() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Integracao rapida e{" "}
            <span className="text-reno-sand">sem complicacao</span>
          </h2>
          <p className="text-black-ribbon max-w-2xl mx-auto">
            Nosso codigo e limpo, bem documentado e pronto para escalar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-card-border rounded-2xl overflow-hidden"
        >
          {/* Editor top bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-card-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-black-ribbon">config.ts</span>
            <button className="flex items-center gap-1.5 text-xs text-black-ribbon hover:text-beryl-pearl transition-colors px-3 py-1 rounded-md hover:bg-white/5">
              <Copy size={12} />
              Copiar
            </button>
          </div>

          {/* Code content */}
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed font-mono">
              {codeSnippet.split("\n").map((line, i) => (
                <div key={i} className="flex">
                  <span className="w-8 text-right mr-4 text-black-ribbon/50 select-none text-xs leading-relaxed">
                    {i + 1}
                  </span>
                  <span
                    className={
                      line.trim().startsWith("//")
                        ? "text-black-ribbon"
                        : line.includes("import") || line.includes("from") || line.includes("const") || line.includes("await")
                        ? "text-reno-sand"
                        : line.includes("'") || line.includes('"') || line.includes("`")
                        ? "text-green-400/80"
                        : "text-beryl-pearl/90"
                    }
                  >
                    {line || "\u00A0"}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
