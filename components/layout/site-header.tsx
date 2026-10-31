"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import type { CategorySlug } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

export type NavigationTypeface = {
  slug: string;
  name: string;
  creator: string;
  categorySlug: CategorySlug;
};

const categories = [
  { slug: "sans-serif", name: "Sans-Serif" },
  { slug: "serif", name: "Serif" },
  { slug: "display", name: "Display" },
  { slug: "monospaced", name: "Monospaced" }
] as const;

function MainNavigation({ typefaces }: {
  typefaces: NavigationTypeface[];
}) {
  const pathname = usePathname();
  const [value, setValue] = useState<string | null>(null);
  const currentTypeface = typefaces.find((typeface) => pathname === getTypefacePath(typeface.slug));
  const activeSection = currentTypeface?.categorySlug ?? pathname.split("/")[1];
  const navigate = () => {
    setValue(null);
  };

  return (
    <NavigationMenu aria-label="Main navigation" value={value} onValueChange={setValue}>
      <NavigationMenuList className="main-nav">
        {categories.map((category) => (
          <NavigationMenuItem key={category.slug} value={category.slug}>
            <NavigationMenuTrigger
              nativeButton={false}
              render={<Link href={`/${category.slug}/`} />}
              role="link"
              onClick={(event) => {
                event.preventBaseUIHandler();
                navigate();
              }}
              className={clsx(activeSection === category.slug && "text-(--red)")}
            >
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className={clsx(category.slug === "sans-serif" && "min-[721px]:[--navigation-menu-width:43rem]")}>
              <ul className={clsx("m-0 grid list-none grid-cols-1 gap-1 p-0", category.slug === "sans-serif" ? "min-[721px]:grid-cols-3" : "min-[721px]:grid-cols-2")}>
                {typefaces.filter((typeface) => typeface.categorySlug === category.slug).map((typeface) => (
                  <li key={typeface.slug}>
                    <NavigationMenuLink active={pathname === getTypefacePath(typeface.slug)} className="flex flex-col gap-0.5 px-2.5 py-2 hover:bg-neutral-100 data-active:bg-neutral-100 dark:hover:bg-neutral-800 dark:data-active:bg-neutral-800" render={<Link href={getTypefacePath(typeface.slug)} />} onClick={navigate}>
                      <span className="text-lg leading-6 font-normal">{typeface.name}</span>
                      <span className="text-sm leading-5 text-neutral-500 dark:text-neutral-400">{typeface.creator}</span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNavigation({ typefaces, onNavigate }: {
  typefaces: NavigationTypeface[];
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const currentTypeface = typefaces.find((typeface) => pathname === getTypefacePath(typeface.slug));
  const activeSection = currentTypeface?.categorySlug ?? pathname.split("/")[1];

  return (
    <nav aria-label="Mobile navigation" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <Accordion defaultValue={categories.some(({ slug }) => slug === activeSection) ? [activeSection] : []}>
        {categories.map((category) => (
          <AccordionItem key={category.slug} value={category.slug}>
            <AccordionTrigger className={clsx(activeSection === category.slug && "text-(--red)")}>
              {category.name}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="m-0 mr-2 -ml-3 grid list-none gap-1 p-0">
                <li>
                  <Link href={`/${category.slug}/`} onClick={onNavigate} className="block rounded-md px-3 py-3 text-base font-semibold hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
                    All {category.name} fonts
                  </Link>
                </li>
                {typefaces.filter((typeface) => typeface.categorySlug === category.slug).map((typeface) => (
                  <li key={typeface.slug}>
                    <Link href={getTypefacePath(typeface.slug)} aria-current={pathname === getTypefacePath(typeface.slug) ? "page" : undefined} onClick={onNavigate} className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 hover:bg-neutral-100 aria-[current=page]:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 dark:aria-[current=page]:bg-neutral-900">
                      <span className="text-lg leading-6">{typeface.name}</span>
                      <span className="text-sm leading-5 text-neutral-500 dark:text-neutral-400">{typeface.creator}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
}

function MenuIcon({ close = false }: { close?: boolean }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      {close ? <path d="m4 4 12 12M16 4 4 16" /> : <path d="M2 4h16M2 10h16M2 16h16" />}
    </svg>
  );
}

export function SiteHeader({ typefaces }: { typefaces: NavigationTypeface[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1105px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  if (pathname.startsWith("/v1")) return null;

  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 flex h-16 items-center bg-white/95 px-4 backdrop-blur-[2px] dark:bg-neutral-950/95 min-[1105px]:px-6">
      <Link href="/" className="mr-auto shrink-0 font-(family-name:--alegreya-sans) text-xl leading-none font-black italic uppercase hover:text-(--red) focus-visible:outline-2 focus-visible:outline-offset-4 max-[360px]:text-base">
        Beautiful Web Type
      </Link>
      <div className="hidden min-[1105px]:absolute min-[1105px]:left-1/2 min-[1105px]:block min-[1105px]:-translate-x-1/2">
        <MainNavigation typefaces={typefaces} />
      </div>
      <ThemeSwitcher />
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger className="menu-link -mr-3 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-inherit min-[1105px]:hidden" aria-label="Toggle navigation menu">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="menu-overlay">
          <div className="flex h-16 shrink-0 items-center justify-end px-6">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetClose className="-mr-5 flex size-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-inherit hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900" aria-label="Close navigation menu">
              <MenuIcon close />
            </SheetClose>
          </div>
          <MobileNavigation typefaces={typefaces} onNavigate={() => setMenuOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  );
}
