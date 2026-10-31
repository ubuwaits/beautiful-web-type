import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <p className="mx-auto max-w-245 py-[1em] text-center font-(family-name:--poppins) text-6xl leading-[1.2] font-bold">
        The page you were trying to reach doesn’t exist.
      </p>
    </PageShell>
  );
}
