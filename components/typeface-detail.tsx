import Link from "next/link";

import { FittedLine, FittedLines } from "@/components/fitted-lines";
import { GlyphInspector } from "@/components/glyph-inspector";
import { ComparisonSync } from "@/components/comparison-sync";
import { Masonry } from "@/components/masonry";
import { PairingCard } from "@/components/pairing-card";
import { FittedSpecimenText } from "@/components/fitted-specimen-text";
import { TrustedHtml } from "@/components/trusted-html";
import { TypefaceComparison } from "@/components/typeface-comparison";
import type { Pairing, TextData, Typeface } from "@/lib/content";
import { resolveTypefaceSlugByName } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

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
        <div className="layout-grid mb-16 gap-y-12 min-[721px]:mb-24 min-[721px]:gap-y-16">
          <section className="standardized-sample col-span-12 flex min-h-[24rem] flex-col items-center justify-center gap-5 py-8 min-[721px]:min-h-[28rem]">
            <div className="h-[15rem] w-full [--sample-fit-width:0.65] min-[721px]:h-[18rem] max-[1104px]:[--sample-fit-width:0.85]">
              <FittedSpecimenText typeface={typeface} showCreator={false} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 font-(family-name:--ui-face)">
              {typeface.gFontsUrl ? (
                <a className="rounded-md bg-black px-6 py-3 text-center text-base leading-5 font-semibold text-white uppercase transition-colors hover:bg-(--red)" href={typeface.gFontsUrl} rel="noopener" target="_blank">
                  Embed <span className="block text-sm font-normal normal-case opacity-80">using Google Fonts</span>
                </a>
              ) : null}
              <a className="rounded-md bg-black px-6 py-3 text-center text-base leading-5 font-semibold text-white uppercase transition-colors hover:bg-(--red)" href={typeface.projectUrl} rel="noopener" target="_blank">
                Download
                <span className="block text-sm font-normal normal-case opacity-80">
                  {typeface.latestRelease.version} ({typeface.latestRelease.date})
                </span>
              </a>
            </div>
          </section>

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
              <a className="underline decoration-from-font underline-offset-4 hover:text-(--red)" href={typeface.creator.url} rel="noopener" target="_blank">
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
        <FittedLines className="mb-16 space-y-16 min-[721px]:mb-24 min-[721px]:space-y-24">
          <div className="type-detail-table examples-characters">
            <h2 className="sr-only">Characters</h2>
            <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 leading-[1.15] min-[721px]:gap-x-8 min-[721px]:gap-y-6">
              {CHARACTER_EXAMPLES.map((entry) => (
                <div className="min-w-0 max-w-full wrap-anywhere text-[clamp(2.25rem,5vw,5.5rem)]" key={entry}>
                  <span dangerouslySetInnerHTML={{ __html: entry }} />
                </div>
              ))}
            </div>
          </div>

          <div className="type-detail-table examples-words">
            <h2 className="sr-only">Words</h2>

            <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 min-[721px]:grid-cols-2 min-[721px]:gap-y-10">
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
            <h2 className="sr-only">Headlines</h2>
            <div className="space-y-10 min-[721px]:space-y-16">
              {typeface.weights.map((weight, index) => (
                <div key={`${typeface.slug}-headline-${weight.weight}`}>
                  <p className="character-label mb-4">{weight.name} · {weight.weight}</p>
                  <div className={`grid grid-cols-1 items-center gap-x-12 gap-y-6 ${typeface.smallcap ? "min-[721px]:grid-cols-3" : "min-[721px]:grid-cols-2"}`}>
                    <FittedLine text={text.headlines[index]} lines={2} className={`w${weight.weight}`} />
                    {typeface.italic ? (
                      <FittedLine text={text.headlines[index]} lines={2} className={`w${weight.weight} italic`} />
                    ) : (
                      <FittedLine text={text.headlines[index]} lines={2} className={`w${weight.weight} uppercase`} />
                    )}
                    {typeface.smallcap ? (
                      <FittedLine text={text.headlines[index]} lines={2} className={`w${weight.weight} small-caps`} />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </FittedLines>

        <div className="type-detail-table examples-paragraphs mb-16 min-[721px]:mb-24">
          <h2 className="sr-only">Paragraphs</h2>
          <div className="grid grid-cols-1 gap-8 min-[1105px]:grid-cols-[calc(50%_-_1.5rem)_minmax(0,2.1fr)_minmax(0,1fr)] min-[1105px]:gap-x-12">
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

        {typeface.bodyHtml ? (
          <TrustedHtml
            className="feature-list mb-16 space-y-12 min-[721px]:mb-24 min-[721px]:space-y-16
              [&>.type-detail-table]:grid! [&>.type-detail-table]:grid-cols-1 [&>.type-detail-table]:items-start
              min-[721px]:[&>.type-detail-table]:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]
              [&>.type-detail-table>.meta]:min-w-0 [&>.type-detail-table>.meta]:flex-col!
              [&>.type-detail-table>.meta]:self-start [&>.type-detail-table>.meta]:justify-start!
              [&>.type-detail-table>.meta]:gap-1 [&>.type-detail-table>.meta>.code]:mt-0!
              [&>.type-detail-table>.meta]:shadow-none! [&>.type-detail-table>.meta]:wrap-anywhere
              [&>.type-detail-table>.examples]:min-w-0 [&>.type-detail-table>.examples]:justify-start!
              [&>.type-detail-table>.examples]:flex-row! [&>.type-detail-table>.examples]:flex-wrap!
              [&>.type-detail-table>.examples]:items-center! [&>.type-detail-table>.examples]:content-start!
              [&>.type-detail-table>.examples>div]:max-w-full"
            html={typeface.bodyHtml}
          />
        ) : null}

        <GlyphInspector fontFile={glyphFontFile} typefaceName={typeface.name} />
      </div>

      {typeface.comparisonFaces?.length ? (
        <div className="layout-grid grid-comparisons mb-16 min-[721px]:mb-24" id="comparisons">
          <ComparisonSync />
          <h3 className="col-span-12">
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
        <div className="layout-grid grid-pairings mb-16 min-[721px]:mb-24" id="pairings">
          <h3 className="col-span-12">Recommended Pairings for {typeface.name}</h3>
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
