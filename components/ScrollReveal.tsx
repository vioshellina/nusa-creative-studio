
"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "main section, main footer"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    sections.forEach((section) => {
      section.classList.add("reveal-on-scroll");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
