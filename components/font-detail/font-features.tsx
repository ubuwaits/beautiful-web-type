import { TrustedHtml } from "@/components/layout/trusted-html";

/** Layout and typography for the authored OpenType feature specimens. */
export function FontFeatures({ html }: { html: string }) {
  return (
    <TrustedHtml
      id="features"
      html={html}
      className="feature-list max-[720px]:text-center scroll-mt-20 mb-(--section-gap) space-y-6 min-[721px]:space-y-8
        [&>.type-detail-table:first-child]:border-t-2 [&>.type-detail-table:first-child]:border-t-neutral-200/60 dark:[&>.type-detail-table:first-child]:border-t-neutral-800/80
        [&>.type-detail-table:first-child]:[border-top-style:solid]
        [&>.type-detail-table:first-child]:pt-6 min-[721px]:[&>.type-detail-table:first-child]:pt-8
        [&>.type-detail-table:last-child]:border-b-2 [&>.type-detail-table:last-child]:border-b-neutral-200/60 dark:[&>.type-detail-table:last-child]:border-b-neutral-800/80
        [&>.type-detail-table:last-child]:[border-bottom-style:solid]
        [&>.type-detail-table:last-child]:pb-6 min-[721px]:[&>.type-detail-table:last-child]:pb-8
        [&>.type-detail-table+.type-detail-table]:border-t [&>.type-detail-table+.type-detail-table]:border-t-neutral-200/60 dark:[&>.type-detail-table+.type-detail-table]:border-t-neutral-800/80
        [&>.type-detail-table+.type-detail-table]:[border-top-style:solid]
        [&>.type-detail-table+.type-detail-table]:pt-6 min-[721px]:[&>.type-detail-table+.type-detail-table]:pt-8
        [&>.type-detail-table]:grid [&>.type-detail-table]:grid-cols-1 [&>.type-detail-table]:items-start [&>.type-detail-table]:gap-(--gutter)
        max-[720px]:[&>.type-detail-table]:gap-y-8
        min-[721px]:[&>.type-detail-table]:grid-cols-12
        min-[721px]:[&>.type-detail-table>.meta]:col-span-3 min-[721px]:[&>.type-detail-table>.examples]:col-span-9
        [&>.type-detail-table>.meta]:min-w-0 [&>.type-detail-table>.meta]:flex-col
        [&>.type-detail-table>.meta]:self-start [&>.type-detail-table>.meta]:justify-start
        max-[720px]:[&>.type-detail-table>.meta]:items-center max-[720px]:[&>.type-detail-table>.meta]:text-center
        [&>.type-detail-table>.meta]:gap-1 [&>.type-detail-table>.meta>.code]:mt-0
        [&>.type-detail-table>.meta]:shadow-none [&>.type-detail-table>.meta]:wrap-anywhere
        [&>.type-detail-table>.examples]:min-w-0 [&>.type-detail-table>.examples]:justify-start
        max-[720px]:[&>.type-detail-table>.examples]:justify-center
        [&>.type-detail-table>.examples]:flex-row [&>.type-detail-table>.examples]:flex-wrap
        [&>.type-detail-table>.examples]:items-start [&>.type-detail-table>.examples]:content-start
        [&>.type-detail-table>.examples>div]:max-w-full
        [&>.type-detail-table>.meta>.name]:[text-box-trim:trim-start] [&>.type-detail-table>.meta>.name]:[text-box-edge:cap_alphabetic]
        [&>.type-detail-table>.examples>div:has(>span)]:grid [&>.type-detail-table>.examples>div:has(>span)]:grid-cols-[max-content_max-content]
        [&>.type-detail-table>.examples>div:has(>span)]:items-start [&>.type-detail-table>.examples>div:has(>span)]:gap-x-1
        [&>.type-detail-table>.examples>div:has(>span)>p]:col-span-full
        [&>.type-detail-table>.examples>div>span]:[text-box-trim:trim-start] [&>.type-detail-table>.examples>div>span]:[text-box-edge:cap_alphabetic]
        [&>.type-detail-table>.examples_h1]:[text-box-trim:trim-start] [&>.type-detail-table>.examples_h1]:[text-box-edge:cap_alphabetic]
        [&_.meta]:flex [&_.meta]:p-0 [&_.meta]:font-(family-name:--ui-face) [&_.meta]:text-base [&_.meta]:leading-4 [&_.meta]:font-bold [&_.meta]:text-neutral-700 dark:[&_.meta]:text-neutral-100 [&_.meta]:text-left
        [&_.examples]:flex [&_.examples]:grow-2 [&_.examples]:gap-8 [&_.examples]:text-center
        [&_.examples>div]:wrap-break-word
        [&_.examples_h1]:mb-2 max-[720px]:[&_.examples_h1]:mb-0 [&_.examples_h1]:text-4xl [&_.examples_h1]:leading-10 [&_.examples_h1]:font-bold
        [&_.examples_p]:leading-6 [&_.examples_span]:text-5xl [&_.examples_span]:leading-14
        [&_.examples.small-characters_span]:text-4xl
        [&_.examples-figures_h1]:text-5xl [&_.examples-figures_h1]:font-normal
        [&_.code]:mt-2 [&_.character-label]:mt-2 [&_.code]:p-0 [&_.character-label]:p-0
        [&_:is(.code,.character-label)]:font-(family-name:--ui-monospaced) [&_:is(.code,.character-label)]:text-sm [&_:is(.code,.character-label)]:font-semibold [&_:is(.code,.character-label)]:not-italic [&_:is(.code,.character-label)]:normal-case [&_:is(.code,.character-label)]:text-neutral-400 [&_:is(.code,.character-label)]:[font-feature-settings:'liga'_off]
        [&_.meta_.code]:leading-4 [&_.character-label+.code]:mt-0
        [&_.fade]:text-neutral-300 dark:[&_.fade]:text-neutral-600 [&_.fade]:[font-feature-settings:'calt'_off,'liga'_off,'clig'_off,'dlig'_off,'subs'_off,'sups'_off]
        [&_.liga]:[font-feature-settings:'liga','clig']
        [&_.ordinals]:[font-feature-settings:'ordn']!
        [&_.lining-proportional]:[font-feature-settings:'lnum','pnum']
        [&_.lining-tabular]:[font-feature-settings:'lnum','tnum']
        [&_.small-caps]:[font-feature-settings:'smcp']
        [&_.calt]:[font-feature-settings:'calt']
        [&_.case]:[font-feature-settings:'case']
        [&_.cpsp]:[font-feature-settings:'cpsp']
        [&_.cswh]:[font-feature-settings:'cswh']
        [&_.dlig]:[font-feature-settings:'dlig']
        [&_.titl]:[font-feature-settings:'titl']
        [&_.swsh]:[font-feature-settings:'swsh']
        [&_.ss01]:[font-feature-settings:'ss01']
        [&_.ss02]:[font-feature-settings:'ss02']
        [&_.ss03]:[font-feature-settings:'ss03']
        [&_.ss04]:[font-feature-settings:'ss04']
        [&_.ss05]:[font-feature-settings:'ss05']
        [&_.ss06]:[font-feature-settings:'ss06']
        [&_.ss07]:[font-feature-settings:'ss07']
        [&_.ss08]:[font-feature-settings:'ss08']
        [&_.ss09]:[font-feature-settings:'ss09']
        [&_.ss10]:[font-feature-settings:'ss10']
        [&_.ss11]:[font-feature-settings:'ss11']
        [&_.ss12]:[font-feature-settings:'ss12']"
    />
  );
}
