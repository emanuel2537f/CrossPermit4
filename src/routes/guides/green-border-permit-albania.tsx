import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/site/guides";
import { getGuide, guideHead } from "@/lib/guide-content";

const slug = "green-border-permit-albania";

export const Route = createFileRoute("/guides/green-border-permit-albania")({
  head: () => guideHead(slug),
  component: GuideRoute,
});

function GuideRoute() {
  const guide = getGuide(slug);
  if (!guide) return null;
  return <GuidePage guide={guide} />;
}
