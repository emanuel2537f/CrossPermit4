import heroImg from "@/assets/hero-mountains.jpg";
import thethImg from "@/assets/dest-theth.jpg";
import valbonaImg from "@/assets/dest-valbona.jpg";
import rugovaImg from "@/assets/dest-rugova.jpg";
import korabImg from "@/assets/dest-korab.jpg";

export type GuideSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
};

export const siteUrl = "https://crosspermit.com";
export const siteName = "CrossPermit";
export const ogImageUrl = `${siteUrl}/og-image.png`;

export const guides: Guide[] = [
  {
    slug: "green-border-permit-albania",
    title: "Green Border Crossing Permit Albania Guide",
    seoTitle: "Green Border Crossing Permit Albania Guide | CrossPermit",
    metaDescription:
      "Learn when a green border crossing permit Albania request is needed, what documents to prepare, and how CrossPermit helps with official application support.",
    excerpt:
      "A practical overview of Albania border crossing permit requirements, documents, timing, and route preparation.",
    category: "Permits",
    readTime: "6 min read",
    image: heroImg,
    imageAlt: "Green border crossing permit Albania mountain route - CrossPermit",
    intro:
      "A green border crossing permit Albania request may be needed when your mountain route crosses designated border zones away from standard road checkpoints. This guide explains when permits matter, what information authorities usually request, and how to prepare before cross-border hiking Albania routes.",
    sections: [
      {
        id: "when-you-need-a-permit",
        title: "When You Need A Green Border Permit",
        body: [
          "Green border permits are generally connected to planned travel through mountain areas where Albania meets neighboring countries. These are not ordinary tourist checkpoints. They are remote crossings, trail corridors, or border-zone routes where authorities need traveler details before the trip.",
          "If your itinerary includes cross-border hiking Albania routes, remote ridgelines, or overnight movement near a frontier, it is wise to check permit requirements before booking transport or accommodation. Requirements can vary by route, season, group size, and the authority responsible for the crossing.",
        ],
        bullets: [
          "Routes near Albania, Kosovo, Montenegro, or North Macedonia border areas",
          "Multi-day hikes that move between countries",
          "Organized expeditions or guided groups in border zones",
          "Remote mountain travel where standard checkpoints are not used",
        ],
      },
      {
        id: "documents-and-details",
        title: "Documents And Travel Details To Prepare",
        body: [
          "Most Albania border crossing permit requests require clear traveler information. Prepare names exactly as shown on passports or ID cards, nationality, date of birth, document number, planned dates, route details, and a contact phone number.",
          "You should also prepare a copy of your passport or identification document. If you travel as a group, collect the same details for every traveler. Clean, complete information reduces back-and-forth and helps the official application support process move faster.",
        ],
      },
      {
        id: "timing-and-approval",
        title: "Timing, Review, And Approval",
        body: [
          "Permit timing can depend on route complexity, border authority workload, holidays, weather disruptions, and seasonal travel volume. Sending the request several days before the planned crossing is safer than waiting until the last moment.",
          "CrossPermit helps organize the required details, prepare the application package, and submit it for the relevant approval process. Approval is not instant and cannot be guaranteed, but a complete request gives authorities the best possible basis for review.",
        ],
      },
      {
        id: "travel-preparation",
        title: "Practical Travel Preparation",
        body: [
          "A permit is only one part of a safe mountain journey. Check weather, daylight, transport access, accommodation, emergency options, and whether your route is realistic for your group. Border-zone trails can be exposed, remote, and poorly marked in sections.",
          "Keep digital and printed copies of confirmations, carry identification, and make sure your group understands the route before departure. For many Balkan mountain travel permits, the most common delays come from incomplete traveler lists or unclear route descriptions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a green border crossing permit Albania request always required?",
        answer:
          "No. It depends on the route and whether you cross a designated border area away from standard checkpoints. Remote mountain routes are the most common cases where a permit may be needed.",
      },
      {
        question: "Can I apply a day before travel?",
        answer:
          "It is better to apply several days in advance. Processing time can vary by season, route, and authority availability.",
      },
      {
        question: "Does CrossPermit issue the permit directly?",
        answer:
          "CrossPermit helps prepare and submit the application information. Final approval depends on the relevant border authorities.",
      },
    ],
  },
  {
    slug: "peaks-of-the-balkans-permit",
    title: "Peaks Of The Balkans Permit Guide",
    seoTitle: "Peaks Of The Balkans Permit Guide | CrossPermit",
    metaDescription:
      "Plan your Peaks of the Balkans permit with practical notes on cross-border hiking, required details, route timing, and official application support.",
    excerpt:
      "What to know before planning the Peaks of the Balkans trail, border crossings, documents, and timing.",
    category: "Cross-border hiking",
    readTime: "7 min read",
    image: thethImg,
    imageAlt: "Peaks of the Balkans cross-border hiking trail - CrossPermit",
    intro:
      "The Peaks of the Balkans permit is one of the most important planning details for hikers moving between Albania, Kosovo, and Montenegro. The trail is beautiful, but it crosses international borders in remote mountain terrain, so documentation and timing matter.",
    sections: [
      {
        id: "why-the-permit-matters",
        title: "Why The Peaks Of The Balkans Permit Matters",
        body: [
          "The Peaks of the Balkans route connects alpine valleys, villages, and high passes across several countries. Because some crossings happen far from formal road checkpoints, travelers may need permission before entering border zones or crossing between jurisdictions.",
          "A permit helps authorities understand who is traveling, which dates are planned, and which route will be used. This is especially important for cross-border hiking Albania stages, where route descriptions need to be specific enough for review.",
        ],
      },
      {
        id: "information-to-prepare",
        title: "Information To Prepare Before Applying",
        body: [
          "Prepare a full traveler list, passport or ID details, nationalities, planned dates, entry and exit points, guide information if applicable, and accommodation stops. If your itinerary changes, it may affect the application details.",
          "Groups should nominate one clear contact person. A complete traveler spreadsheet can make the Peaks of the Balkans permit process smoother and reduce delays caused by missing data.",
        ],
        bullets: [
          "Full names as shown on passports or ID cards",
          "Passport or ID numbers and dates of birth",
          "Planned daily route and crossing dates",
          "Number of travelers and contact phone number",
        ],
      },
      {
        id: "route-and-season",
        title: "Route, Season, And Weather Considerations",
        body: [
          "Snow, storms, damaged trails, and transport limitations can change the practical plan. Early or late season hikers should be especially careful, because high passes may not match the route timing written in a standard itinerary.",
          "Permit planning should happen alongside route planning. Do not treat the permit as an afterthought. Your route, dates, and crossings are the core details authorities need to review.",
        ],
      },
      {
        id: "how-crosspermit-helps",
        title: "How CrossPermit Helps",
        body: [
          "CrossPermit organizes Balkan mountain travel permits by helping travelers collect the right details and prepare the application package. The goal is to make the process clearer, especially for international hikers unfamiliar with local border requirements.",
          "We can also help you understand whether your planned stages look like border-zone travel, which documents to send, and how early to prepare your request.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do all Peaks of the Balkans hikers need a permit?",
        answer:
          "Permit needs depend on the exact route, countries crossed, dates, and border-zone requirements. Many cross-border itineraries should be checked before travel.",
      },
      {
        question: "How early should I prepare my Peaks of the Balkans permit?",
        answer:
          "Several days before travel is recommended, and earlier is better for larger groups or complicated itineraries.",
      },
      {
        question: "Can my route change after approval?",
        answer:
          "Route changes may affect the approved details. If your plan changes, you should ask whether the permit information also needs to be updated.",
      },
    ],
  },
  {
    slug: "theth-to-valbona-guide",
    title: "Theth To Valbona Hiking Guide",
    seoTitle: "Theth To Valbona Hiking Guide | CrossPermit",
    metaDescription:
      "Plan the Theth to Valbona hike with route notes, timing, safety tips, and when a Theth Valbona permit or border guidance may be relevant.",
    excerpt:
      "A helpful guide to the Theth Valbona trail, timing, preparation, transport, and permit questions.",
    category: "Albanian Alps",
    readTime: "6 min read",
    image: valbonaImg,
    imageAlt: "Theth Valbona permit hiking route - CrossPermit",
    intro:
      "The Theth to Valbona hike is one of Albania's most famous mountain routes. It is usually a domestic hiking route, but travelers often combine it with broader cross-border hiking Albania plans, so it is useful to understand route preparation and when a Theth Valbona permit question may come up.",
    sections: [
      {
        id: "route-overview",
        title: "Route Overview",
        body: [
          "The classic trail links Theth and Valbona through a high mountain pass with wide views of the Albanian Alps. Most hikers complete it in one long day, although timing depends on fitness, weather, trail condition, and how much gear you carry.",
          "The route is popular, but it is still an alpine hike. Expect steep sections, rocky terrain, exposed weather, and limited services between the villages.",
        ],
      },
      {
        id: "permit-context",
        title: "Permit Context For Theth And Valbona",
        body: [
          "The standard Theth to Valbona trail is not the same as crossing an international border. However, many travelers connect Theth, Valbona, Montenegro, Kosovo, or Peaks of the Balkans stages in one itinerary.",
          "If your plan extends into border zones or international crossings, then Balkan mountain travel permits or a green border crossing permit Albania request may become relevant. The key is to check the full itinerary, not only one trail segment.",
        ],
      },
      {
        id: "transport-and-timing",
        title: "Transport, Timing, And Overnight Planning",
        body: [
          "Transport logistics matter because Theth and Valbona are separated by mountain terrain and long road transfers. Many hikers arrange guesthouses in advance and coordinate luggage transport or onward travel.",
          "Start early, carry water, and avoid crossing the pass in unstable weather. If you are linking the hike with cross-border travel, keep enough buffer days for permit approvals and route changes.",
        ],
      },
      {
        id: "what-to-pack",
        title: "What To Pack",
        body: [
          "Bring layers, rain protection, sun protection, a charged phone, offline maps, snacks, and sturdy footwear. Even in good weather, conditions can change quickly near the pass.",
          "Carry identification if your trip continues into border areas. Permit confirmations, if needed for later stages, should be saved offline and printed when possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a permit for Theth to Valbona?",
        answer:
          "The classic Theth to Valbona hike is generally a domestic route, but permit needs can change if your wider itinerary includes border-zone or cross-border travel.",
      },
      {
        question: "How long does the Theth to Valbona hike take?",
        answer:
          "Many hikers take one full day. Actual timing depends on fitness, weather, stops, and trail conditions.",
      },
      {
        question: "Can CrossPermit help with routes beyond Valbona?",
        answer:
          "Yes. CrossPermit can help clarify permit and route guidance if your journey continues toward Kosovo, Montenegro, or other Balkan border areas.",
      },
    ],
  },
  {
    slug: "mount-korab-trekking-guide",
    title: "Mount Korab Trekking Guide",
    seoTitle: "Mount Korab Trekking Guide | CrossPermit",
    metaDescription:
      "Prepare for Mount Korab trekking with route planning, safety notes, border context, and when a Mount Korab trekking permit question may matter.",
    excerpt:
      "Route preparation, safety, border context, and permit planning for Albania's highest mountain.",
    category: "Trekking",
    readTime: "6 min read",
    image: korabImg,
    imageAlt: "Mount Korab trekking route - CrossPermit",
    intro:
      "Mount Korab is Albania's highest summit and one of the most rewarding treks in the region. Because it sits near the Albania and North Macedonia border, hikers should understand route context, local conditions, and when Mount Korab trekking permit questions may become relevant.",
    sections: [
      {
        id: "summit-context",
        title: "Summit And Border Context",
        body: [
          "Korab is a high mountain environment with open ridgelines, changing weather, and limited services. The route is not just a scenic walk; it requires realistic fitness, navigation awareness, and proper timing.",
          "Because the mountain area is close to an international border, travelers should confirm whether their planned route stays within expected local paths or enters areas where border permissions or guidance may be needed.",
        ],
      },
      {
        id: "route-planning",
        title: "Route Planning Essentials",
        body: [
          "Plan the trailhead, transport, start time, turnaround time, weather window, and emergency options before you go. If hiking with a guide, confirm the exact route and whether any permit or notification is recommended.",
          "Balkan mountain travel permits are route-specific. A general mountain plan is not enough if the route crosses sensitive border areas or changes direction near the frontier.",
        ],
        bullets: [
          "Check weather and visibility before departure",
          "Carry identification and offline navigation",
          "Confirm transport access to and from the trailhead",
          "Avoid late starts in unstable mountain conditions",
        ],
      },
      {
        id: "safety-and-season",
        title: "Safety And Best Season",
        body: [
          "The best trekking conditions usually come when snow has cleared and daylight is long enough for a safe return. Early season snow, summer storms, and autumn cold can all change the risk level.",
          "A Mount Korab trekking guide or local route support can be useful if you are unfamiliar with the terrain. The mountain is remote enough that small planning mistakes can become serious.",
        ],
      },
      {
        id: "permit-support",
        title: "Permit And Application Support",
        body: [
          "If your itinerary involves border-zone movement, CrossPermit can help you understand what information may be needed and whether an application package should be prepared.",
          "The goal is to avoid uncertainty before departure. Clear route details, traveler information, and timing make it easier to assess the correct permit path.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Mount Korab suitable for beginners?",
        answer:
          "It is better for hikers with mountain experience or a local guide. The route can be long, exposed, and weather-dependent.",
      },
      {
        question: "Do I need a Mount Korab trekking permit?",
        answer:
          "Permit needs depend on your exact route and whether you enter border-sensitive areas. Check before travel if your plan approaches or crosses a frontier zone.",
      },
      {
        question: "Can CrossPermit help with Korab route guidance?",
        answer:
          "Yes. CrossPermit can help clarify route details, permit questions, and application support for border-zone mountain travel.",
      },
    ],
  },
  {
    slug: "rugova-canyon-hiking-guide",
    title: "Rugova Canyon Hiking Guide",
    seoTitle: "Rugova Canyon Hiking Guide | CrossPermit",
    metaDescription:
      "Explore Rugova Canyon hiking with practical route notes, Kosovo mountain travel tips, and when Rugova hiking permit guidance may be useful.",
    excerpt:
      "A practical hiking guide to Rugova Canyon, route planning, safety, and cross-border permit context.",
    category: "Kosovo hiking",
    readTime: "6 min read",
    image: rugovaImg,
    imageAlt: "Rugova Canyon hiking trail in Kosovo - CrossPermit",
    intro:
      "Rugova Canyon near Peja is one of Kosovo's most dramatic outdoor areas. It is also connected to wider Balkan hiking routes, so travelers often ask about Rugova hiking permit needs, border context, and how to plan safely.",
    sections: [
      {
        id: "why-rugova-matters",
        title: "Why Rugova Canyon Matters",
        body: [
          "Rugova combines canyon scenery, mountain villages, viewpoints, and access to wider alpine routes. It can be a day hiking destination or part of a longer itinerary connected to Peaks of the Balkans stages.",
          "The canyon itself is accessible, but surrounding mountain routes can become remote quickly. Planning should match the exact trail, season, and whether your itinerary continues toward border areas.",
        ],
      },
      {
        id: "permit-context",
        title: "Rugova Hiking Permit Context",
        body: [
          "A simple local walk may not require the same preparation as a cross-border route. However, if Rugova is part of a longer international trek, you may need to clarify permit requirements before departure.",
          "Travelers linking Kosovo, Albania, and Montenegro should pay attention to route descriptions and crossing dates. A Rugova hiking permit question often depends on where the route goes after the canyon area.",
        ],
      },
      {
        id: "route-preparation",
        title: "Route Preparation And Safety",
        body: [
          "Check trail conditions, weather, transport, and daylight before choosing a route. Some trails are straightforward, while others move into steeper terrain where navigation and local knowledge matter.",
          "Bring water, layers, a charged phone, offline maps, and identification. If your route connects to cross-border hiking Albania stages, keep permit confirmations and traveler documents available.",
        ],
      },
      {
        id: "how-crosspermit-helps",
        title: "How CrossPermit Helps With Rugova Plans",
        body: [
          "CrossPermit can help you understand whether your Rugova itinerary is purely local hiking or part of a broader border-zone route. This distinction matters for permit planning.",
          "For multi-country trips, we help organize traveler information, route notes, and official application support for Balkan mountain travel permits where required.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Rugova Canyon good for day hikes?",
        answer:
          "Yes. Rugova has options for day hikes, viewpoints, and outdoor activities, but difficulty depends on the exact route.",
      },
      {
        question: "Do I need a Rugova hiking permit?",
        answer:
          "Local hikes may differ from cross-border routes. Permit needs depend on whether your route enters border zones or connects to international trekking stages.",
      },
      {
        question: "Can Rugova be part of a Peaks of the Balkans itinerary?",
        answer:
          "Yes. Rugova is often connected to broader alpine travel plans, which is why route and permit planning should be checked early.",
      },
    ],
  },
];

export const guideMap = new Map(guides.map((guide) => [guide.slug, guide]));

export function getGuide(slug: string) {
  return guideMap.get(slug);
}

export function guideUrl(slug: string) {
  return `${siteUrl}/guides/${slug}`;
}

export function guideStructuredData(guide: Guide) {
  const url = guideUrl(guide.slug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.metaDescription,
        image: [ogImageUrl],
        datePublished: "2026-06-25",
        dateModified: "2026-06-25",
        author: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/icon-512.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function guideHead(slug: string) {
  const guide = getGuide(slug);
  if (!guide) {
    return {};
  }

  const url = guideUrl(guide.slug);

  return {
    meta: [
      { title: guide.seoTitle },
      { name: "description", content: guide.metaDescription },
      { property: "og:title", content: guide.seoTitle },
      { property: "og:description", content: guide.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: siteName },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:alt", content: `${guide.title} - CrossPermit` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: guide.seoTitle },
      { name: "twitter:description", content: guide.metaDescription },
      { name: "twitter:image", content: ogImageUrl },
      { "script:ld+json": guideStructuredData(guide) },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
