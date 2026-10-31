import type { CSSProperties } from "react";
import clsx from "clsx";

import type { FeatureSampleOptions, FeatureSettings, FontFeature } from "@/lib/content/types";

const DISABLED_FEATURES = { calt: 0, liga: 0, clig: 0, dlig: 0, subs: 0, sups: 0 };
const TRIM = "[text-box-trim:trim-start] [text-box-edge:cap_alphabetic]";

function settings(value?: FeatureSettings): string | undefined {
  if (value === undefined || value === "normal") return value;
  return Object.entries(value).map(([tag, setting]) => `"${tag}" ${setting}`).join(", ");
}

function sampleStyle(options: FeatureSampleOptions): CSSProperties {
  return {
    fontFeatureSettings: settings(options.features),
    fontVariationSettings: settings(options.axes),
    fontStyle: options.italic ? "italic" : undefined,
    fontOpticalSizing: options.opticalSizing
  };
}

function FeatureLabel({ text, heading = false }: { text: string; heading?: boolean }) {
  return (
    <p className={clsx("p-0 font-(family-name:--ui-monospaced) text-sm font-semibold not-italic normal-case text-neutral-400 [font-feature-settings:'liga'_off]", heading ? "leading-4" : "col-span-full mt-2 leading-6")}>
      {text}
    </p>
  );
}

function Sample({ text, options = {}, faded = false }: { text: string; options?: FeatureSampleOptions; faded?: boolean }) {
  return (
    <span
      className={clsx(TRIM, "leading-14", options.size === "compact" ? "text-[2rem]" : "text-5xl", faded && "text-neutral-300 dark:text-neutral-600")}
      style={sampleStyle(options)} lang={options.language} dir={options.direction}
    >
      {text}
    </span>
  );
}

function FeatureExamples({ feature }: { feature: FontFeature }) {
  const pairClass = "grid max-w-full grid-cols-[max-content_max-content] items-start gap-x-1 wrap-break-word";
  if (feature.type === "comparison") {
    return feature.examples.map((example, index) => {
      const item = typeof example === "string" ? { text: example } : example;
      return (
        <div className={pairClass} key={index}>
          <Sample text={item.text} faded options={{ features: DISABLED_FEATURES, ...feature.before, ...item.before }} />
          <Sample text={item.text} options={{ ...feature.after, ...item.after }} />
          {item.label ? <FeatureLabel text={item.label} /> : null}
        </div>
      );
    });
  }
  if (feature.type === "axis") {
    return feature.values.map((value) => (
      <div className={pairClass} key={value}>
        <Sample text={feature.text} options={{ axes: { [feature.axis]: value } }} />
        <FeatureLabel text={`'${feature.axis}' ${value}`} />
      </div>
    ));
  }
  return feature.examples.map((example, index) => {
    const options = { ...feature.options, ...example.options };
    return (
      <div className="max-w-full wrap-break-word" key={index}>
        <h1
          className={clsx(TRIM, "mb-2 text-5xl leading-10 font-normal max-[720px]:mb-0")}
          style={{ ...sampleStyle(options), fontSize: feature.responsive === false ? undefined : "min(var(--text-5xl), 7.5vw)" }}
          lang={options.language} dir={options.direction}
        >
          {example.reference ? <span className="leading-14 text-neutral-300 dark:text-neutral-600" style={{ fontSize: "inherit", fontFeatureSettings: "normal" }}>{example.reference}</span> : null}
          {example.text}
        </h1>
        <FeatureLabel text={example.label} />
      </div>
    );
  });
}

export function FontFeatures({ features }: { features: FontFeature[] }) {
  return (
    <div id="features" className="feature-list mb-(--section-gap) scroll-mt-20 space-y-6 max-[720px]:text-center min-[721px]:space-y-8">
      {features.map((feature, index) => {
        const code = feature.type === "axis" ? `font-variation-settings: '${feature.axis}';` : feature.type === "comparison" ? feature.code : undefined;
        return (
          <section
            data-font-feature={feature.type} key={index}
            className="grid grid-cols-1 items-start gap-(--gutter) border-t border-neutral-200/60 pt-6 first:border-t-2 last:border-b-2 last:pb-6 dark:border-neutral-800/80 max-[720px]:gap-y-8 min-[721px]:grid-cols-12 min-[721px]:pt-8 min-[721px]:last:pb-8"
          >
            <div className="flex min-w-0 flex-col items-start justify-start gap-1 self-start text-left font-(family-name:--ui-face) text-base leading-4 font-bold text-neutral-700 wrap-anywhere dark:text-neutral-100 max-[720px]:items-center max-[720px]:text-center min-[721px]:col-span-3">
              <p className={TRIM}>{feature.title}</p>
              {code ? <FeatureLabel text={code} heading /> : null}
            </div>
            <div className="flex min-w-0 grow-2 flex-wrap content-start items-start justify-start gap-8 text-center max-[720px]:justify-center min-[721px]:col-span-9">
              <FeatureExamples feature={feature} />
            </div>
          </section>
        );
      })}
    </div>
  );
}
