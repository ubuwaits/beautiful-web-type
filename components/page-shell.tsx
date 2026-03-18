import clsx from "clsx";
import type { ReactNode } from "react";

type PageShellProps = {
  bodyClass?: string;
  children: ReactNode;
};

export function PageShell({ bodyClass, children }: PageShellProps) {
  return (
    <main className={clsx(bodyClass, "min-h-[calc(100vh-4rem)]")}>
      <section className="container">{children}</section>
    </main>
  );
}
