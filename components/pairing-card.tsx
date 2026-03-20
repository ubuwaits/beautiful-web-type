import Link from "next/link";

import type { Pairing } from "@/lib/content";
import { resolveTypefaceSlugByName } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type PairingCardProps = {
  pairing: Pairing;
  currentTypefaceName?: string;
};

export function PairingCard({ pairing, currentTypefaceName }: PairingCardProps) {
  const pairedTypefaceName = currentTypefaceName
    ? pairing.typefaces.find((typefaceName) => typefaceName !== currentTypefaceName)
    : undefined;

  return (
    <div className={`sample pairing ${pairing.slug}-sample gr6 gc6`}>
      <div className="text" dangerouslySetInnerHTML={{ __html: pairing.bodyHtml }} />
      <div className={`meta ${pairing.sampleShade === "light" ? "dark" : ""}`}>
        {pairedTypefaceName ? (
          <p>
            Paired with{" "}
            <Link href={getTypefacePath(resolveTypefaceSlugByName(pairedTypefaceName))}>
              {pairedTypefaceName}
            </Link>
          </p>
        ) : (
          <p className="pairing-list">
            {pairing.typefaces.map((typefaceName) => (
              <Link
                key={typefaceName}
                href={getTypefacePath(resolveTypefaceSlugByName(typefaceName))}
              >
                {typefaceName}
              </Link>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
