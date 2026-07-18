import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const siteUrl = "https://crosspermit.com/";
const siteName = "CrossPermit";
const siteDescription =
  "Get help with green border crossing permits, route guidance, and cross-border mountain travel across Albania, Kosovo, Montenegro, and the Balkans.";
const siteKeywords =
  "green border crossing permit Albania, Albania border crossing permit, Peaks of the Balkans permit, cross-border hiking Albania, Balkan mountain travel permits, Theth Valbona permit, Rugova hiking permit, Mount Korab trekking permit";
const ogImageUrl = "https://crosspermit.com/og-image.png";
const googleAnalyticsId = "G-MN9EWZVFE8";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: "https://crosspermit.com/icon-512.png",
      image: ogImageUrl,
      email: "info@crosspermit.com",
      telephone: "+355685003416",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@crosspermit.com",
        telephone: "+355685003416",
        contactType: "customer support",
        availableLanguage: ["English", "Albanian"],
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#green-border-permit-service`,
      name: "Green Border Crossing Permit Assistance",
      serviceType: "Travel permit assistance and mountain route guidance",
      provider: {
        "@id": `${siteUrl}#organization`,
      },
      areaServed: ["Albania", "Kosovo", "Montenegro", "North Macedonia", "Balkans"],
      description:
        "Support for green border crossing permit Albania requests, Albania border crossing permit guidance, Peaks of the Balkans permit planning, and Balkan mountain travel permits.",
      url: siteUrl,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Green Border Crossing Permit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is an official approval required for specific mountain routes that cross designated border areas. Requirements depend on the route, dates, traveler details, and the relevant authorities.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I request a permit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend sending your information several days before your planned crossing date. Processing time can vary by season, route, and authority approval requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What documents do I need to send?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should send your travel information, passport or ID details, planned route, travel dates, number of travelers, and a copy of your passport or identification document.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with route planning too?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Alongside permit guidance, we can help you understand route options, border crossing points, local conditions, and preparation details for alpine travel.",
          },
        },
        {
          "@type": "Question",
          name: "How will I receive confirmation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the permit process is approved, confirmation and any further instructions will be sent to you by email.",
          },
        },
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b1b11" },
      { title: "CrossPermit | Green Border Crossing Permits in Albania & the Balkans" },
      {
        name: "description",
        content: siteDescription,
      },
      { name: "keywords", content: siteKeywords },
      {
        property: "og:title",
        content: "CrossPermit | Green Border Crossing Permits in Albania & the Balkans",
      },
      {
        property: "og:description",
        content: siteDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:site_name", content: siteName },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "CrossPermit green border crossing permits for Albania and the Balkans",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "CrossPermit | Green Border Crossing Permits in Albania & the Balkans",
      },
      {
        name: "twitter:description",
        content: siteDescription,
      },
      { name: "twitter:image", content: ogImageUrl },
      {
        name: "twitter:image:alt",
        content: "CrossPermit green border crossing permits for Albania and the Balkans",
      },
      { "script:ld+json": structuredData },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: siteUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}

function WhatsAppButton() {
  return (
    <div className="group fixed bottom-5 right-5 z-[100] flex items-center gap-2 sm:bottom-6 sm:right-6">
      <span
        aria-hidden="true"
        className="pointer-events-none translate-x-3 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-1.5 text-sm font-semibold leading-none text-white opacity-0 shadow-[0_5px_18px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
      >
        Chat with us
      </span>
      <a
        href="https://wa.me/355685003416"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CrossPermit on WhatsApp at +355 68 500 3416"
        className="block h-14 w-14 shrink-0 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 focus-visible:scale-105 focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <circle cx="16" cy="15.9" r="12.6" fill="#25D366" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M16.04 2.67A13.17 13.17 0 0 0 4.69 22.52L2.8 29.4l7.05-1.85a13.16 13.16 0 1 0 6.19-24.88Zm0 23.97c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.18 1.1 1.12-4.08-.25-.42a10.83 10.83 0 1 1 9.17 5.13Zm5.94-8.1c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.32-.16-1.37-.5-2.61-1.61a9.77 9.77 0 0 1-1.81-2.25c-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.21.05-.4-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.4-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.21 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.69.79.25 1.5.21 2.07.13.63-.1 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38Z"
          />
        </svg>
      </a>
    </div>
  );
}
