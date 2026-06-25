import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/site/guides";
import { getGuide, guideHead } from "@/lib/guide-content";

const slug = "peaks-of-the-balkans-permit";

export const Route = createFileRoute("/guides/peaks-of-the-balkans-permit")({
  head: () => guideHead(slug),
  component: GuideRoute,
});

function GuideRoute() {
  const guide = getGuide(slug);
  if (!guide) return null;
  return <GuidePage guide={guide} />;
}
