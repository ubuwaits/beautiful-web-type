"use client";

import type { RefObject } from "react";
import { useRouter } from "next/navigation";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { getTypefacePath } from "@/lib/routes";
import { SearchIcon, type FontSearchProps } from "./font-search";

function normalize(value: string) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function filterFont(value: string, search: string, keywords?: string[]) {
  const text = normalize([value, ...(keywords ?? [])].join(" "));
  return normalize(search).split(/\s+/).every((word) => text.includes(word)) ? 1 : 0;
}

export function FontSearchDialog({ typefaces, categories, triggerRef, close }: FontSearchProps & {
  triggerRef: RefObject<HTMLButtonElement | null>;
  close: () => void;
}) {
  const router = useRouter();
  return (
    <DialogContent finalFocus={triggerRef}>
      <DialogTitle className="sr-only">Search fonts</DialogTitle>
      <DialogDescription className="sr-only">Search by font name, designer, or category. Use the arrow keys to choose a result and Enter to open it.</DialogDescription>
      <Command tabIndex={undefined} label="Fonts" filter={filterFont} loop className="max-h-[calc(100dvh-2rem)]">
        <div className="flex shrink-0 items-center gap-3 border-b border-neutral-200/60 px-4 dark:border-neutral-800/80">
          <SearchIcon className="shrink-0 text-neutral-500 dark:text-neutral-400" />
          <CommandInput placeholder="Search fonts…" aria-label="Search fonts" autoComplete="off" autoCorrect="off" spellCheck={false} />
          <DialogClose aria-label="Close search" className="-mr-1 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-neutral-500 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-neutral-400 dark:hover:bg-neutral-800">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 5 10 10M15 5 5 15" /></svg>
          </DialogClose>
        </div>
        <CommandList aria-label="Font results" onPointerDown={(event) => {
          if (event.pointerType === "touch") {
            event.currentTarget.focus({ preventScroll: true });
          }
        }}>
          <CommandEmpty>No fonts found.</CommandEmpty>
          {typefaces.map((font) => (
            <CommandItem key={font.slug} value={font.name} keywords={[font.creator, font.slug, font.categorySlug]} onSelect={() => {
              close();
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
  );
}
