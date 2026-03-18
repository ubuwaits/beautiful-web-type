"use client";

import { useEffect } from "react";

export function ComparisonSync() {
  useEffect(() => {
    const comparisonRoot = document.getElementById("comparisons");

    if (!comparisonRoot) {
      return;
    }

    const comparisonNodes = Array.from(comparisonRoot.getElementsByTagName("h1"));
    const handleInput = (event: Event) => {
      const target = event.currentTarget;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      for (const node of comparisonNodes) {
        if (node !== target) {
          node.innerText = target.innerText;
        }
      }
    };

    comparisonNodes.forEach((node) => {
      node.addEventListener("input", handleInput, false);
    });

    return () => {
      comparisonNodes.forEach((node) => {
        node.removeEventListener("input", handleInput, false);
      });
    };
  }, []);

  return null;
}
