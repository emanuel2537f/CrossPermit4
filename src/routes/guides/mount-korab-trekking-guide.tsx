import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/site/guides";
import { getGuide, guideHead } from "@/lib/guide-content";

const slug = "mount-korab-trekking-guide";

export const Route = createFileRoute("/guides/mount-korab-trekking-guide")({
  head: () => guideHead(slug),
  component: GuideRoute,
});

function GuideRoute() {
  const guide = getGuide(slug);
  if (!guide) return null;
  return <GuidePage guide={guide} />;
}
