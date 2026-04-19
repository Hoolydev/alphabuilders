"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

const codeLines = [
  { text: "// Configuracao do projeto Alpha Builders", type: "comment" },
  { text: "import { createApp } from '@alpha/core';", type: "keyword" },
  { text: "import { database, auth, api } from '@alpha/modules';", type: "keyword" },
  { text: "", type: "empty" },
  { text: "const app = createApp({", type: "keyword" },
  { text: "  // Inicializar modulos principais", type: "comment" },
  { text: "  modules: [database(), auth(), api()],", type: "text" },
  { text: "", type: "empty" },
  { text: "  // Configuracoes de performance", type: "comment" },
  { text: "  config: {", type: "text" },
  { text: "    cache: true,", type: "text" },
  { text: "    rateLimit: 1000,", type: "text" },
  { text: "    region: 'sa-east-1',  // Sao Paulo", type: "mixed" },
  { text: "  },", type: "text" },
  { text: "});", type: "text" },
  { text: "", type: "empty" },
  { text: "// Iniciar aplicacao em producao", type: "comment" },
  { text: "await app.deploy({ env: 'production' });", type: "keyword" },
  { text: "console.log('Sistema no ar! 🚀');", type: "keyword" },
];

function colorize(line: { text: string; type: string }) {
  if (line.type === "comment") return "text-[#484D52]";
  if (line.type === "keyword") return "text-reno-sand";
  if (line.type === "mixed") return "text-green-400/80";
  return "text-beryl-pearl/90";
}

export default function CodeTypewriter() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [copied, setCopied] = useState(false);

  const fullText = codeLines.map((l) => l.text).join("\n");

  useEffect(() => {
    if (visibleChars >= fullText.length) return;
    const delay = fullText[visibleChars] === "\n" ? 30 : Math.random() * 20 + 15;
    const timer = setTimeout(() => setVisibleChars((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleChars, fullText]);

  // Build rendered lines from visible chars
  let charsLeft = visibleChars;
  const renderedLines: { text: string; done: boolean; meta: typeof codeLines[0] }[] = [];
  for (const line of codeLines) {
    const lineLen = line.text.length + 1; // +1 for \n
    if (charsLeft <= 0) {
      renderedLines.push({ text: "", done: false, meta: line });
    } else if (charsLeft >= lineLen) {
      renderedLines.push({ text: line.text, done: true, meta: line });
      charsLeft -= lineLen;
    } else {
      renderedLines.push({ text: line.text.slice(0, charsLeft), done: false, meta: line });
      charsLeft = 0;
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl shadow-black/60 w-full">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-bg-surface-alt border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-[#484D52]">config.ts</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#484D52] hover:text-beryl-pearl transition-colors px-3 py-1 rounded-md hover:bg-white/5"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      {/* Code */}
      <div className="p-5 overflow-x-auto">
        <pre className="text-xs leading-relaxed font-mono">
          {renderedLines.map((line, i) => (
            <div key={i} className="flex min-h-[1.5em]">
              <span className="w-6 text-right mr-4 text-[#484D52]/40 select-none shrink-0">
                {i + 1}
              </span>
              <span className={colorize(line.meta)}>
                {line.text || "\u00A0"}
                {/* blinking cursor on current line */}
                {!line.done && line.text.length > 0 && (
                  <span className="animate-pulse">▋</span>
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
