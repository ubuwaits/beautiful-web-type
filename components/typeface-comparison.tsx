import Link from "next/link";

import type { Typeface } from "@/lib/content";
import { resolveTypefaceSlugByName } from "@/lib/content";

type TypefaceComparisonProps = {
  comparisonFaces: string[];
  typeface: Typeface;
  text: string;
};

export function TypefaceComparison({
  comparisonFaces,
  typeface,
  text
}: TypefaceComparisonProps) {
  return (
    <div className="type-detail-table gr1 gc12">
      <div className="examples flow-column typeface-comparison">
        <div>
          <h1 className={typeface.slug} contentEditable suppressContentEditableWarning>
            {text}
          </h1>
          <p className="character-label">{typeface.name}</p>
        </div>
        {comparisonFaces.map((comparisonFace) => (
          <div key={comparisonFace}>
            <h1
              className={resolveTypefaceSlugByName(comparisonFace)}
              contentEditable
              suppressContentEditableWarning
            >
              {text}
            </h1>
            <p className="character-label">
              <Link href={`/${resolveTypefaceSlugByName(comparisonFace)}/`}>
                {comparisonFace}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
