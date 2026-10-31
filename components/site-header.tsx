"use client";

import { Dialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

function MainNavigation({ typefaces, mobile = false, onNavigate }: {
  typefaces: NavigationTypeface[];
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [value, setValue] = useState<string | null>(null);
  const currentTypeface = typefaces.find((typeface) => pathname === getTypefacePath(typeface.slug));
  const activeSection = currentTypeface?.categorySlug ?? pathname.split("/")[1];
  const navigate = () => {
    setValue(null);
    onNavigate?.();
  };

  return (
    <NavigationMenu aria-label={mobile ? "Mobile navigation" : "Main navigation"} orientation={mobile ? "vertical" : "horizontal"} value={value} onValueChange={setValue}>
      <NavigationMenuList className={clsx("main-nav", mobile && "flex-col gap-3")}>
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
                    <NavigationMenuLink active={pathname === getTypefacePath(typeface.slug)} className="flex flex-col gap-0.5 px-2.5 py-2 hover:bg-neutral-100 data-active:bg-neutral-100" render={<Link href={getTypefacePath(typeface.slug)} />} onClick={navigate}>
                      <span className="text-lg leading-6 font-normal">{typeface.name}</span>
                      <span className="text-sm leading-5 text-neutral-500">{typeface.creator}</span>
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
  if (pathname.startsWith("/v1")) return null;

  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 flex h-16 items-center bg-white/95 px-4 backdrop-blur-[2px] min-[1105px]:px-6">
      <Link href="/" className="mr-auto shrink-0 font-(family-name:--alegreya-sans) text-(length:--ms1) leading-none font-black italic uppercase hover:text-(--red) focus-visible:outline-2 focus-visible:outline-offset-4">
        Beautiful Web Type
      </Link>
      <div className="hidden min-[1105px]:absolute min-[1105px]:left-1/2 min-[1105px]:block min-[1105px]:-translate-x-1/2">
        <MainNavigation typefaces={typefaces} />
      </div>
      <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <Dialog.Trigger className="menu-link flex size-12 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent min-[1105px]:hidden" aria-label="Toggle navigation menu">
          <MenuIcon />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Popup className="menu-overlay open fixed inset-0 z-50 flex h-dvh w-screen items-center justify-center bg-white p-4 outline-none">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <Dialog.Close className="absolute top-2 right-4 flex size-12 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent" aria-label="Close navigation menu">
              <MenuIcon close />
            </Dialog.Close>
            <MainNavigation typefaces={typefaces} mobile onNavigate={() => setMenuOpen(false)} />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
