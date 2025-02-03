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
      className="w-full h-full fixed z-0"
      style={{
        transform: `translateY(${scrollY * -0.2}px)`,
        background: `
          linear-gradient(135deg, rgba(0, 225, 255, 0.08), transparent 25%), 
          linear-gradient(to bottom, rgba(255, 255, 255, 0.07), transparent 70%), 
          linear-gradient(to top, rgba(2, 6, 24, 1), transparent 70%), 
          repeating-linear-gradient(0deg, transparent, transparent 63px, rgba(255, 255, 255, 0.05) 64px),
          repeating-linear-gradient(90deg, transparent, transparent 63px, rgba(255, 255, 255, 0.05) 64px),
          radial-gradient(circle at right, rgba(244, 63, 94, 0.3), transparent 50%),
          #020618
        `,
      }}
    ></div>
  );
}
