import { createElement } from "react";

type TrustedHtmlProps = {
  as?: "div" | "h4" | "p" | "span";
  className?: string;
  id?: string;
  html: string;
};

export function TrustedHtml({ as = "div", className, id, html }: TrustedHtmlProps) {
  return createElement(as, {
    className,
    id,
    dangerouslySetInnerHTML: { __html: html }
  });
}
