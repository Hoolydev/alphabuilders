"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  forwardRef,
} from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FolderProject {
  id: string;
  image: string;
  title: string;
  description?: string;
  tags?: string[];
  url?: string;
}

// ─── ProjectCard (fan cards inside folder) ───────────────────────────────────

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;
    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn("absolute w-20 h-28 cursor-pointer group/card", isSelected && "opacity-0")}
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          zIndex: 10 + index,
          left: "-40px",
          top: "-56px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div
          className={cn(
            "w-full h-full rounded-lg overflow-hidden shadow-xl bg-card border border-white/5 relative",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-hover/card:-translate-y-6 group-hover/card:shadow-2xl group-hover/card:shadow-reno-sand/40 group-hover/card:ring-2 group-hover/card:ring-reno-sand group-hover/card:scale-125"
          )}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-black uppercase tracking-tighter text-white truncate drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// ─── ImageLightbox ────────────────────────────────────────────────────────────

interface ImageLightboxProps {
  projects: FolderProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
}) => {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length;
  const hasNext = internalIndex < totalProjects - 1;
  const hasPrev = internalIndex > 0;
  const currentProject = projects[internalIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setIsSliding(true);
      const timer = setTimeout(() => {
        setInternalIndex(currentIndex);
        setIsSliding(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
      setIsSliding(false);
    }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (internalIndex >= totalProjects - 1 || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, totalProjects, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 500);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimationPhase("animating"));
      });
      const timer = setTimeout(() => setAnimationPhase("complete"), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, sourceRect]);

  if (!shouldRender || !currentProject) return null;

  const getInitialStyles = (): React.CSSProperties => {
    if (!sourceRect) return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const targetW = Math.min(800, vw - 64);
    const targetH = Math.min(vh * 0.85, 600);
    const targetX = (vw - targetW) / 2;
    const targetY = (vh - targetH) / 2;
    const scaleX = sourceRect.width / targetW;
    const scaleY = sourceRect.height / targetH;
    const scale = Math.max(scaleX, scaleY);
    const translateX = sourceRect.left + sourceRect.width / 2 - (targetX + targetW / 2) + window.scrollX;
    const translateY = sourceRect.top + sourceRect.height / 2 - (targetY + targetH / 2) + window.scrollY;
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 0.5,
      borderRadius: "12px",
    };
  };

  const getFinalStyles = (): React.CSSProperties => ({
    transform: "translate(0, 0) scale(1)",
    opacity: 1,
    borderRadius: "24px",
  });

  const currentStyles =
    animationPhase === "initial" && !isClosing ? getInitialStyles() : getFinalStyles();

  const btnBase =
    "flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-white transition-all duration-300";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
      style={{
        opacity: isClosing ? 0 : 1,
        transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
        style={{
          opacity: animationPhase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className={cn(btnBase, "absolute top-6 right-6 z-50 w-12 h-12 hover:bg-white/10")}
        style={{
          opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 400ms ease-out 400ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 400ms",
        }}
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
        disabled={!hasPrev || isSliding}
        className={cn(btnBase, "absolute left-4 md:left-10 z-50 w-14 h-14 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none")}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
        }}
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); navigateNext(); }}
        disabled={!hasNext || isSliding}
        className={cn(btnBase, "absolute right-4 md:right-10 z-50 w-14 h-14 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none")}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
        }}
      >
        <ChevronRight className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Main card */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0,0) scale(0.92)" : currentStyles.transform,
          transition:
            animationPhase === "initial" && !isClosing
              ? "none"
              : "transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 600ms ease-out, border-radius 700ms ease",
          transformOrigin: "center center",
        }}
      >
        <div className="relative overflow-hidden rounded-[inherit] bg-card border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
          {/* Slider */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
            <div
              className="flex w-full h-full"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding ? "transform 500ms cubic-bezier(0.16,1,0.3,1)" : "none",
              }}
            >
              {projects.map((p) => (
                <div key={p.id} className="min-w-full h-full relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className="px-8 py-6 bg-card border-t border-white/5"
            style={{
              opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
              transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 500ms ease-out 500ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 500ms",
            }}
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white tracking-tight truncate">
                  {currentProject?.title}
                </h3>
                {currentProject?.description && (
                  <p className="text-sm text-[#484D52] mt-1">{currentProject.description}</p>
                )}
                <div className="flex items-center gap-3 mt-3">
                  {/* dots */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/5">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => onNavigate(idx)}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-500",
                          idx === internalIndex
                            ? "bg-reno-sand scale-150"
                            : "bg-white/20 hover:bg-white/40"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#484D52]">
                    {internalIndex + 1} / {totalProjects}
                  </span>
                  {/* tags */}
                  {currentProject?.tags?.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#E2E2E0]/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {currentProject?.url ? (
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-reno-sand hover:bg-accent/80 rounded-xl shadow-lg shadow-reno-sand/20 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Ver Projeto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-reno-sand hover:bg-accent/80 rounded-xl shadow-lg shadow-reno-sand/20 transition-all duration-300 hover:scale-105 active:scale-95">
                  <span>Ver Projeto</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── AnimatedFolder ───────────────────────────────────────────────────────────

export interface AnimatedFolderProps {
  title: string;
  count: number;
  projects: FolderProject[];
  gradient: string;
  accentColor: string;
  className?: string;
}

export const AnimatedFolder: React.FC<AnimatedFolderProps> = ({
  title,
  count,
  projects,
  gradient,
  accentColor,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previewProjects = projects.slice(0, 5);

  const handleProjectClick = (project: FolderProject, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer",
          "bg-card border border-[#1a1a1a] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:shadow-2xl hover:border-opacity-60",
          className
        )}
        style={{
          minHeight: "320px",
          perspective: "1200px",
          transform: isHovered ? "scale(1.04) rotate(-1deg)" : "scale(1) rotate(0deg)",
          borderColor: isHovered ? `${accentColor}40` : "#1a1a1a",
          boxShadow: isHovered ? `0 25px 60px -10px ${accentColor}20` : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 80%, ${accentColor}18 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* 3D Folder */}
        <div className="relative flex items-center justify-center mb-4" style={{ height: "160px", width: "200px" }}>
          {/* Back */}
          <div
            className="absolute w-32 h-24 rounded-lg shadow-md border border-white/10"
            style={{
              background: gradient,
              filter: "brightness(0.75)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-20deg) scaleY(1.05)" : "rotateX(0deg) scaleY(1)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}
          />
          {/* Tab */}
          <div
            className="absolute w-12 h-4 rounded-t-md border-t border-x border-white/10"
            style={{
              background: gradient,
              filter: "brightness(0.65)",
              top: "calc(50% - 48px - 12px)",
              left: "calc(50% - 64px + 16px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-30deg) translateY(-3px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}
          />

          {/* Fan cards */}
          <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
            {previewProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                image={project.image}
                title={project.title}
                delay={index * 50}
                isVisible={isHovered}
                index={index}
                totalCount={previewProjects.length}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
            ))}
          </div>

          {/* Front */}
          <div
            className="absolute w-32 h-24 rounded-lg shadow-lg border border-white/20"
            style={{
              background: gradient,
              top: "calc(50% - 48px + 4px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 30,
            }}
          />
          {/* Shine */}
          <div
            className="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none"
            style={{
              top: "calc(50% - 48px + 4px)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 31,
            }}
          />
        </div>

        {/* Label */}
        <div className="text-center mt-2">
          <h3
            className="text-base font-bold text-white transition-all duration-500"
            style={{ transform: isHovered ? "translateY(2px)" : "translateY(0)" }}
          >
            {title}
          </h3>
          <p className="text-xs font-medium text-[#484D52] mt-1">
            {count} {count === 1 ? "projeto" : "projetos"}
          </p>
        </div>

        {/* Hint */}
        <p
          className="absolute bottom-4 text-xs font-semibold uppercase tracking-widest text-[#484D52]/50 transition-all duration-500"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "translateY(10px)" : "translateY(0)",
          }}
        >
          Passe o mouse
        </p>
      </div>

      <ImageLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={() => { setSelectedIndex(null); setSourceRect(null); }}
        sourceRect={sourceRect}
        onCloseComplete={() => setHiddenCardId(null)}
        onNavigate={(idx) => { setSelectedIndex(idx); setHiddenCardId(projects[idx]?.id || null); }}
      />
    </>
  );
};
