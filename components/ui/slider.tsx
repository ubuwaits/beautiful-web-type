"use client";

// Adapted from shadcn/ui's Base UI slider, using the site's Neutral palette.
import { Slider as Primitive } from "@base-ui/react/slider";
import clsx from "clsx";

export function Slider({ className, label, value, defaultValue, ...props }: Primitive.Root.Props<number[]> & { label: string }) {
  const values = value ?? defaultValue ?? [0];
  return (
    <Primitive.Root data-slot="slider" className={clsx("w-full", className)} value={value} defaultValue={defaultValue} thumbAlignment="edge" {...props}>
      <Primitive.Control className="relative flex h-4 w-full touch-none items-center select-none data-disabled:opacity-50">
        <Primitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
          <Primitive.Indicator className="h-full bg-neutral-200 dark:bg-neutral-800" />
        </Primitive.Track>
        {values.map((_, index) => (
          <Primitive.Thumb key={index} index={index} getAriaLabel={() => label} className="block size-4 shrink-0 rounded-full border-0 bg-neutral-900 outline-none after:absolute after:-inset-2 hover:ring-4 hover:ring-neutral-200 focus-within:ring-4 focus-within:ring-neutral-300 dark:bg-neutral-100 dark:hover:ring-neutral-800 dark:focus-within:ring-neutral-700" />
        ))}
      </Primitive.Control>
    </Primitive.Root>
  );
}
