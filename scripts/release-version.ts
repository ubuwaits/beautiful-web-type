export type ReleaseComparison = "current" | "newer" | "older" | "indeterminate";

function numericVersions(label: string): string[] {
  const versions = new Set<string>();
  for (const part of label.split(/[/_]/)) {
    const match = /^(?:v\.?)?([0-9]+(?:\.[0-9]+)*)r?(?:-(?:vf|var|variable|upright|roman|italic|u|i))?$/.exec(part.replace(/\s+/g, ""));
    if (match) {
      const version = match[1].replace(/(?:\.0+)+$/, "").replace(/^0+(?=\d)/, "");
      versions.add(version);
    }
  }
  return [...versions];
}

/** Compare the upstream tag to the release recorded in the catalog. */
export function compareReleaseVersions(recorded: string, upstream: string): ReleaseComparison {
  const left = recorded.trim().toLowerCase();
  const right = upstream.trim().toLowerCase();
  if (!left || !right) return "indeterminate";
  if (left === right) return "current";

  const recordedVersions = numericVersions(left);
  const upstreamVersions = numericVersions(right);
  if (recordedVersions.some((version) => upstreamVersions.includes(version))) return "current";
  if (recordedVersions.length !== 1 || upstreamVersions.length !== 1) return "indeterminate";

  const a = recordedVersions[0].split(".");
  const b = upstreamVersions[0].split(".");
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const oldPart = a[i] ?? "0";
    const newPart = b[i] ?? "0";
    if (oldPart === newPart) continue;
    // Font releases also use decimal fractions (e.g. 1.010). Different
    // padding can make decimal and dotted-integer ordering disagree.
    if (oldPart !== "0" && newPart !== "0" && oldPart.length !== newPart.length &&
        (/^0\d/.test(oldPart) || /^0\d/.test(newPart))) return "indeterminate";
    const difference = BigInt(newPart) - BigInt(oldPart);
    if (difference !== BigInt(0)) return difference > BigInt(0) ? "newer" : "older";
  }
  return "current";
}
