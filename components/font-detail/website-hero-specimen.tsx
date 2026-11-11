import type { WebsiteTypography } from "@/lib/content/types";
import { websiteTextStyle } from "@/lib/website-typography";

const TEXT_CLASSES = {
  wordmark: "font-semibold text-[length:var(--website-size,24px)] leading-7 tracking-normal min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,24px))]",
  headline: "font-medium text-[length:var(--website-size,clamp(2.25rem,6.3cqw,5.875rem))] leading-[1.02] -tracking-[0.01em] min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,clamp(2.25rem,6.3cqw,5.875rem)))]",
  description: "font-normal text-[length:var(--website-size,16px)] min-[1105px]:text-[length:var(--website-desktop-size,18px)] leading-7",
  action: "font-normal text-[length:var(--website-size,14px)] leading-6 min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
  caseLocation: "font-normal text-[length:var(--website-size,12px)] leading-5 tracking-[0.025em] uppercase min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,12px))]",
  caseTitle: "font-semibold text-[length:var(--website-size,24px)] leading-[1.15] tracking-normal min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,24px))]",
  caseBody: "font-normal text-[length:var(--website-size,14px)] leading-6 min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
  tableLabel: "font-normal text-[length:var(--website-size,14px)] leading-5 min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
  tableValue: "font-medium text-[length:var(--website-size,14px)] leading-5 [font-feature-settings:'lnum'_1,'tnum'_1] min-[1105px]:text-[length:var(--website-desktop-size,var(--website-size,14px))]",
} satisfies Record<keyof WebsiteTypography, string>;

export function WebsiteHeroSpecimen({ typography = {} }: { typography?: WebsiteTypography }) {
  const text = (role: keyof WebsiteTypography) => websiteTextStyle(typography[role]);
  const muted = "text-neutral-500 dark:text-neutral-400";
  const prose = "flex min-w-0 flex-col gap-4 font-normal text-[length:var(--website-size,14px)] leading-6 min-[1105px]:justify-between min-[1105px]:text-[length:var(--website-desktop-size,14px)] min-[1280px]:text-[length:var(--website-desktop-size,16px)] min-[1280px]:leading-7";
  const trimToBaseline = "min-[1105px]:[text-box-trim:trim-end] min-[1105px]:[text-box-edge:cap_alphabetic]";

  return (
    <section id="website-hero" aria-label="Website hero specimen" className="@container mb-(--section-gap) scroll-mt-20" style={{ fontSynthesis: "none", fontStyle: "normal", fontFeatureSettings: "normal", fontVariationSettings: "normal", fontOpticalSizing: "auto" }}>
      <h2 className="sr-only">Website hero</h2>
      <div className="overflow-hidden rounded-xl border border-neutral-200 p-6 min-[721px]:p-12 dark:border-neutral-800">
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

        <article aria-labelledby="almond-yard-title" data-case-study="" className="mt-6 grid gap-x-8 gap-y-8 min-[721px]:mt-10 min-[721px]:grid-cols-12">
          <div className="flex min-w-0 flex-col gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-700 min-[721px]:col-span-4 min-[1105px]:col-span-3">
            <p className={`${muted} ${TEXT_CLASSES.caseLocation}`} data-web-text="caseLocation" style={text("caseLocation")}>01 / Peckham, London</p>
            <h4 id="almond-yard-title" className={TEXT_CLASSES.caseTitle} data-web-text="caseTitle" style={text("caseTitle")}>Almond Yard</h4>
            <p className={TEXT_CLASSES.caseBody} data-web-text="caseBody" style={text("caseBody")}>A tiled shopfront becomes a neighbourhood kitchen, with a shared table where the counter used to be and a courtyard open for Sunday lunch.</p>
            <table className="w-full border-collapse min-[1105px]:mt-auto">
              <caption className="sr-only">Almond Yard project data</caption>
              <tbody>
                {[["Existing area", "128 m²"], ["Added area", "24 m²"], ["Structure kept", "86%"], ["On site", "26 weeks"]].map(([label, value]) => (
                  <tr key={label} className="group border-b border-neutral-200 last:border-0 dark:border-neutral-800 min-[1105px]:last:[&>*]:pb-0">
                    <th scope="row" className={`${muted} ${TEXT_CLASSES.tableLabel} py-2 pr-3 text-left align-baseline`} data-web-text="tableLabel" style={text("tableLabel")}>
                      <span className="block min-[1105px]:group-last:[text-box-trim:trim-end] min-[1105px]:group-last:[text-box-edge:cap_alphabetic]">{label}</span>
                    </th>
                    <td className={`${TEXT_CLASSES.tableValue} py-2 text-right align-baseline whitespace-nowrap`} data-web-text="tableValue" style={text("tableValue")}>
                      <span className="block min-[1105px]:group-last:[text-box-trim:trim-end] min-[1105px]:group-last:[text-box-edge:cap_alphabetic]">{value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid min-w-0 gap-x-8 gap-y-5 border-t border-neutral-200 pt-4 dark:border-neutral-700 min-[721px]:col-span-8 min-[1105px]:col-span-9 min-[1105px]:grid-cols-2">
            <div className={prose} style={text("caseBody")}>
              <p>The bakery closed in 2019, leaving its tiled shopfront empty for three years. When a neighbourhood cooking group took on the lease, the display counter still ran across the full width of the shop. It was the first thing we took out.</p>
              <p>Behind it, we kept the tiled walls and timber shelving. The counter’s timber was reworked into a long table, with room for a class to cook at one end while the other is laid for lunch.</p>
              <p className={trimToBaseline}>We moved the ovens to the party wall and ran the new services behind the shelving. From the pavement, you can still see the full depth of the shop, right through to the doors at the back.</p>
            </div>
            <div className={prose} style={text("caseBody")}>
              <p>At the back, a covered passage leads to the courtyard. On Sundays, the doors fold back and food goes straight from the kitchen to the tables outside. The old bread racks now hold plates and glasses within reach of the door.</p>
              <p>We laid the courtyard with bricks salvaged from the rear wall. A shallow ramp takes out the step between the kitchen and the yard, so people can move freely between the two and wheel a trolley of dishes outside.</p>
              <figure>
                <blockquote className="text-[length:var(--website-size,20px)] leading-snug" style={text("caseTitle")}>
                  <p>“We set out twelve places for Sunday lunch. By noon we’re usually looking for more chairs.”</p>
                </blockquote>
                <figcaption className={`${muted} ${trimToBaseline} mt-2`}>Nadia Lewis, kitchen coordinator</figcaption>
              </figure>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
