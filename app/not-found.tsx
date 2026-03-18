import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <p
        style={{
          font: "700 var(--ms7)/1.2 var(--poppins)",
          margin: "0 auto",
          maxWidth: "980px",
          padding: "1em 0",
          textAlign: "center"
        }}
      >
        The page you were trying to reach doesn’t exist.
      </p>
    </PageShell>
  );
}
