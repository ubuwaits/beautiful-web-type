"use client";

// Adapted from shadcn/ui's Base UI accordion, using the site's Neutral palette.
import { Accordion as Primitive } from "@base-ui/react/accordion";
import clsx from "clsx";

export function Accordion({ className, ...props }: Primitive.Root.Props) {
  return <Primitive.Root data-slot="accordion" className={clsx("flex w-full flex-col", className)} {...props} />;
}

export function AccordionItem({ className, ...props }: Primitive.Item.Props) {
  return <Primitive.Item data-slot="accordion-item" className={clsx("-mr-5 border-b border-neutral-200/60 [border-bottom-style:solid] last:border-b-0 dark:border-neutral-800/80", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: Primitive.Trigger.Props) {
  return (
    <Primitive.Header className="m-0 flex">
      <Primitive.Trigger data-slot="accordion-trigger" className={clsx("group flex w-full cursor-pointer items-center justify-between gap-4 rounded-md border-0 bg-transparent px-0 py-3 text-left text-lg font-bold uppercase text-inherit hover:text-(--red) focus-visible:outline-2 focus-visible:outline-offset-2", className)} {...props}>
        {children}
        <span className="flex size-11 shrink-0 items-center justify-center">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-aria-expanded:rotate-180">
            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </Primitive.Trigger>
    </Primitive.Header>
  );
}

export function AccordionContent({ className, ...props }: Primitive.Panel.Props) {
  return <Primitive.Panel data-slot="accordion-content" className={clsx("pb-4", className)} {...props} />;
}
