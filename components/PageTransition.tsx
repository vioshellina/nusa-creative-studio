
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    const animation = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(false);
      });
    });

    return () => cancelAnimationFrame(animation);
  }, [pathname]);

  return (
    <div
      className={`page-transition ${visible ? "page-transition-visible" : ""}`}
      aria-hidden="true"
    >
      <div className="transition-logo">
        NUSA<span>.</span>
      </div>
      <div className="transition-line">
        <div />
      </div>
    </div>
  );
}
