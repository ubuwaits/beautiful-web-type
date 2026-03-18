import Link from "next/link";

import { ComparisonSync } from "@/components/comparison-sync";
import { PairingCard } from "@/components/pairing-card";
import { SampleCard } from "@/components/sample-card";
import { TypefaceComparison } from "@/components/typeface-comparison";
import type { Pairing, TextData, Typeface } from "@/lib/content";
import { resolveTypefaceSlugByName } from "@/lib/content";

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
  pairings: Pairing[];
  sampleBody: string;
  text: TextData;
  typeface: Typeface;
};

export function TypefaceDetail({
  pairings,
  sampleBody,
  text,
  typeface
}: TypefaceDetailProps) {
  const secondHeadlineType = typeface.italic ? "italic" : "uppercase";
  const paragraphText = text.paragraphs[typeface.italic ? 0 : 1];

  return (
    <>
      <div className={`grid ${typeface.slug}`}>
        <header className="type-detail-header gr1 gc6">
          <div>
            <h2>{typeface.name}</h2>
            <h3>by {typeface.creator.name}</h3>
          </div>
        </header>

        <div className="font-download gr1 gc6">
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

        <SampleCard
          sample={{ bodyHtml: sampleBody, slug: typeface.slug, typefaceName: typeface.name }}
          typeface={typeface}
        />

        <div className="type-styles gr1 gc6">
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

        <div className="type-info gr1 gc3">
          <h3>Description</h3>
          <h4>{typeface.description}</h4>
        </div>

        <div className="type-info gr1 gc3">
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
                    <Link href={`/${resolveTypefaceSlugByName(familyFace)}/`}>{familyFace}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>

        <div className="type-detail-table examples-characters gr1 gc6">
          <div className="meta dark top flex-row">
            <p className="name">Characters</p>
            <Link className="glyph-explorer" href={`/${typeface.slug}/glyphs/`}>
              Explore all characters
            </Link>
          </div>
          <div className="examples character-examples flow-row">
            {CHARACTER_EXAMPLES.map((entry) => (
              <div key={entry}>
                <span dangerouslySetInnerHTML={{ __html: entry }} />
              </div>
            ))}
          </div>
        </div>

        <div className="type-detail-table examples-words gr1 gc6">
          <div className="meta dark top">
            <p className="name">Words</p>
          </div>

          <div className="examples word-examples flow-column flow-center">
            {text.words.slice(0, 6).map((word) => (
              <div key={`${typeface.slug}-${word}`}>
                <h1 contentEditable suppressContentEditableWarning>
                  {word}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="type-detail-table examples-headlines gr1 gc6">
          <div className="meta dark top">
            <p className="name">Headlines</p>
          </div>

          <div className="examples flow-column">
            {typeface.weights.map((weight, index) => (
              <div key={`${typeface.slug}-headline-${weight.weight}`}>
                <h1
                  className={`w${weight.weight}`}
                  contentEditable
                  suppressContentEditableWarning
                >
                  {text.headlines[index]}
                </h1>
                <p className="character-label">{weight.weight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`type-detail-table examples-headlines-${secondHeadlineType} gr1 gc6`}>
          <div className="meta dark top">
            <p className="name">
              {secondHeadlineType === "uppercase" ? "Uppercase" : "Italic"} Headlines
            </p>
          </div>
          <div className="examples flow-column">
            {typeface.weights.map((weight, index) => (
              <div key={`${typeface.slug}-${secondHeadlineType}-${weight.weight}`}>
                <h1
                  className={`w${weight.weight} ${secondHeadlineType}`}
                  contentEditable
                  suppressContentEditableWarning
                >
                  {text.headlines[index]}
                </h1>
                <p className="character-label">{weight.weight}</p>
              </div>
            ))}
          </div>
        </div>

        {typeface.category !== "Display" ? (
          <div className="type-detail-table examples-paragraphs gr6 gc6">
            <div className="meta dark top flex-column">
              <p className="name">Paragraphs</p>
              <p className="code">font-weight: 400</p>
            </div>
            <div className="examples paragraph-examples flow-column">
              {["ms2", "ms1", "ms0", "ms-1", "ms-2 col-2"].map((className) => (
                <div key={`${typeface.slug}-${className}`}>
                  <p
                    className={className}
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: paragraphText }}
                    suppressContentEditableWarning
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {typeface.smallcap ? (
          <div className="type-detail-table examples-smallcap gr7 gc6">
            <div className="meta dark top flex-column">
              <p className="name">Smallcap headlines</p>
              <p className="code">font-feature-settings: 'smcp';</p>
            </div>
            <div className="examples flow-column small-caps">
              {typeface.weights.map((weight, index) => (
                <div key={`${typeface.slug}-smallcap-${weight.weight}`}>
                  <h1
                    className={`w${weight.weight}`}
                    contentEditable
                    suppressContentEditableWarning
                  >
                    {text.headlines[index]}
                  </h1>
                  <p className="character-label">{weight.weight}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {typeface.bodyHtml ? (
          <div className="contents" dangerouslySetInnerHTML={{ __html: typeface.bodyHtml }} />
        ) : null}
      </div>

      {typeface.comparisonFaces?.length ? (
        <div className="grid grid-comparisons" id="comparisons">
          <ComparisonSync />
          <h3 className="gr1 gc12 ase mt3">
            {typeface.name} compared with other typefaces
          </h3>
          <TypefaceComparison
            comparisonFaces={typeface.comparisonFaces}
            text={text.words[3]}
            typeface={typeface}
          />
        </div>
      ) : null}

      {pairings.length ? (
        <div className="grid grid-pairings" id="pairings">
          <h3 className="gr1 gc12 ase mt3">Recommended Pairings for {typeface.name}</h3>
          {pairings.map((pairing) => (
            <PairingCard currentTypefaceName={typeface.name} key={pairing.slug} pairing={pairing} />
          ))}
        </div>
      ) : null}
    </>
  );
}
