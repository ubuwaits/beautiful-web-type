"use client";

// Adapted from shadcn/ui's Base UI tabs, using the site's Neutral palette.
import { Tabs as Primitive } from "@base-ui/react/tabs";
import clsx from "clsx";

export function Tabs({ className, ...props }: Primitive.Root.Props) {
  return <Primitive.Root data-slot="tabs" className={clsx("flex flex-col gap-2", className)} {...props} />;
}

export function TabsList({ className, ...props }: Primitive.List.Props) {
  return <Primitive.List data-slot="tabs-list" className={clsx("inline-flex w-fit items-center gap-0.5 rounded-full bg-neutral-100 p-1 dark:bg-neutral-900", className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: Primitive.Tab.Props) {
  return <Primitive.Tab data-slot="tabs-trigger" className={clsx("inline-flex h-7 cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 bg-transparent px-2 text-sm leading-5 font-semibold text-neutral-500 hover:text-neutral-950 data-active:bg-neutral-900 data-active:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-400 dark:hover:text-white dark:data-active:bg-neutral-100 dark:data-active:text-neutral-950 min-[1280px]:px-3", className)} {...props} />;
}

export function TabsContent({ className, ...props }: Primitive.Panel.Props) {
  return <Primitive.Panel data-slot="tabs-content" className={clsx("outline-none", className)} {...props} />;
}
