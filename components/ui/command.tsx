"use client";

// Adapted from shadcn/ui's Command component, using the site's palette.
import type { ComponentProps } from "react";
import { Command as Primitive } from "cmdk";
import clsx from "clsx";

export function Command({ className, ...props }: ComponentProps<typeof Primitive>) {
  return <Primitive data-slot="command" className={clsx("flex min-h-0 flex-col font-(family-name:--ui-face)", className)} {...props} />;
}

export function CommandInput({ className, ...props }: ComponentProps<typeof Primitive.Input>) {
  return <Primitive.Input data-slot="command-input" className={clsx("h-14 min-w-0 flex-1 border-0 bg-transparent px-0 py-0 text-lg font-normal text-inherit outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400", className)} {...props} />;
}

export function CommandList({ className, ...props }: ComponentProps<typeof Primitive.List>) {
  return <Primitive.List data-slot="command-list" className={clsx("h-80 max-h-[45dvh] min-h-0 overflow-y-auto overscroll-contain scroll-py-2 p-2", className)} {...props} />;
}

export function CommandEmpty({ className, ...props }: ComponentProps<typeof Primitive.Empty>) {
  return <Primitive.Empty className={clsx("px-3 py-10 text-center text-base text-neutral-500 dark:text-neutral-400", className)} {...props} />;
}

export function CommandItem({ className, ...props }: ComponentProps<typeof Primitive.Item>) {
  return <Primitive.Item data-slot="command-item" className={clsx("flex cursor-pointer items-center justify-between gap-4 rounded-md px-2.5 py-2 outline-none data-[selected=true]:bg-neutral-100 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 dark:data-[selected=true]:bg-neutral-800", className)} {...props} />;
}
