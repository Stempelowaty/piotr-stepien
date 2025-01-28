"use client";
import React, { useEffect, useState } from "react";

export default function BgGradient() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-full fixed z-0 scale-110"
      style={{
        transform: `translateY(${scrollY * -0.05}px)`,
        background: `
          linear-gradient(135deg, rgba(255, 0, 0, 0.04), transparent 50%), 
          linear-gradient(to bottom, rgba(255, 255, 255, 0.07), transparent 70%), 
          linear-gradient(to top, rgba(2, 6, 24, 1), transparent 70%), 
          repeating-linear-gradient(0deg, transparent, transparent 63px, rgba(255, 255, 255, 0.03) 64px),
          repeating-linear-gradient(90deg, transparent, transparent 63px, rgba(255, 255, 255, 0.03) 64px), #020618
        `,
      }}
    ></div>
  );
}
