"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { CategorySlug } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";
import type { NavigationTypeface } from "./site-header";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

function normalize(value: string) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function filterFont(value: string, search: string, keywords?: string[]) {
  const text = normalize([value, ...(keywords ?? [])].join(" "));
  return normalize(search).split(/\s+/).every((word) => text.includes(word)) ? 1 : 0;
}

export function FontSearch({ typefaces, categories }: {
  typefaces: NavigationTypeface[];
  categories: ReadonlyArray<{ slug: CategorySlug; name: string }>;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function changeOpen(next: boolean) {
    setOpen(next);
    if (!next) {
      setQuery("");
    }
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
      <DialogTrigger ref={triggerRef} aria-label="Search fonts" title="Search fonts (⌘K / Ctrl+K)" className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit outline-none hover:bg-neutral-100 focus-visible:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus-visible:bg-neutral-800">
        <SearchIcon />
      </DialogTrigger>
      <DialogContent initialFocus={inputRef} finalFocus={triggerRef}>
        <DialogTitle className="sr-only">Search fonts</DialogTitle>
        <DialogDescription className="sr-only">Search by font name, designer, or category. Use the arrow keys to choose a result and Enter to open it.</DialogDescription>
        <Command label="Fonts" filter={filterFont} loop className="max-h-[calc(100dvh-2rem)]">
          <div className="flex shrink-0 items-center gap-3 border-b border-neutral-200/60 px-4 dark:border-neutral-800/80">
            <SearchIcon className="shrink-0 text-neutral-500 dark:text-neutral-400" />
            <CommandInput ref={inputRef} value={query} onValueChange={setQuery} placeholder="Search fonts…" aria-label="Search fonts" autoComplete="off" autoCorrect="off" spellCheck={false} />
            <DialogClose aria-label="Close search" className="-mr-1 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-neutral-500 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-neutral-400 dark:hover:bg-neutral-800">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 5 10 10M15 5 5 15" /></svg>
            </DialogClose>
          </div>
          <CommandList aria-label="Font results">
            <CommandEmpty>No fonts found.</CommandEmpty>
            {typefaces.map((font) => (
              <CommandItem key={font.slug} value={font.name} keywords={[font.creator, font.slug, font.categorySlug]} onSelect={() => {
                changeOpen(false);
                router.push(getTypefacePath(font.slug));
              }}>
                <span className="min-w-0">
                  <span className="block text-lg leading-6 font-normal">{font.name}</span>
                  <span className="block truncate text-sm leading-5 text-neutral-500 dark:text-neutral-400">{font.creator}</span>
                </span>
                <span className="shrink-0 text-xs text-neutral-500 dark:text-neutral-400">{categories.find(({ slug }) => slug === font.categorySlug)?.name}</span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
