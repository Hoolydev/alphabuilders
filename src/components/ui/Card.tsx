interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-transparent border border-border rounded-card p-[30px] transition-all duration-450 ease-primary will-change-transform overflow-clip ${
        hover
          ? "hover:-translate-y-1 hover:border-text-secondary/30"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
