import Link from "next/link";

import { FontFeatures } from "@/components/font-detail/font-features";

import { FittedLine, FittedLines } from "@/components/typography/fitted-lines";
import { GlyphInspector } from "@/components/font-detail/glyph-inspector";
import { TypefaceWeights } from "@/components/font-detail/typeface-weights";
import { FittedSpecimenText } from "@/components/typography/fitted-specimen-text";
import { FontTester } from "@/components/font-detail/font-tester";
import { getFontTesterData } from "@/lib/font-tester";
import type { TextData, Typeface } from "@/lib/content";
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
  text: TextData;
  typeface: Typeface;
};

export function TypefaceDetail({ glyphFontFile, text, typeface }: TypefaceDetailProps) {
  const paragraphText = text.paragraphs.join("\n\n");
  const actions = [
    { label: "Download", href: typeface.projectUrl, title: `Download ${typeface.latestRelease.version} (${typeface.latestRelease.date})` },
    ...(typeface.gFontsUrl ? [{ label: "Google Fonts", href: typeface.gFontsUrl, title: "Google Fonts" }] : [])
  ];
  const actionClass = "flex min-w-0 items-center justify-center rounded-full bg-neutral-900 px-4 py-2 min-[721px]:py-1.5 text-center text-xs leading-5 max-[720px]:@min-[21rem]:text-sm min-[721px]:text-xl min-[721px]:leading-7 font-semibold text-white no-underline! hover:bg-neutral-800 hover:text-white! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:hover:text-neutral-900! dark:focus-visible:outline-neutral-100";
  const metadata = [
    { label: "Designed by", value: <a className="no-underline!" href={typeface.creator.url} rel="noopener" target="_blank">{typeface.creator.name}</a> },
    { label: "Category", value: typeface.category },
    { label: "No. of styles", value: typeface.styles },
    { label: "Glyphs", value: typeface.glyphCount.toLocaleString("en-US") },
    { label: "Last Updated", value: typeface.latestRelease.date },
    ...(typeface.familyFaces?.length ? [{
      label: "Other faces in family",
      value: <span className="flex flex-wrap justify-end gap-x-3">{typeface.familyFaces.map((familyFace) => (
        <Link className="no-underline!" href={getTypefacePath(resolveTypefaceSlugByName(familyFace))} key={familyFace}>{familyFace}</Link>
      ))}</span>
    }] : [])
  ];

  return (
    <div className="[--section-gap:4rem] min-[721px]:[--section-gap:8rem]">
      <div className={`${typeface.slug} [&.space-mono_:is(.examples-words,.examples-headlines,.examples-paragraphs)]:[font-feature-settings:'liga'_off,'clig'_off,'dlig'_off]`}>
        <div className="layout-grid mb-(--section-gap) scroll-mt-20 gap-y-10 min-[721px]:gap-y-(--section-gap)" id="overview">
          <section className="col-span-12 flex min-h-56 flex-col items-center justify-center gap-5 py-4 min-[721px]:min-h-112 min-[721px]:py-8">
            <div className="h-48 w-full [--sample-fit-width:0.75] min-[721px]:h-88 max-[720px]:[--sample-fit-height:0.9] max-[1104px]:[--sample-fit-width:0.9]">
              <FittedSpecimenText typeface={{ slug: typeface.slug, name: typeface.name, creator: { name: typeface.creator.name } }} showCreator={false} />
            </div>
          </section>

          <div className="col-span-12 grid min-w-0 items-start gap-12 min-[721px]:col-span-8 min-[721px]:col-start-3 min-[1105px]:col-span-6 min-[1105px]:col-start-4 min-[1105px]:grid-cols-2">
            <dl className="typeface-metadata @container m-0 min-w-0 font-(family-name:--ui-face)
              [&>div]:grid [&>div]:grid-cols-2 [&>div]:items-baseline [&>div]:gap-x-6 [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0
              [&>div+div]:border-t [&>div+div]:border-t-neutral-200/60 dark:[&>div+div]:border-t-neutral-800/80 [&>div+div]:[border-top-style:solid]
              [&_dt]:min-w-0 [&_dt]:text-xs max-[720px]:@min-[21rem]:[&_dt]:text-sm min-[721px]:[&_dt]:text-base [&_dt]:leading-7 [&_dt]:font-bold [&_dt]:uppercase
              [&_dd]:m-0 [&_dd]:min-w-0 [&_dd]:text-right [&_dd]:text-xs max-[720px]:@min-[21rem]:[&_dd]:text-sm min-[721px]:[&_dd]:text-xl [&_dd]:leading-7 [&_dd]:wrap-anywhere
              [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-(--red)">
              <div className="grid-cols-1!">
                <dt className="sr-only">Get the font</dt>
                <dd className={`grid gap-2 ${actions.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {actions.map(({ label, href, title }) => (
                    <a className={actionClass} href={href} title={title} target="_blank" rel="noopener" key={label}>
                      <span className="relative min-w-0">
                        {label}<span className="absolute -top-0.75 left-full ml-1 @min-[21rem]:ml-2" aria-hidden="true">↗</span>
                      </span>
                    </a>
                  ))}
                </dd>
              </div>
              {metadata.map(({ label, value }, index) => (
                <div className={index === 0 ? "border-t-0!" : undefined} key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <TypefaceWeights weights={typeface.weights} italic={typeface.italic} />

          </div>

        </div>
        <FittedLines className="mb-(--section-gap) space-y-(--section-gap)">
          <div className="flex flex-col justify-center gap-6 examples-characters scroll-mt-20" id="characters">
            <h2 className="sr-only">Characters</h2>
            <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 leading-[1.15] min-[721px]:gap-x-8 min-[721px]:gap-y-6">
              {CHARACTER_EXAMPLES.map((entry) => (
                <div className="min-w-0 max-w-full wrap-anywhere text-[clamp(2.25rem,5vw,5.5rem)]" key={entry}>
                  <span dangerouslySetInnerHTML={{ __html: entry }} />
                </div>
              ))}
            </div>
          </div>

          <section className="grid scroll-mt-20 grid-cols-12 gap-x-(--gutter)" id="about" aria-label="About the typeface">

            <div className="typeface-description col-span-12 min-w-0 text-base leading-7 min-[721px]:col-span-8 min-[721px]:col-start-3 min-[721px]:columns-2 min-[721px]:text-xl min-[721px]:leading-8 gap-x-12 [&>p]:mb-7 [&>p]:text-pretty [&>p]:[orphans:2] [&>p]:[widows:2] [&>p:last-child]:mb-0">
              {typeface.description.split(/\n\s*\n/).map((paragraph, index) => (
                <p dangerouslySetInnerHTML={{ __html: paragraph }} key={`${typeface.slug}-description-${index}`} />
              ))}
            </div>
          </section>

          <div className="flex flex-col justify-center gap-6 examples-words scroll-mt-20" id="words">
            <h2 className="sr-only">Words</h2>

            <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 min-[721px]:grid-cols-2 min-[721px]:gap-y-10">
              {text.words.slice(0, 6).map((word, index) => (
                <FittedLine
                  key={`${typeface.slug}-${word}`}
                  text={word}
                  className={index === 2 ? "uppercase" : ""}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 examples-headlines scroll-mt-20" id="headlines">
            <h2 className="sr-only">Headlines</h2>
            <div className="space-y-10 min-[721px]:space-y-16">
              {typeface.weights.map((weight, index) => (
                <div key={`${typeface.slug}-headline-${weight.weight}`}>
                  <p className="character-label mt-2 mb-4 p-0 font-(family-name:--ui-monospaced) text-sm leading-4 font-semibold normal-case text-neutral-400 [font-feature-settings:'liga'_off]">{weight.name} · {weight.weight}</p>
                  <div className={`grid grid-cols-1 items-center gap-x-12 gap-y-6 ${typeface.smallcap ? "min-[721px]:grid-cols-3" : "min-[721px]:grid-cols-2"}`}>
                    <FittedLine text={text.headlines[index]} lines={2} weight={weight.weight} />
                    {typeface.italic ? (
                      <FittedLine text={text.headlines[index]} lines={2} weight={weight.weight} className="italic" />
                    ) : (
                      <FittedLine text={text.headlines[index]} lines={2} weight={weight.weight} className="uppercase" />
                    )}
                    {typeface.smallcap ? (
                      <FittedLine text={text.headlines[index]} lines={2} weight={weight.weight} className="[font-feature-settings:'smcp']" />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </FittedLines>

        <div className="flex flex-col justify-center gap-6 examples-paragraphs mb-(--section-gap) scroll-mt-20" id="paragraphs">
          <h2 className="sr-only">Paragraphs</h2>
          <div className="grid grid-cols-1 gap-8 min-[1105px]:grid-cols-[3fr_2fr_1fr] min-[1105px]:gap-x-12">
            {["text-xl min-[721px]:text-2xl", "text-base min-[721px]:text-xl", "text-xs min-[721px]:text-sm"].map((size) => (
              <p
                key={size}
                className={`min-w-0 caret-(--red) outline-none ${size} leading-[1.4] whitespace-pre-line text-pretty [orphans:3] [widows:3]`}
                contentEditable
                suppressContentEditableWarning
              >
                {paragraphText}
              </p>
            ))}
          </div>
        </div>

        <FontTester key={typeface.slug} data={getFontTesterData(typeface.slug)} name={typeface.name} weights={typeface.weights} />

        <FontFeatures features={typeface.features} />

        <GlyphInspector fontFile={glyphFontFile} typefaceName={typeface.name} />
      </div>
    </div>
  );
}
