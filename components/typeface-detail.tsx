import Link from "next/link";

import { FittedLine, FittedLines } from "@/components/fitted-lines";
import { GlyphInspector } from "@/components/glyph-inspector";
import { ComparisonSync } from "@/components/comparison-sync";
import { Masonry } from "@/components/masonry";
import { PairingCard } from "@/components/pairing-card";
import { TypefaceNavigation } from "@/components/typeface-navigation";
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
  const weightColumns = [
    typeface.weights.slice(0, Math.ceil(typeface.weights.length / 2)),
    typeface.weights.slice(Math.ceil(typeface.weights.length / 2))
  ].filter((column) => column.length);
  const metadata = [
    { label: "Designed by", value: <a href={typeface.creator.url} rel="noopener" target="_blank">{typeface.creator.name}</a> },
    { label: "Category", value: typeface.category },
    { label: "No. of styles", value: typeface.styles },
    ...(typeface.familyFaces?.length ? [{
      label: "Other faces in family",
      value: <span className="flex flex-wrap justify-end gap-x-3">{typeface.familyFaces.map((familyFace) => (
        <Link href={getTypefacePath(resolveTypefaceSlugByName(familyFace))} key={familyFace}>{familyFace}</Link>
      ))}</span>
    }] : [])
  ];
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "characters", label: "Characters" },
    { id: "about", label: "About" },
    { id: "words", label: "Words" },
    { id: "headlines", label: "Headlines" },
    { id: "paragraphs", label: "Paragraphs" },
    ...(typeface.bodyHtml ? [{ id: "features", label: "Features" }] : []),
    { id: "glyphs", label: "Glyphs" },
    ...(typeface.comparisonFaces?.length ? [{ id: "comparisons", label: "Compare" }] : []),
    ...(pairings.length ? [{ id: "pairings", label: "Pairings" }] : [])
  ];

  return (
    <div className="pt-12">
      <TypefaceNavigation
        sections={sections}
        embedUrl={typeface.gFontsUrl}
        downloadUrl={typeface.projectUrl}
        release={`${typeface.latestRelease.version} (${typeface.latestRelease.date})`}
        releaseDate={typeface.latestRelease.date}
      />
      <div className={typeface.slug}>
        <div className="layout-grid mb-16 scroll-mt-32 gap-y-12 min-[721px]:mb-24 min-[721px]:gap-y-16" id="overview">
          <section className="standardized-sample col-span-12 flex min-h-[24rem] flex-col items-center justify-center gap-5 py-8 min-[721px]:min-h-[28rem]">
            <div className="h-[15rem] w-full [--sample-fit-width:0.65] min-[721px]:h-[18rem] max-[1104px]:[--sample-fit-width:0.85]">
              <FittedSpecimenText typeface={typeface} showCreator={false} />
            </div>
          </section>

          <dl className="typeface-metadata col-span-12 m-0 min-w-0 font-(family-name:--ui-face) min-[721px]:col-span-8 min-[721px]:col-start-3 min-[1105px]:col-span-6 min-[1105px]:col-start-4
            [&>div]:grid [&>div]:grid-cols-2 min-[721px]:[&>div]:grid-cols-4 [&>div]:items-baseline [&>div]:gap-x-6 [&>div]:gap-y-3 [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0
            [&>div+div]:border-t [&>div+div]:border-t-neutral-200 [&>div+div]:[border-top-style:solid]
            [&_dt]:min-w-0 [&_dt]:text-base [&_dt]:leading-7 [&_dt]:font-bold [&_dt]:uppercase
            [&_dd]:m-0 [&_dd]:min-w-0 [&_dd]:text-right [&_dd]:text-(length:--ms1) [&_dd]:leading-7 [&_dd]:wrap-anywhere
            [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-(--red)">
            {[metadata.slice(0, 2), metadata.slice(2)].map((row, index) => (
              <div key={index}>
                {row.flatMap(({ label, value }) => [
                  <dt key={`${label}-label`}>{label}</dt>,
                  <dd key={`${label}-value`}>{value}</dd>
                ])}
              </div>
            ))}
          </dl>

          <div className="type-weight-list col-span-12 grid w-full max-w-3xl min-w-0 grid-cols-1 justify-self-center gap-x-(--gutter) min-[721px]:grid-cols-2 min-[1105px]:col-span-6 min-[1105px]:col-start-4">
            {weightColumns.map((weights, index) => (
              <div className={`type-styles min-w-0 [&>div]:flex-wrap ${weightColumns.length === 1 ? "col-span-full justify-self-center" : ""}`} key={index}>
                {weights.map((weight) => (
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
            ))}
          </div>

        </div>
        <FittedLines className="mb-16 space-y-16 min-[721px]:mb-24 min-[721px]:space-y-24">
          <div className="type-detail-table examples-characters scroll-mt-32" id="characters">
            <h2 className="sr-only">Characters</h2>
            <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 leading-[1.15] min-[721px]:gap-x-8 min-[721px]:gap-y-6">
              {CHARACTER_EXAMPLES.map((entry) => (
                <div className="min-w-0 max-w-full wrap-anywhere text-[clamp(2.25rem,5vw,5.5rem)]" key={entry}>
                  <span dangerouslySetInnerHTML={{ __html: entry }} />
                </div>
              ))}
            </div>
          </div>

          <section className="grid scroll-mt-32 grid-cols-12 gap-x-(--gutter)" id="about" aria-label="About the typeface">

            <div className="typeface-description col-span-12 min-w-0 font-(family-name:--ui-face) text-(length:--ms1) leading-relaxed min-[721px]:col-span-8 min-[721px]:col-start-3 min-[721px]:columns-2 gap-x-12 [&>p]:mb-5 [&>p:last-child]:mb-0 [&_a]:underline [&_a]:underline-offset-4">
              {typeface.description.split(/\n\s*\n/).map((paragraph, index) => (
                <TrustedHtml as="p" html={paragraph} key={`${typeface.slug}-description-${index}`} />
              ))}
            </div>
          </section>

          <div className="type-detail-table examples-words scroll-mt-32" id="words">
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

          <div className="type-detail-table examples-headlines scroll-mt-32" id="headlines">
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

        <div className="type-detail-table examples-paragraphs mb-16 scroll-mt-32 min-[721px]:mb-24" id="paragraphs">
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
            id="features"
            className="feature-list scroll-mt-32 mb-16 space-y-6 min-[721px]:mb-24 min-[721px]:space-y-8
              [&>.type-detail-table:first-child]:border-t-2 [&>.type-detail-table:first-child]:border-t-neutral-300
              [&>.type-detail-table:first-child]:[border-top-style:solid]
              [&>.type-detail-table:first-child]:pt-6 min-[721px]:[&>.type-detail-table:first-child]:pt-8
              [&>.type-detail-table:last-child]:border-b-2 [&>.type-detail-table:last-child]:border-b-neutral-300
              [&>.type-detail-table:last-child]:[border-bottom-style:solid]
              [&>.type-detail-table:last-child]:pb-6 min-[721px]:[&>.type-detail-table:last-child]:pb-8
              [&>.type-detail-table+.type-detail-table]:border-t [&>.type-detail-table+.type-detail-table]:border-t-neutral-200
              [&>.type-detail-table+.type-detail-table]:[border-top-style:solid]
              [&>.type-detail-table+.type-detail-table]:pt-6 min-[721px]:[&>.type-detail-table+.type-detail-table]:pt-8
              [&>.type-detail-table]:grid! [&>.type-detail-table]:grid-cols-1 [&>.type-detail-table]:items-start
              min-[721px]:[&>.type-detail-table]:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]
              [&>.type-detail-table>.meta]:min-w-0 [&>.type-detail-table>.meta]:flex-col!
              [&>.type-detail-table>.meta]:self-start [&>.type-detail-table>.meta]:justify-start!
              [&>.type-detail-table>.meta]:gap-1 [&>.type-detail-table>.meta>.code]:mt-0!
              [&>.type-detail-table>.meta]:shadow-none! [&>.type-detail-table>.meta]:wrap-anywhere
              [&>.type-detail-table>.examples]:min-w-0 [&>.type-detail-table>.examples]:justify-start!
              [&>.type-detail-table>.examples]:flex-row! [&>.type-detail-table>.examples]:flex-wrap!
              [&>.type-detail-table>.examples]:items-start! [&>.type-detail-table>.examples]:content-start!
              [&>.type-detail-table>.examples>div]:max-w-full
              [&>.type-detail-table>.meta>.name]:[text-box-trim:trim-start] [&>.type-detail-table>.meta>.name]:[text-box-edge:cap_alphabetic]
              [&>.type-detail-table>.examples>div:has(>span)]:grid [&>.type-detail-table>.examples>div:has(>span)]:grid-cols-[max-content_max-content]
              [&>.type-detail-table>.examples>div:has(>span)]:items-start [&>.type-detail-table>.examples>div:has(>span)]:gap-x-1
              [&>.type-detail-table>.examples>div:has(>span)>p]:col-span-full
              [&>.type-detail-table>.examples>div>span]:[text-box-trim:trim-start] [&>.type-detail-table>.examples>div>span]:[text-box-edge:cap_alphabetic]
              [&>.type-detail-table>.examples_h1]:[text-box-trim:trim-start] [&>.type-detail-table>.examples_h1]:[text-box-edge:cap_alphabetic]"
            html={typeface.bodyHtml}
          />
        ) : null}

        <GlyphInspector fontFile={glyphFontFile} typefaceName={typeface.name} />
      </div>

      {typeface.comparisonFaces?.length ? (
        <div className="layout-grid grid-comparisons mb-16 scroll-mt-32 min-[721px]:mb-24" id="comparisons">
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
        <div className="layout-grid grid-pairings mb-16 scroll-mt-32 min-[721px]:mb-24" id="pairings">
          <h3 className="col-span-12">Recommended Pairings for {typeface.name}</h3>
          <Masonry className="col-span-12">
            {pairings.map((pairing) => (
              <PairingCard currentTypefaceName={typeface.name} key={pairing.slug} pairing={pairing} />
            ))}
          </Masonry>
        </div>
      ) : null}
    </div>
  );
}
