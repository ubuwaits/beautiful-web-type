"use client";

import { useEffect, useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(root.classList.contains("dark") ? "dark" : "light");
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    sync();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const restore = () => {
      let saved;
      try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch {}
      root.classList.toggle("dark", saved === "dark" || (saved !== "light" && media.matches));
    };
    const storage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) restore();
    };
    window.addEventListener("storage", storage);
    media.addEventListener("change", restore);
    return () => {
      observer.disconnect();
      window.removeEventListener("storage", storage);
      media.removeEventListener("change", restore);
    };
  }, []);

  return (
    <Tabs className="ml-2 shrink-0 font-(family-name:--ui-face)" value={theme} onValueChange={(value) => {
      if (value !== "light" && value !== "dark") return;
      document.documentElement.classList.toggle("dark", value === "dark");
      setTheme(value);
      try { localStorage.setItem(THEME_STORAGE_KEY, value); } catch {}
    }}>
      <TabsList aria-label="Color theme" activateOnFocus>
        <TabsTrigger value="light" aria-label="Light theme" title="Light theme">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </svg>
          <span className="hidden min-[1280px]:inline">Light</span>
        </TabsTrigger>
        <TabsTrigger value="dark" aria-label="Dark theme" title="Dark theme">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />
          </svg>
          <span className="hidden min-[1280px]:inline">Dark</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
