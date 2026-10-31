"use client";

import { useId, useLayoutEffect, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { FontAxis, FontTesterData, TesterFace } from "@/lib/font-tester";
import type { Weight } from "@/lib/content";

const DEFAULT_TEXT = "Sphinx of black quartz,\njudge my vow.";
const defaultSize = () => window.matchMedia("(max-width: 720px)").matches ? 64 : 128;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const initialAxisValue = (axis: FontAxis) => axis.tag === "wght" ? clamp(400, axis.min, axis.max) : axis.default;

function findFace(faces: TesterFace[], style: string, weight: number) {
  const candidates = faces.filter((face) => face.style === style);
  return candidates.reduce((closest, face) => Math.abs(face.weight - weight) < Math.abs(closest.weight - weight) ? face : closest);
}

function RangeControl({ label, value, min, max, step = 1, unit = "", onChange }: {
  label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (value: number) => void;
}) {
  return (
    <div className="w-32 shrink-0">
      <div className="mb-2 flex h-4 items-baseline justify-between gap-2 font-(family-name:--ui-face) text-xs whitespace-nowrap">
        <span>{label}</span>
        <span className="text-neutral-500 tabular-nums dark:text-neutral-400">{Number(value.toFixed(2))}{unit}</span>
      </div>
      <Slider label={label} min={min} max={max} step={step} value={[value]} onValueChange={([next]) => onChange(next)} />
    </div>
  );
}

export function FontTester({ data, name, weights: weightNames }: { data: FontTesterData; name: string; weights: Weight[] }) {
  const id = useId();
  const defaultStyle = data.faces.some((face) => face.style === "normal") ? "normal" : data.faces[0].style;
  const defaultFace = findFace(data.faces, defaultStyle, 400);
  const [style, setStyle] = useState(defaultStyle);
  const [weight, setWeight] = useState(defaultFace.axes.some((axis) => axis.tag === "wght") ? 400 : defaultFace.weight);
  const [text, setText] = useState(DEFAULT_TEXT);
  const [size, setSize] = useState(128);
  useLayoutEffect(() => setSize(defaultSize()), []);
  const [spacing, setSpacing] = useState(0);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("center");
  const [axisValues, setAxisValues] = useState<Record<string, number>>({});
  const [selectedSets, setSelectedSets] = useState<string[]>([]);
  const face = findFace(data.faces, style, weight);
  const styles = [...new Set(data.faces.map((entry) => entry.style))];
  const weights = [...new Set(data.faces.filter((entry) => entry.style === style).map((entry) => entry.weight))];
  const hasWeightAxis = face.axes.some((axis) => axis.tag === "wght");
  const axisValue = (axis: FontAxis) => clamp(axisValues[axis.tag] ?? initialAxisValue(axis), axis.min, axis.max);
  const activeSets = selectedSets.filter((tag) => face.stylisticSets.some((set) => set.tag === tag));
  const previewStyle: CSSProperties = {
    fontFamily: JSON.stringify(data.family),
    fontSize: size,
    fontWeight: hasWeightAxis ? axisValue(face.axes.find((axis) => axis.tag === "wght")!) : face.weight,
    fontStyle: style,
    fontSynthesis: "none",
    fontOpticalSizing: face.axes.some((axis) => axis.tag === "opsz") ? "none" : "auto",
    fontVariationSettings: face.axes.map((axis) => `"${axis.tag}" ${axisValue(axis)}`).join(", ") || "normal",
    fontFeatureSettings: activeSets.map((tag) => `"${tag}" 1`).join(", ") || "normal",
    letterSpacing: `${spacing / 100}em`,
    lineHeight: 1.1,
    textAlign: alignment,
  };
  const reset = () => {
    setStyle(defaultStyle);
    setWeight(defaultFace.weight);
    setText(DEFAULT_TEXT);
    setSize(defaultSize());
    setSpacing(0);
    setAlignment("center");
    setAxisValues({});
    setSelectedSets([]);
  };

  return (
    <section id="tester" aria-label="Font tester" className="mb-(--section-gap) min-w-0 scroll-mt-20 [--ui-face:var(--ui-monospaced)] font-(family-name:--ui-face)">
        <div className="relative mb-12 flex min-w-0 items-center gap-6 overflow-x-auto py-3 scrollbar-thin *:first:ml-auto *:last:mr-auto" aria-label="Font tester controls">
            {!hasWeightAxis && weights.length > 1 && (
              <div className="w-36 shrink-0">
                <label className="sr-only" htmlFor={`${id}-weight`}>Weight</label>
                <NativeSelect borderless id={`${id}-weight`} value={face.weight} onChange={(event) => setWeight(Number(event.target.value))}>
                  {weights.map((value) => <NativeSelectOption key={value} value={value}>{weightNames.find((entry) => entry.weight === value)?.name ?? value}</NativeSelectOption>)}
                </NativeSelect>
              </div>
            )}
          {styles.length > 1 && (
            <ToggleGroup aria-label="Style" value={[style]} onValueChange={([next]) => { if (next) setStyle(next); }}>
              {styles.map((value) => <ToggleGroupItem value={value} key={value} aria-label={value === "normal" ? "Roman" : "Italic"} title={value === "normal" ? "Roman" : "Italic"}><span className="font-(family-name:--ui-face) text-lg normal-case" style={{ fontStyle: value }}>I</span></ToggleGroupItem>)}
            </ToggleGroup>
          )}
          <ToggleGroup aria-label="Text alignment" value={[alignment]} onValueChange={([next]) => { if (next) setAlignment(next as typeof alignment); }}>
            {(["left", "center", "right"] as const).map((value) => <ToggleGroupItem value={value} key={value} aria-label={`${value[0].toUpperCase()}${value.slice(1)} align`} title={`${value[0].toUpperCase()}${value.slice(1)} align`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d={`M2 4h12 M${value === "left" ? 2 : value === "right" ? 6 : 4} 8h8 M2 12h12`} stroke="currentColor" strokeWidth="1.5" /></svg>
            </ToggleGroupItem>)}
          </ToggleGroup>
          {face.stylisticSets.length > 0 && (
            <div className="shrink-0">
              <span id={`${id}-sets`} className="sr-only">Stylistic sets</span>
              <ToggleGroup multiple aria-labelledby={`${id}-sets`} value={activeSets} onValueChange={setSelectedSets}>
                {face.stylisticSets.map((set) => <ToggleGroupItem value={set.tag} key={set.tag} title={set.name} aria-label={`${set.tag}: ${set.name}`}>{set.tag}</ToggleGroupItem>)}
              </ToggleGroup>
            </div>
          )}
          <RangeControl label="Size" value={size} min={16} max={160} onChange={setSize} />
          {face.axes.filter((axis) => axis.tag === "wght").map((axis) => <RangeControl key={axis.tag} label={axis.name} value={axisValue(axis)} min={axis.min} max={axis.max} onChange={(value) => setAxisValues((current) => ({ ...current, [axis.tag]: value }))} />)}
          <RangeControl label="Letter spacing" value={spacing} min={-10} max={20} unit="%" onChange={setSpacing} />
          {face.axes.some((axis) => axis.tag !== "wght") && (
            <div className="flex shrink-0 items-center gap-6" role="group" aria-label="Variable font axes">
              {face.axes.filter((axis) => axis.tag !== "wght").map((axis) => <RangeControl key={axis.tag} label={axis.tag === "SPCG" ? "Font spacing" : axis.name} value={axisValue(axis)} min={axis.min} max={axis.max} step={Math.min(1, (axis.max - axis.min) / 100)} unit={axis.tag === "wdth" ? "%" : ""} onChange={(value) => setAxisValues((current) => ({ ...current, [axis.tag]: value }))} />)}
            </div>
          )}
          <Button className="size-10 min-h-0! shrink-0 rounded-md bg-transparent! p-0!" onClick={reset} aria-label="Reset font tester" title="Reset">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3v4h4 M3.5 6.5a5 5 0 1 1-.2 4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Button>
        </div>
        <Textarea aria-label={`Try ${name}`} rows={2} spellCheck={false} value={text} onChange={(event) => setText(event.target.value)} style={previewStyle} placeholder="Type your own text…" className="min-h-[calc(2lh+2rem)] resize-none rounded-none border-0 bg-white px-0 py-4 wrap-anywhere dark:bg-neutral-950 focus-visible:ring-0!" />
    </section>
  );
}
