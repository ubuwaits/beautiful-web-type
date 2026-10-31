import manifest from "@/content/font-tester.json";

export type FontAxis = {
  tag: string;
  name: string;
  min: number;
  max: number;
  default: number;
};

export type TesterFace = {
  style: string;
  weight: number;
  axes: FontAxis[];
  stylisticSets: { tag: string; name: string }[];
};

export type FontTesterData = {
  family: string;
  faces: TesterFace[];
};

export function getFontTesterData(slug: string): FontTesterData {
  const data = (manifest as Record<string, FontTesterData>)[slug];
  if (!data) throw new Error(`Missing font tester data for ${slug}. Run scripts/prepare-font-tester.py.`);
  return data;
}
