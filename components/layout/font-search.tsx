"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import type { CategorySlug } from "@/lib/content";
import type { NavigationTypeface } from "./site-header";

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export type FontSearchProps = {
  typefaces: NavigationTypeface[];
  categories: ReadonlyArray<{ slug: CategorySlug; name: string }>;
};

export function FontSearch(props: FontSearchProps) {
  const [open, setOpen] = useState(false);
  const [Popup, setPopup] = useState<typeof import("./font-search-dialog").FontSearchDialog>();
  const [loading, setLoading] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function changeOpen(next: boolean) {
    if (!next || Popup) {
      setOpen(next);
      return;
    }
    if (loading) return;
    setLoading(true);
    setLoadFailed(false);
    void import("./font-search-dialog").then(({ FontSearchDialog }) => {
      setPopup(() => FontSearchDialog);
      setOpen(true);
    }).catch(() => setLoadFailed(true)).finally(() => setLoading(false));
  }

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey) && !event.altKey && !event.isComposing) {
        event.preventDefault();
        // Use the trigger so keyboard shortcuts share the same focus restoration.
        triggerRef.current?.click();
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, []);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger ref={triggerRef} aria-busy={loading || undefined} aria-label="Search fonts" title="Search fonts (⌘K / Ctrl+K)" className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit outline-none hover:bg-neutral-100 focus-visible:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus-visible:bg-neutral-800">
        <SearchIcon />
      </DialogTrigger>
      {Popup && <Popup {...props} triggerRef={triggerRef} close={() => setOpen(false)} />}
      <span className="sr-only" role="status">
        {loading ? "Loading font search…" : loadFailed ? "Font search could not load. Try opening it again." : ""}
      </span>
    </Dialog>
  );
}
