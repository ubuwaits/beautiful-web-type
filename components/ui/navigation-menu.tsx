"use client";

// Adapted from shadcn/ui's Base UI navigation menu, using the site's palette.
import { NavigationMenu as Primitive } from "@base-ui/react/navigation-menu";
import clsx from "clsx";

export function NavigationMenu({ className, children, ...props }: Primitive.Root.Props) {
  return (
    <Primitive.Root data-slot="navigation-menu" className={clsx("relative font-(family-name:--ui-face)", className)} {...props}>
      {children}
      <Primitive.Portal>
        <Primitive.Positioner
          sideOffset={8}
          collisionPadding={16}
          className="isolate z-80 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)"
        >
          <Primitive.Popup className="relative h-(--popup-height) w-(--popup-width) max-w-(--available-width) origin-(--transform-origin) rounded-lg bg-white text-neutral-950 shadow-xl ring-1 ring-black/10 dark:bg-neutral-900 dark:text-neutral-100 dark:ring-white/10 transition-[opacity,transform] duration-150 outline-none data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <Primitive.Viewport className="relative size-full overflow-hidden" />
          </Primitive.Popup>
        </Primitive.Positioner>
      </Primitive.Portal>
    </Primitive.Root>
  );
}

export function NavigationMenuList({ className, ...props }: Primitive.List.Props) {
  return <Primitive.List data-slot="navigation-menu-list" className={clsx("flex list-none items-center gap-1 p-0", className)} {...props} />;
}

export function NavigationMenuItem(props: Primitive.Item.Props) {
  return <Primitive.Item data-slot="navigation-menu-item" {...props} />;
}

export const navigationMenuTriggerStyle = "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md border-0 bg-transparent px-4 py-3 text-base leading-5 font-bold uppercase hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:data-popup-open:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-neutral-100 data-popup-open:bg-neutral-100";

export function NavigationMenuTrigger({ className, children, ...props }: Primitive.Trigger.Props) {
  return (
    <Primitive.Trigger data-slot="navigation-menu-trigger" className={clsx("group", navigationMenuTriggerStyle, className)} {...props}>
      {children}
      <Primitive.Icon>
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-data-popup-open:rotate-180 motion-reduce:transition-none">
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </Primitive.Icon>
    </Primitive.Trigger>
  );
}

export function NavigationMenuContent({ className, ...props }: Primitive.Content.Props) {
  return <Primitive.Content data-slot="navigation-menu-content" className={clsx("max-h-[min(36rem,calc(100dvh-8rem),calc(var(--available-height)-1rem))] w-[min(var(--navigation-menu-width,29rem),calc(100vw-2rem))] overflow-y-auto p-2 font-(family-name:--ui-face)", className)} {...props} />;
}

export function NavigationMenuLink({ className, ...props }: Primitive.Link.Props) {
  return <Primitive.Link data-slot="navigation-menu-link" className={clsx("rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-neutral-100", className)} {...props} />;
}
