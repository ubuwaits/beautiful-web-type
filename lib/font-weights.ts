import type { Weight } from "./content/types";

export function getRegularWeight(weights: readonly Weight[]): number {
  return weights.find(({ name }) => name === "Regular")?.weight ?? 400;
}
