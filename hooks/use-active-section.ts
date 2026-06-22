"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which in-page section is currently in view using IntersectionObserver,
 * so the nav can highlight the active link. Returns the active section id.
 */
export function useActiveSection(ids: string[]): string | null {
  const key = ids.join(",");
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const sectionIds = key.split(",").filter(Boolean);
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // Bias the "active" band toward the upper-middle of the viewport.
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [key]);

  return active;
}
