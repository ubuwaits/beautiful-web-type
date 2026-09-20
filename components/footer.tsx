import Link from "next/link";

import { getTypefacesByCategory } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

export function SiteFooter() {
  const serifTypefaces = getTypefacesByCategory("serif");
  const sansSerifTypefaces = getTypefacesByCategory("sans-serif");
  const displayTypefaces = getTypefacesByCategory("display");
  const monospacedTypefaces = getTypefacesByCategory("monospaced");

  return (
    <footer className="grid">
      <div className="footer-type-list gr1 gc2">
        <h3>
          <Link href="/serif/">Serif Typefaces</Link>
        </h3>
        <ol>
          {serifTypefaces.map((typeface) => (
            <li key={typeface.slug}>
              <Link href={getTypefacePath(typeface.slug)}>{typeface.name}</Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="footer-type-list gr1 gc2">
        <h3>
          <Link href="/sans-serif/">Sans-Serif Typefaces</Link>
        </h3>
        <ol>
          {sansSerifTypefaces.map((typeface) => (
            <li key={typeface.slug}>
              <Link href={getTypefacePath(typeface.slug)}>{typeface.name}</Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="footer-type-list gr1 gc2">
        <h3>
          <Link href="/display/">Display Typefaces</Link>
        </h3>
        <ol>
          {displayTypefaces.map((typeface) => (
            <li key={typeface.slug}>
              <Link href={getTypefacePath(typeface.slug)}>{typeface.name}</Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="footer-type-list gr1 gc2">
        <h3>
          <Link href="/monospaced/">Monospaced Typefaces</Link>
        </h3>
        <ol>
          {monospacedTypefaces.map((typeface) => (
            <li key={typeface.slug}>
              <Link href={getTypefacePath(typeface.slug)}>{typeface.name}</Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="footer-type-list gr1 gc2">
        <h3>Additional Info</h3>
        <ol>
          <li>
            <a href="https://github.com/ubuwaits/beautiful-web-type" rel="noopener" target="_blank">
              Source on GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.are.na/chad-mazzola/build-beautiful-web-type"
              rel="noopener noreferrer"
              target="_blank"
            >
              Are.na Channel
            </a>
          </li>
          <li>
            <a href="/feed.xml">Atom feed</a>
          </li>
          <li>
            <a href="/v1/">Old version of site</a>
          </li>
        </ol>
      </div>

      <div className="footer-type-list gr1 gc2">
        <h3>About Me</h3>
        <ol>
          <li>
            <a href="https://www.chad.is" rel="noopener" target="_blank">
              Personal site
            </a>
          </li>
          <li>
            <a
              className="chadwin-link"
              href="https://www.chadwin.co"
              rel="noopener"
              target="_blank"
            >
              <img alt="" height="16" src="/assets/chadwin-icon-logo.png" width="16" />
              <span className="chadwin-copy">
                <strong>Chadwin</strong>
                <span>Financial data for apps and agents</span>
              </span>
            </a>
          </li>
        </ol>
      </div>
    </footer>
  );
}
