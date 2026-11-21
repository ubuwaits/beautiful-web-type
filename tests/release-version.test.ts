import { describe, expect, it } from "vitest";
import { compareReleaseVersions } from "../scripts/release-version";

describe("upstream release comparison", () => {
  it.each([
    ["2.0", "1.9", "older"],
    ["1.9", "2.0", "newer"],
    ["2.9", "v2.10", "newer"],
    ["v2.0.0", "2", "current"],
    ["3.052R", "3.052R/1.072-Italic", "current"],
    ["v4.005R", "4.005-vf", "current"],
    ["v1.012", "v1.010", "older"],
    ["release_1.3", "release_1.2", "older"],
    ["2.0", "3.0R/1.0-Italic", "indeterminate"],
    ["1.010", "1.1", "indeterminate"],
    ["1.0", "1.1-beta", "indeterminate"],
    ["", "1.0", "indeterminate"],
    ["winter", "spring", "indeterminate"]
  ])("%s against %s is %s", (recorded, upstream, expected) => {
    expect(compareReleaseVersions(recorded, upstream)).toBe(expected);
  });
});
