"use client";

// Adapted from shadcn/ui's Base UI button, using the site's Neutral palette.
import { Button as Primitive } from "@base-ui/react/button";
import clsx from "clsx";

export function Button({ className, ...props }: Primitive.Props) {
  return <Primitive data-slot="button" className={clsx("inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 disabled:opacity-50 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800", className)} {...props} />;
}
