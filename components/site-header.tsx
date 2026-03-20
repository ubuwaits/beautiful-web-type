"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function NavItems({
  activeSection,
  onNavigate
}: {
  activeSection: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      <li className="nav-home">
        <h1>
          <Link href="/" onClick={onNavigate}>
            Beautiful Web Type
          </Link>
        </h1>
      </li>
      <li className="nav-serif">
        <Link
          className={activeSection === "serif" ? "active" : undefined}
          href="/serif/"
          onClick={onNavigate}
        >
          Serif
        </Link>
      </li>
      <li className="nav-sans-serif">
        <Link
          className={activeSection === "sans-serif" ? "active" : undefined}
          href="/sans-serif/"
          onClick={onNavigate}
        >
          Sans-Serif
        </Link>
      </li>
      <li className="nav-display">
        <Link
          className={activeSection === "display" ? "active" : undefined}
          href="/display/"
          onClick={onNavigate}
        >
          Display
        </Link>
      </li>
      <li className="nav-monospaced">
        <Link
          className={activeSection === "monospaced" ? "active" : undefined}
          href="/monospaced/"
          onClick={onNavigate}
        >
          Monospaced
        </Link>
      </li>
      <li className="nav-pairings">
        <Link
          className={activeSection === "pairings" ? "active" : undefined}
          href="/pairings/"
          onClick={onNavigate}
        >
          Pairings
        </Link>
      </li>
      <li className="nav-support"> </li>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname.startsWith("/v1")) {
    return null;
  }

  const activeSection = useMemo(() => {
    const [firstSegment = ""] = pathname.split("/").filter(Boolean);

    return ["serif", "sans-serif", "display", "monospaced", "pairings"].includes(
      firstSegment
    )
      ? firstSegment
      : "";
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <ol className="main-nav">
          <NavItems activeSection={activeSection} />
        </ol>
      </header>

      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <span className="menu-circle" />
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="menu-link"
          type="button"
          onClick={() => setMenuOpen((currentValue) => !currentValue)}
        >
          <span className="menu-icon">
            <span className="menu-line menu-line-1" />
            <span className="menu-line menu-line-2" />
            <span className="menu-line menu-line-3" />
          </span>
        </button>
      </div>

      <div className={menuOpen ? "menu-overlay open" : "menu-overlay"}>
        <ol className="main-nav">
          <NavItems activeSection={activeSection} onNavigate={() => setMenuOpen(false)} />
        </ol>
      </div>
    </>
  );
}
