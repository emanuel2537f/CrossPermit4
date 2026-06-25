import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/site/guides";
import { getGuide, guideHead } from "@/lib/guide-content";

const slug = "theth-to-valbona-guide";

export const Route = createFileRoute("/guides/theth-to-valbona-guide")({
  head: () => guideHead(slug),
  component: GuideRoute,
});

function GuideRoute() {
  const guide = getGuide(slug);
  if (!guide) return null;
  return <GuidePage guide={guide} />;
}
