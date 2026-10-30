import Link from "next/link";

import { FittedLine, FittedLines } from "@/components/fitted-lines";
import { GlyphInspector } from "@/components/glyph-inspector";
import { ComparisonSync } from "@/components/comparison-sync";
import { Masonry } from "@/components/masonry";
import { PairingCard } from "@/components/pairing-card";
import { SampleCard } from "@/components/sample-card";
import { TrustedHtml } from "@/components/trusted-html";
import { TypefaceComparison } from "@/components/typeface-comparison";
import type { Pairing, TextData, Typeface } from "@/lib/content";
import { resolveTypefaceSlugByName } from "@/lib/content";
import { getGlyphPath, getTypefacePath } from "@/lib/routes";

const CHARACTER_EXAMPLES = [
  "Aa",
  "Bb",
  "Cc",
  "Dd",
  "Ee",
  "Ff",
  "Gg",
  "Hh",
  "Ii",
  "Jj",
  "Kk",
  "Ll",
  "Mm",
  "Nn",
  "Oo",
  "Pp",
  "Qq",
  "Rr",
  "Ss",
  "Tt",
  "Uu",
  "Vv",
  "Ww",
  "Xx",
  "Yy",
  "Zz",
  "Åå",
  "Ææ",
  "Çç",
  "Éé",
  "Øø",
  "Ññ",
  "Üü",
  "Žž",
  "1234567890",
  "‘¿?’",
  "“!”",
  "- &ndash; &mdash;",
  "(&amp;)",
  "[*]",
  "{@}",
  "€£¥$¢",
  ":;,.",
  "&lt;&gt;+÷×="
];

type TypefaceDetailProps = {
  glyphFontFile: string;
  pairings: Pairing[];
  text: TextData;
  typeface: Typeface;
};

export function TypefaceDetail({ glyphFontFile, pairings, text, typeface }: TypefaceDetailProps) {
  const paragraphText = text.paragraphs.join("\n\n");

  return (
    <>
      <div className={typeface.slug}>
        <div className="layout-grid">
          <header className="type-detail-header col-span-12 min-[721px]:col-span-6">
            <div>
              <h2>{typeface.name}</h2>
              <h3>by {typeface.creator.name}</h3>
            </div>
          </header>

          <div className="font-download col-span-12 min-[721px]:col-span-6">
            {typeface.gFontsUrl ? (
              <a href={typeface.gFontsUrl} rel="noopener" target="_blank">
                Embed <span>using Google Fonts</span>
              </a>
            ) : null}
            <a href={typeface.projectUrl} rel="noopener" target="_blank">
              Download{" "}
              <span>
                {typeface.latestRelease.version} ({typeface.latestRelease.date})
              </span>
            </a>
          </div>

          <SampleCard specimen={text.specimen} typeface={typeface} variant="hero" />

          <div className="type-styles col-span-12 min-[721px]:col-span-6">
            {typeface.weights.map((weight) => (
              <div key={`${typeface.slug}-${weight.weight}`}>
                <p className={`w${weight.weight}`}>{weight.name}</p>
                {typeface.italic ? (
                  <p className={`w${weight.weight}`}>
                    <em>Italic</em>
                  </p>
                ) : null}
                <p className="weight">{weight.weight}</p>
              </div>
            ))}
          </div>

          <div className="type-info col-span-12 min-[721px]:col-span-3">
            <h3>Description</h3>
            <TrustedHtml as="h4" html={typeface.description} />
          </div>

          <div className="type-info col-span-12 min-[721px]:col-span-3">
            <h3>Designed by</h3>
            <h4>
              <a href={typeface.creator.url} rel="noopener" target="_blank">
                {typeface.creator.name}
              </a>
            </h4>

            <h3>Category</h3>
            <h4>
              <Link href={`/${typeface.categorySlug}/`}>{typeface.category}</Link>
            </h4>

            <h3>No. of styles</h3>
            <h4>{typeface.styles}</h4>

            {typeface.familyFaces?.length ? (
              <>
                <h3>Other faces in family</h3>
                <ul>
                  {typeface.familyFaces.map((familyFace) => (
                    <li key={familyFace}>
                      <Link href={getTypefacePath(resolveTypefaceSlugByName(familyFace))}>
                        {familyFace}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

        </div>
        <FittedLines className="mb-(--gutter) space-y-(--gutter)">
          <div className="type-detail-table examples-characters">
            <div className="meta dark top flex-row">
              <p className="name">Characters</p>
              <Link className="glyph-explorer" href={getGlyphPath(typeface.slug)}>
                Explore all characters
              </Link>
            </div>
            <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 p-4 leading-[1.15] min-[721px]:gap-x-8 min-[721px]:gap-y-6 min-[721px]:p-8">
              {CHARACTER_EXAMPLES.map((entry) => (
                <div className="min-w-0 max-w-full wrap-anywhere text-[clamp(2.25rem,5vw,5.5rem)]" key={entry}>
                  <span dangerouslySetInnerHTML={{ __html: entry }} />
                </div>
              ))}
            </div>
          </div>

          <div className="type-detail-table examples-words">
            <div className="meta dark top">
              <p className="name">Words</p>
            </div>

            <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 p-4 min-[721px]:grid-cols-2 min-[721px]:gap-y-10 min-[721px]:p-8">
              {text.words.slice(0, 6).map((word, index) => (
                <FittedLine
                  key={`${typeface.slug}-${word}`}
                  text={word}
                  className={`w400 ${index === 2 ? "uppercase" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="type-detail-table examples-headlines">
            <div className="meta dark top">
              <p className="name">Headlines</p>
            </div>
            <div className="space-y-10 p-4 min-[721px]:space-y-16 min-[721px]:p-8">
              {typeface.weights.map((weight, index) => (
                <div className="space-y-2" key={`${typeface.slug}-headline-${weight.weight}`}>
                  <p className="character-label mb-4">{weight.name} · {weight.weight}</p>
                  <FittedLine text={text.headlines[index]} className={`w${weight.weight}`} />
                  {typeface.italic ? (
                    <FittedLine text={text.headlines[index]} className={`w${weight.weight} italic`} />
                  ) : (
                    <FittedLine text={text.headlines[index]} className={`w${weight.weight} uppercase`} />
                  )}
                  {typeface.smallcap ? (
                    <FittedLine text={text.headlines[index]} className={`w${weight.weight} small-caps`} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

        </FittedLines>

        <div className="type-detail-table examples-paragraphs mb-(--gutter)">
          <div className="meta dark top flex-column">
            <p className="name">Paragraphs</p>
            <p className="code">font-weight: 400</p>
          </div>
          <div className="grid grid-cols-1 gap-8 p-4 min-[721px]:p-8 min-[1105px]:grid-cols-[minmax(0,3fr)_minmax(0,2.1fr)_minmax(0,1fr)] min-[1105px]:gap-x-12">
            {["text-(length:--ms2)", "text-(length:--ms1)", "text-(length:--ms-1)"].map((size) => (
              <p
                key={size}
                className={`min-w-0 ${size} leading-[1.4] whitespace-pre-line`}
                contentEditable
                suppressContentEditableWarning
              >
                {paragraphText}
              </p>
            ))}
          </div>
        </div>

        <Masonry className="mb-(--gutter)">
          {typeface.bodyHtml ? (
            <div className="contents" dangerouslySetInnerHTML={{ __html: typeface.bodyHtml }} />
          ) : null}
        </Masonry>

        <GlyphInspector fontFile={glyphFontFile} typefaceName={typeface.name} />
      </div>

      {typeface.comparisonFaces?.length ? (
        <div className="layout-grid grid-comparisons" id="comparisons">
          <ComparisonSync />
          <h3 className="col-span-12 ase mt3">
            {typeface.name} compared with other typefaces
          </h3>
          <TypefaceComparison
            comparisonFaces={typeface.comparisonFaces}
            text={text.words[5]}
            typeface={typeface}
          />
        </div>
      ) : null}

      {pairings.length ? (
        <div className="layout-grid grid-pairings" id="pairings">
          <h3 className="col-span-12 ase mt3">Recommended Pairings for {typeface.name}</h3>
          <Masonry className="col-span-12">
            {pairings.map((pairing) => (
              <PairingCard currentTypefaceName={typeface.name} key={pairing.slug} pairing={pairing} />
            ))}
          </Masonry>
        </div>
      ) : null}
    </>
  );
}
