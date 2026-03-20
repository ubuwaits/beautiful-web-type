import { cache } from "react";

import { getReservedTopLevelSlugs } from "../routes";
import { DEFAULT_CONTENT_DIR, loadContentSource } from "./source";
import type { ContentGraph, Pairing } from "./types";

const RESERVED_TOP_LEVEL_SLUGS = getReservedTopLevelSlugs();

function sortByDateDesc<T extends { dateAdded: string }>(entries: readonly T[]): T[] {
  return [...entries].sort((left, right) =>
    right.dateAdded.localeCompare(left.dateAdded)
  );
}

function validateContentGraph(graph: ContentGraph): void {
  for (const typeface of graph.typefaces) {
    if (RESERVED_TOP_LEVEL_SLUGS.has(typeface.slug)) {
      throw new Error(`Typeface slug "${typeface.slug}" collides with a reserved route`);
    }

    if (!graph.sampleByTypefaceName.has(typeface.name)) {
      throw new Error(`Missing sample for typeface "${typeface.name}"`);
    }

    if (!graph.glyphPageByTypefaceName.has(typeface.name)) {
      throw new Error(`Missing glyph page for typeface "${typeface.name}"`);
    }

    for (const relatedName of typeface.familyFaces ?? []) {
      if (!graph.typefaceByName.has(relatedName)) {
        throw new Error(`Missing family face "${relatedName}" referenced by "${typeface.name}"`);
      }
    }

    for (const relatedName of typeface.comparisonFaces ?? []) {
      if (!graph.typefaceByName.has(relatedName)) {
        throw new Error(
          `Missing comparison face "${relatedName}" referenced by "${typeface.name}"`
        );
      }
    }
  }

  for (const sample of graph.samples) {
    if (!graph.typefaceByName.has(sample.typefaceName)) {
      throw new Error(
        `Sample "${sample.slug}" references missing typeface "${sample.typefaceName}"`
      );
    }
  }

  for (const pairing of graph.pairings) {
    for (const typefaceName of pairing.typefaces) {
      if (!graph.typefaceByName.has(typefaceName)) {
        throw new Error(`Pairing "${pairing.name}" references missing typeface "${typefaceName}"`);
      }
    }
  }
}

export function buildContentGraphFromContentDir(contentDir: string): ContentGraph {
  const { typefaces, glyphPages, samples, pairings, text } = loadContentSource(contentDir);
  const typefaceBySlug = new Map(typefaces.map((entry) => [entry.slug, entry]));
  const typefaceByName = new Map(typefaces.map((entry) => [entry.name, entry]));
  const glyphPageBySlug = new Map(glyphPages.map((entry) => [entry.slug, entry]));
  const glyphPageByTypefaceName = new Map(
    glyphPages.map((entry) => [entry.typefaceName, entry])
  );
  const sampleByTypefaceName = new Map(samples.map((entry) => [entry.typefaceName, entry]));
  const pairingsByTypefaceName = new Map<string, Pairing[]>();

  for (const pairing of pairings) {
    for (const typefaceName of pairing.typefaces) {
      const currentEntries = pairingsByTypefaceName.get(typefaceName) ?? [];
      currentEntries.push(pairing);
      pairingsByTypefaceName.set(typefaceName, currentEntries);
    }
  }

  const graph: ContentGraph = {
    typefaces,
    typefaceBySlug,
    typefaceByName,
    glyphPages,
    glyphPageBySlug,
    glyphPageByTypefaceName,
    samples,
    sampleByTypefaceName,
    pairings,
    pairingsByTypefaceName,
    latestTypefaces: sortByDateDesc(typefaces),
    latestPairings: sortByDateDesc(pairings),
    text
  };

  validateContentGraph(graph);

  return graph;
}

const getCachedContentGraph = cache(() => buildContentGraphFromContentDir(DEFAULT_CONTENT_DIR));

export function getContentGraph(): ContentGraph {
  return getCachedContentGraph();
}
