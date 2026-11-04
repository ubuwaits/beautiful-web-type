"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontSearch } from "@/components/layout/font-search";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";

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
              className={clsx(activeSection === category.slug && "text-neutral-800 dark:text-neutral-300")}
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

export function SiteHeader({ typefaces }: { typefaces: NavigationTypeface[] }) {
  const pathname = usePathname();
  if (pathname.startsWith("/v1")) return null;

  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 flex h-16 items-center bg-white/95 px-4 backdrop-blur-[2px] dark:bg-neutral-950/95 min-[1105px]:px-6">
      <Link href="/" className="mr-auto shrink-0 font-(family-name:--alegreya-sans) text-xl leading-none font-black italic uppercase hover:text-neutral-500 dark:hover:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-4 max-[360px]:text-sm">
        Beautiful Web Type
      </Link>
      <div className="flex items-center gap-1 min-[1105px]:absolute min-[1105px]:left-1/2 min-[1105px]:-translate-x-1/2">
        <div className="hidden min-[1105px]:block">
          <MainNavigation typefaces={typefaces} />
        </div>
        <FontSearch typefaces={typefaces} categories={categories} />
      </div>
      <ThemeSwitcher />
    </header>
  );
}
