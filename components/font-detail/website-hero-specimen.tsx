import type { WebsiteTypography } from "@/lib/content/types";
import { websiteTextStyle } from "@/lib/website-typography";

const TEXT_CLASSES = {
  wordmark: "font-semibold text-[length:var(--website-size,24px)] leading-7 -tracking-[0.025em] min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,24px))]",
  headline: "font-medium text-[length:var(--website-size,clamp(2.25rem,6.3cqw,5.875rem))] leading-[1.02] -tracking-[0.045em] min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,clamp(2.25rem,6.3cqw,5.875rem)))]",
  description: "font-normal text-[length:var(--website-size,16px)] min-[1105px]:text-[length:var(--website-desktop-size,18px)] leading-7",
  action: "font-normal text-[length:var(--website-size,14px)] leading-6 min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
  caseLocation: "font-normal text-[length:var(--website-size,12px)] leading-5 tracking-[0.025em] uppercase min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,12px))]",
  caseTitle: "font-semibold text-[length:var(--website-size,24px)] leading-[1.15] -tracking-[0.025em] min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,24px))]",
  caseBody: "font-normal text-[length:var(--website-size,14px)] leading-6 min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
  tableLabel: "font-normal text-[length:var(--website-size,14px)] leading-5 min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
  tableValue: "font-medium text-[length:var(--website-size,14px)] leading-5 [font-feature-settings:'lnum'_1,'tnum'_1] min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
} satisfies Record<keyof WebsiteTypography, string>;

const CASE_STUDIES = [
  {
    place: "01 / Peckham, London",
    title: "Almond Yard",
    description: "A tiled shopfront becomes a neighbourhood kitchen, with a shared table where the counter used to be and a courtyard open for Sunday lunch.",
    area: "128 m²",
    added: "24 m²",
    retained: "86%",
    duration: "26 weeks"
  },
  {
    place: "02 / Kelham Island, Sheffield",
    title: "Rutland Works",
    description: "A former cutlery workshop makes room for a ceramicist, a frame maker, and a bicycle repair shop. New partitions stop below the original roof trusses.",
    area: "640 m²",
    added: "48 m²",
    retained: "94%",
    duration: "38 weeks"
  },
  {
    place: "03 / Stokes Croft, Bristol",
    title: "Picton House",
    description: "Two empty floors above a corner shop become six compact homes. A new stair brings daylight into the centre; the shop keeps trading throughout.",
    area: "312 m²",
    added: "0 m²",
    retained: "91%",
    duration: "32 weeks"
  },
  {
    place: "04 / Cliftonville, Margate",
    title: "The Westbury",
    description: "An empty cinema finds its second act as a rehearsal room and evening venue. The curved balcony remains, along with the ticket window on the street.",
    area: "875 m²",
    added: "36 m²",
    retained: "97%",
    duration: "44 weeks"
  }
];

export function WebsiteHeroSpecimen({ typography = {} }: { typography?: WebsiteTypography }) {
  const text = (role: keyof WebsiteTypography) => websiteTextStyle(typography[role]);
  const muted = "text-neutral-500 dark:text-neutral-400";

  return (
    <section id="website-hero" aria-label="Website hero specimen" className="@container mb-(--section-gap) scroll-mt-20" style={{ fontSynthesis: "none", fontStyle: "normal", fontFeatureSettings: "normal", fontVariationSettings: "normal", fontOpticalSizing: "auto" }}>
      <h2 className="sr-only">Website hero</h2>
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-6 min-[721px]:p-12 dark:border-neutral-800 dark:bg-neutral-900/40">
        <p className={TEXT_CLASSES.wordmark} data-web-text="wordmark" style={text("wordmark")}>Reframe.</p>

        <div className="grid grid-cols-12 gap-x-4 gap-y-6 py-10 min-[721px]:gap-x-8 min-[1105px]:[align-items:last_baseline]">
          <div className="col-span-12 min-w-0 min-[1105px]:col-span-6">
            <h3 className={TEXT_CLASSES.headline} data-web-text="headline" style={text("headline")}>
              <span className="block">New life for</span>
              <span className="block">old buildings.</span>
            </h3>
          </div>
          <div className="col-span-12 min-w-0 min-[721px]:col-span-9 min-[1105px]:col-span-4 min-[1105px]:col-start-7">
            <p className={`${muted} ${TEXT_CLASSES.description} max-w-[36ch]`} data-web-text="description" style={text("description")}>We give empty shops, tired offices, and forgotten warehouses a reason to open their doors again.</p>
            <button type="button"
              className={`${TEXT_CLASSES.action} mt-6 inline-flex w-max gap-5 whitespace-nowrap min-h-11 cursor-pointer items-center justify-self-start rounded-full bg-neutral-950 px-5 py-2.5 text-neutral-100 hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-300`}
              data-web-text="action" style={text("action")}>
              <span className="block [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">Explore our approach</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        <section aria-label="Case studies" className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 min-[721px]:mt-10 min-[721px]:grid-cols-2 min-[1105px]:grid-cols-4">
          {CASE_STUDIES.map((study) => (
            <article key={study.title} data-case-study="" className="row-span-4 grid min-w-0 grid-rows-subgrid border-t border-neutral-200 pt-4 dark:border-neutral-700">
              <p className={`${muted} ${TEXT_CLASSES.caseLocation}`} data-web-text="caseLocation" style={text("caseLocation")}>{study.place}</p>
              <h4 className={TEXT_CLASSES.caseTitle} data-web-text="caseTitle" style={text("caseTitle")}>{study.title}</h4>
              <p className={TEXT_CLASSES.caseBody} data-web-text="caseBody" style={text("caseBody")}>{study.description}</p>
              <table className="w-full border-collapse self-start">
                <caption className="sr-only">{study.title} project data</caption>
                <tbody>
                  {[["Existing area", study.area], ["Added area", study.added], ["Structure kept", study.retained], ["On site", study.duration]].map(([label, value]) => (
                    <tr key={label} className="border-b border-neutral-200 last:border-0 dark:border-neutral-800">
                      <th scope="row" className={`${muted} ${TEXT_CLASSES.tableLabel} py-2 pr-3 text-left align-baseline`} data-web-text="tableLabel" style={text("tableLabel")}>{label}</th>
                      <td className={`${TEXT_CLASSES.tableValue} py-2 text-right align-baseline whitespace-nowrap`} data-web-text="tableValue" style={text("tableValue")}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
