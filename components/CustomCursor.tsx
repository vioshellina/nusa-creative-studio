
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!isFinePointer) return;

    const handleMouseMove = (event: MouseEvent) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;

      if (!cursor) return;

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${visible ? "custom-cursor-visible" : ""}`}
      aria-hidden="true"
    />
  );
}
