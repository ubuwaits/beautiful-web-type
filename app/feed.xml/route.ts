import { getLatestTypefaces } from "@/lib/content";
import { buildAtomFeedXml } from "@/lib/feed";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildAtomFeedXml(getLatestTypefaces()), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8"
    }
  });
}
