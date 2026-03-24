import { createElement } from "react";

type TrustedHtmlProps = {
  as?: "div" | "h4" | "p" | "span";
  className?: string;
  html: string;
};

export function TrustedHtml({ as = "div", className, html }: TrustedHtmlProps) {
  return createElement(as, {
    className,
    dangerouslySetInnerHTML: { __html: html }
  });
}
