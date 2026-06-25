import { createFileRoute } from "@tanstack/react-router";

import { GuidesCenter } from "@/components/site/guides";
import { guides, ogImageUrl, siteName, siteUrl } from "@/lib/guide-content";

const guidesDescription =
  "Explore CrossPermit guides for green border crossing permits, cross-border hiking Albania routes, and Balkan mountain travel planning.";

const guidesStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/guides#collection`,
      name: "CrossPermit Guides Center",
      description: guidesDescription,
      url: `${siteUrl}/guides`,
      hasPart: guides.map((guide) => ({
        "@type": "Article",
        headline: guide.title,
        url: `${siteUrl}/guides/${guide.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/guides#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${siteUrl}/guides`,
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Guides Center | CrossPermit" },
      { name: "description", content: guidesDescription },
      { property: "og:title", content: "Guides Center | CrossPermit" },
      { property: "og:description", content: guidesDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/guides` },
      { property: "og:site_name", content: siteName },
      { property: "og:image", content: ogImageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guides Center | CrossPermit" },
      { name: "twitter:description", content: guidesDescription },
      { name: "twitter:image", content: ogImageUrl },
      { "script:ld+json": guidesStructuredData },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/guides` }],
  }),
  component: GuidesCenter,
});
