"use client";

// Adapted from shadcn/ui's Base UI sheet, using the site's Neutral palette.
import { Dialog as Primitive } from "@base-ui/react/dialog";
import clsx from "clsx";

export const Sheet = Primitive.Root;
export const SheetTrigger = Primitive.Trigger;
export const SheetClose = Primitive.Close;

export function SheetContent({ className, ...props }: Primitive.Popup.Props) {
  return (
    <Primitive.Portal>
      <Primitive.Backdrop className="fixed inset-0 z-50 bg-black/30 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
      <Primitive.Popup data-slot="sheet-content" className={clsx("fixed inset-y-0 right-0 z-50 flex h-dvh w-full flex-col bg-white font-(family-name:--ui-face) text-neutral-950 shadow-xl outline-none transition-transform duration-200 data-starting-style:translate-x-full data-ending-style:translate-x-full motion-reduce:transition-none dark:bg-neutral-950 dark:text-neutral-100 min-[721px]:max-w-[28rem]", className)} {...props} />
    </Primitive.Portal>
  );
}

export function SheetTitle({ className, ...props }: Primitive.Title.Props) {
  return <Primitive.Title data-slot="sheet-title" className={clsx("m-0 text-base font-bold uppercase", className)} {...props} />;
}
