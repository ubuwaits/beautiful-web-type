"use client";

// Adapted from shadcn/ui's Base UI button, using the site's Neutral palette.
import { Button as Primitive } from "@base-ui/react/button";
import clsx from "clsx";

export function Button({ className, ...props }: Primitive.Props) {
  return <Primitive data-slot="button" className={clsx("inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-500 hover:bg-neutral-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 disabled:opacity-50 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100", className)} {...props} />;
}
