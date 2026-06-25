import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/site/guides";
import { getGuide, guideHead } from "@/lib/guide-content";

const slug = "rugova-canyon-hiking-guide";

export const Route = createFileRoute("/guides/rugova-canyon-hiking-guide")({
  head: () => guideHead(slug),
  component: GuideRoute,
});

function GuideRoute() {
  const guide = getGuide(slug);
  if (!guide) return null;
  return <GuidePage guide={guide} />;
}
