import type { ComponentProps } from "react";
import clsx from "clsx";

// Adapted from shadcn/ui's textarea, using the site's Neutral palette.
export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={clsx("block field-sizing-content min-h-16 w-full rounded-lg border border-neutral-200 border-solid bg-transparent px-3 py-2 text-base text-inherit outline-none placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:focus-visible:ring-neutral-600", className)} {...props} />;
}
