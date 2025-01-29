"use client";
import { useEffect, useRef } from "react";

interface ShowOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const ShowOnScroll: React.FC<ShowOnScrollProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-opacity duration-1000 delay-1000 ${className}`}
    >
      {children}
    </div>
  );
};

export default ShowOnScroll;
