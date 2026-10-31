"use client";

// Adapted from shadcn/ui's Base UI toggle group, using the site's Neutral palette.
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup as Primitive } from "@base-ui/react/toggle-group";
import clsx from "clsx";

export function ToggleGroup({ className, ...props }: Primitive.Props) {
  return <Primitive data-slot="toggle-group" className={clsx("flex w-max shrink-0 items-center rounded-md bg-neutral-100 p-1 dark:bg-neutral-900", className)} {...props} />;
}

export function ToggleGroupItem({ className, ...props }: Toggle.Props) {
  return <Toggle data-slot="toggle-group-item" className={clsx("inline-flex h-8 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent px-0 py-0 font-(family-name:--ui-face) text-xs font-normal text-neutral-600 uppercase hover:text-neutral-950 data-pressed:bg-neutral-900 data-pressed:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-pressed:bg-neutral-100 dark:data-pressed:text-neutral-950", className)} {...props} />;
}
