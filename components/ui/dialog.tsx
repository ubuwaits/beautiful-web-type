"use client";

// Adapted from shadcn/ui's Base UI dialog, using the site's palette.
import { Dialog as Primitive } from "@base-ui/react/dialog";
import clsx from "clsx";

export const Dialog = Primitive.Root;
export const DialogTrigger = Primitive.Trigger;
export const DialogClose = Primitive.Close;
export const DialogTitle = Primitive.Title;
export const DialogDescription = Primitive.Description;

export function DialogContent({ className, ...props }: Primitive.Popup.Props) {
  return (
    <Primitive.Portal>
      <Primitive.Backdrop className="fixed inset-0 z-90 bg-black/30 transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
      <Primitive.Popup
        data-slot="dialog-content"
        className={clsx("fixed top-1/2 left-1/2 z-90 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white font-(family-name:--ui-face) text-neutral-950 shadow-xl ring-1 ring-black/10 outline-none transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none dark:bg-neutral-900 dark:text-neutral-100 dark:ring-white/10", className)}
        {...props}
      />
    </Primitive.Portal>
  );
}
