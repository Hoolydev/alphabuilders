"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "ab-announcement-closed-v1";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function close() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="w-full text-white py-2 px-4 flex items-center justify-center gap-2 relative text-xs sm:text-sm"
      style={{ background: "var(--gradient-hero)" }}
    >
      <span>🚀</span>
      <span className="font-medium">Novidade:</span>
      <span className="hidden sm:inline">Agentes de IA agora no WhatsApp, Discord e Telegram!</span>
      <span className="sm:hidden">Agentes de IA no WhatsApp!</span>
      <a
        href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
      >
        Agendar Demo →
      </a>
      <button
        onClick={close}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Fechar"
      >
        <X size={14} />
      </button>
    </div>
  );
}
