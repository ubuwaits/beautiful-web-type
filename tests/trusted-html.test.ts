import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { TrustedHtml } from "@/components/trusted-html";

describe("TrustedHtml", () => {
  it("renders inline HTML instead of escaping it", () => {
    const html = renderToStaticMarkup(
      createElement(TrustedHtml, {
        as: "h4",
        html:
          'Inspired by late 19<span class="ordinals">th</span> century forms and paired with <a href="/linked-serif/">Linked Serif</a>.'
      })
    );

    expect(html).toContain('<span class="ordinals">th</span>');
    expect(html).toContain('<a href="/linked-serif/">Linked Serif</a>');
    expect(html).not.toContain("&lt;span");
    expect(html).not.toContain("&lt;a");
  });
});
