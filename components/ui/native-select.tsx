import type { ComponentProps } from "react";
import clsx from "clsx";

// Adapted from shadcn/ui's native select, using the site's Neutral palette.
export function NativeSelect({ className, borderless = false, ...props }: ComponentProps<"select"> & { borderless?: boolean }) {
  return (
    <div data-slot="native-select-wrapper" className={clsx("relative w-full", className)}>
      <select data-slot="native-select" className={clsx("w-full min-w-0 appearance-none pr-8 text-sm text-inherit outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600", borderless ? "h-10 rounded-md border-0 bg-neutral-100 py-1 pl-3 font-(family-name:--ui-face) text-xs dark:bg-neutral-900" : "h-10 rounded-md border border-neutral-200 [border-style:solid] bg-transparent py-2 pl-3 dark:border-neutral-800")} {...props} />
      <svg className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-neutral-500" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" /></svg>
    </div>
  );
}

export function NativeSelectOption(props: ComponentProps<"option">) {
  return <option data-slot="native-select-option" className="bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100" {...props} />;
}
