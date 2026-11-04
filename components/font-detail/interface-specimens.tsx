"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import type { Typeface } from "@/lib/content";

function Icon({ children, className = "size-4" }: { children: ReactNode; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`${className} shrink-0`} aria-hidden="true">{children}</svg>;
}

function ArrowUpRight({ className }: { className?: string }) {
  return <Icon className={className}><path d="M7 17 17 7M7 7h10v10" /></Icon>;
}

const muted = "text-neutral-500 dark:text-neutral-400";
const panel = "min-w-0 rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800 min-[721px]:p-6";

/** Interface compositions inherit the specimen face, including its actual available weights. */
export function InterfaceSpecimens({ weights }: Pick<Typeface, "weights">) {
  const [tasks, setTasks] = useState([true, true, false, false]);
  const [attending, setAttending] = useState(false);
  const completed = tasks.filter(Boolean).length;
  const nearestWeight = (target: number) => weights.reduce((best, entry) =>
    Math.abs(entry.weight - target) < Math.abs(best - target) ? entry.weight : best,
  weights[0].weight);
  const style = {
    fontWeight: nearestWeight(400),
    fontSynthesis: "none",
    "--interface-bold": nearestWeight(600),
  } as CSSProperties;

  return (
    <section id="interfaces" aria-label="Software interfaces" className="mb-(--section-gap) scroll-mt-20" style={style}>
      <h2 className="sr-only">Software interfaces</h2>
      <div className="grid grid-cols-12 gap-4 text-sm leading-6 [&_button]:cursor-pointer [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-neutral-500 min-[1105px]:gap-6 [&_h3]:font-[number:var(--interface-bold)] [&_strong]:font-[number:var(--interface-bold)]">
        <article id="interface-project" className={`${panel} col-span-12 flex flex-col min-[721px]:col-span-6 min-[721px]:row-span-2 min-[1105px]:col-span-4`}>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex -space-x-2" aria-label="Project team: Alex Lee, Morgan Kim, and Jamie Smith">
              {["AL", "MK", "JS"].map((initials, index) => <span key={initials} className={`flex size-9 items-center justify-center rounded-full border-2 border-white text-[10px] dark:border-neutral-950 ${index === 1 ? "bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900" : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"}`}>{initials}</span>)}
            </div>
            <span className="rounded-full border border-neutral-200 px-2 text-[10px] tracking-wide dark:border-neutral-700">PRJ–024</span>
          </div>
          <h3 tabIndex={-1} className="mb-2 text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.15] tracking-tight outline-none">Website redesign</h3>
          <p className={`${muted} mb-5 text-sm leading-6 text-pretty`}>Refresh the studio website for our summer launch. Four tasks, one shared direction.</p>
          <div className="mb-5 flex items-center justify-between gap-3 border-t border-neutral-200 py-3 dark:border-neutral-800">
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-current" /> {completed === 4 ? "Complete" : "In progress"}</span>
            <span className={muted}>Due May 24</span>
          </div>
          <div className="space-y-3">
            {["Gather references", "Explore a direction", "Review the first draft", "Share the final files"].map((task, index) => (
              <label className="flex cursor-pointer items-start gap-3" key={task}>
                <input type="checkbox" checked={tasks[index]} onChange={(event) => setTasks((previous) => previous.map((value, i) => i === index ? event.target.checked : value))} className="peer mt-1 size-4 shrink-0 accent-neutral-900 dark:accent-neutral-100" />
                <span className="peer-checked:text-neutral-500 peer-checked:line-through dark:peer-checked:text-neutral-400">{task}</span>
              </label>
            ))}
          </div>
          <div className="flex flex-1 flex-col justify-center py-5">
          <div className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-[10px] dark:bg-neutral-700">MK</span>
              <span className="text-sm">Morgan Kim</span>
              <span className={`${muted} ml-auto text-xs`}>2h ago</span>
            </div>
            <p className="mb-3 text-sm leading-5">First concepts are ready for review. Let’s focus on navigation and the mobile layout.</p>
            <div className="flex items-center gap-2.5 border-t border-neutral-200 pt-3 dark:border-neutral-700">
              <Icon><path d="M13 3H5v18h14V9l-6-6ZM13 3v6h6M8 13h8M8 17h5" /></Icon>
              <span className="min-w-0 text-sm leading-5">First concepts.pdf <span className={`${muted} text-xs`}>2.4 MB</span></span>
            </div>
          </div>
          </div>
          <div>
            <div className="mb-3 flex justify-between gap-3 text-xs"><span className={muted}>Tasks completed</span><span aria-live="polite">{completed} / 4</span></div>
            <div className="flex gap-1.5" role="progressbar" aria-label="Project completion" aria-valuemin={0} aria-valuemax={4} aria-valuenow={completed}>{[0, 1, 2, 3].map((i) => <span key={i} className={`h-1 flex-1 rounded-full ${i < completed ? "bg-neutral-800 dark:bg-neutral-200" : "bg-neutral-200 dark:bg-neutral-700"}`} />)}</div>
          </div>
        </article>

        <article className={`${panel} col-span-12 flex flex-col min-[721px]:col-span-6 min-[1105px]:col-span-5`}>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><div><h3 className="text-sm">Website traffic</h3><p className={`${muted} text-xs`}>studio.example</p></div><span className={`${muted} text-xs`}>Last 7 days</span></div>
          <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="text-[2.75rem] leading-none tracking-tight tabular-nums">24,608</span>
            <span className="mb-0.5 inline-flex items-center gap-1 rounded-full bg-neutral-200 px-2 py-0.5 text-xs dark:bg-neutral-800"><ArrowUpRight className="size-3" /><span className="sr-only">Increase of </span>12.8%</span>
          </div>
          <p className={`${muted} mt-2 text-xs`}>Unique visitors · compared with the previous 7 days</p>
          <div className="mt-auto pt-4">
          <svg viewBox="0 0 400 104" preserveAspectRatio="none" className="h-20 w-full overflow-visible" role="img" aria-label="Unique visitors over the last 7 days">
            <path d="M0 26H400M0 64H400M0 102H400" className="stroke-neutral-200 dark:stroke-neutral-800" fill="none" />
            <path d="M0 87 25 78 50 82 75 62 100 69 125 54 150 60 175 35 200 46 225 40 250 53 275 25 300 32 325 11 350 19 375 4 400 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className={`${muted} mt-3 flex justify-between text-[11px]`}><span>May 18</span><span>May 20</span><span>May 22</span><span>May 24</span></div>
          </div>
        </article>

        <article className={`${panel} col-span-12 min-[721px]:col-span-6 min-[1105px]:col-span-3`}>
          <h3 className="mb-1 text-sm">Jump to…</h3>
          <p className={`${muted} mb-4 text-xs`}>Find something in your workspace.</p>
          {/* A nonmatching initial value keeps cmdk from selecting and scrolling to an offscreen item on mount. */}
          <Command defaultValue="__unselected__" label="Search example workspace" className="[font-family:inherit]!" onPointerDown={(event) => { if ((event.target as HTMLElement).closest('[cmdk-item]')) event.preventDefault(); }}>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 dark:border-neutral-700">
              <Icon><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></Icon>
              <CommandInput aria-label="Search example workspace" placeholder="Search workspace…" className="h-10! w-full text-xs [font:inherit]!" />
            </div>
            <CommandList className="mt-3 h-40! max-h-40! p-0!">
              <CommandEmpty className="px-2! py-6! text-xs!">No matching pages.</CommandEmpty>
              {[
                { title: "Project tasks", detail: "Website redesign", target: "interface-project" },
                { title: "Shared files", detail: "3 project documents", target: "interface-files" },
                { title: "Design review", detail: "May 24 · 10:30", target: "interface-meeting" },
              ].map((item) => (
                <CommandItem key={item.target} value={`${item.title} ${item.detail}`} className="gap-2 px-2 py-2 text-sm" onSelect={() => {
                  const heading = document.querySelector<HTMLElement>(`#${item.target} h3`);
                  heading?.focus({ preventScroll: true });
                  heading?.scrollIntoView({ behavior: "instant", block: "center" });
                }}>
                  <span><span className="block leading-5">{item.title}</span><span className={`${muted} block text-xs leading-4`}>{item.detail}</span></span>
                  <Icon className="size-3"><path d="M19 5v9H5m5-5-5 5 5 5" /></Icon>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </article>

        <article id="interface-files" className={`${panel} col-span-12 flex flex-col min-[721px]:col-span-6 min-[1105px]:col-span-5`}>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><div><h3 tabIndex={-1} className="text-sm outline-none">Shared files</h3><p className={`${muted} text-xs`}>Website redesign / Resources</p></div><span className={`${muted} text-xs`}>3 files</span></div>
          <table className="mt-auto w-full table-fixed text-left text-sm">
            <thead className={muted}><tr className="border-b border-neutral-200 dark:border-neutral-800"><th className="w-[65%] pb-3 font-normal">Name</th><th className="pb-3 text-right font-normal">Updated</th></tr></thead>
            <tbody>{[["Brand guidelines", "PDF · 2.4 MB", "Just now"], ["Website exploration", "FIG · 18.6 MB", "2 hours ago"], ["Notes on a new direction", "DOC · 48 KB", "Yesterday"]].map(([name, detail, updated]) => <tr key={name} className="border-b border-neutral-200 last:border-0 dark:border-neutral-800"><td className="py-3 pr-3"><div className="flex items-center gap-3"><span className="hidden size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 min-[400px]:flex"><Icon><path d="M13 3H5v18h14V9l-6-6ZM13 3v6h6M8 13h8M8 17h5" /></Icon></span><span className="min-w-0"><span className="block leading-5">{name}</span><span className={`${muted} block text-xs leading-4`}>{detail}</span></span></div></td><td className={`${muted} py-3 text-right align-middle`}>{updated}</td></tr>)}</tbody>
          </table>
        </article>

        <article id="interface-meeting" className={`${panel} col-span-12 flex flex-col min-[721px]:col-span-6 min-[1105px]:col-span-3`}>
          <div className="mb-5 flex items-center gap-3">
            <div className="w-11 shrink-0 overflow-hidden rounded-lg border border-neutral-200 text-center dark:border-neutral-700">
              <div className="bg-neutral-200 text-[10px] leading-5 tracking-wide dark:bg-neutral-800">MAY</div>
              <div className="pt-0 pb-1 text-[1.375rem] leading-6 tabular-nums">24</div>
            </div>
            <div className="min-w-0">
              <h3 tabIndex={-1} className="mb-0 text-[1.375rem] leading-tight tracking-tight outline-none">Design review</h3>
              <p className={`${muted} text-sm leading-5 tabular-nums`}>10:30–11:15</p>
            </div>
          </div>
          <p className={`${muted} mb-5 text-base leading-6`}>Walk through the first website concepts with the team.</p>
          <div className="mt-auto flex items-center gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs dark:bg-neutral-800">MK</span><div className="text-sm leading-5"><p>Morgan Kim</p><p className={muted}>Meeting organizer</p></div></div>
          <button type="button" aria-pressed={attending} onClick={() => setAttending(!attending)} className="mt-4 w-full rounded-lg bg-neutral-900 px-3 py-2 text-sm text-neutral-100 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300">{attending ? "Attending · Undo" : "Accept invitation"}</button>
        </article>
      </div>
    </section>
  );
}
