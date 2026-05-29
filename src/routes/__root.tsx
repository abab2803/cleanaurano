import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Siden finnes ikke</h2>
        <p className="mt-2 text-sm text-muted-foreground">Lenken kan være utdatert eller skrevet feil.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Noe gikk galt</h1>
        <p className="mt-2 text-sm text-muted-foreground">Prøv å laste siden på nytt.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Prøv igjen
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
            Forside
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
      { title: "CleanAura – Profesjonell rengjøring i Oslo, Bærum, Asker, Lillestrøm & Drammen" },
      { name: "description", content: "CleanAura leverer premium rengjøring til hjem og bedrifter. Hjemmerengjøring, flyttevask, kontorvask, vindusvask og mer. Fast lav pris og 100 % fornøydhetsgaranti." },
      { name: "author", content: "CleanAura" },
      { property: "og:title", content: "CleanAura – Profesjonell rengjøring" },
      { property: "og:description", content: "Premium rengjøring for hjem og bedrift. Fast lav pris, miljøvennlig, godkjent-garanti." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CleanAura" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CleaningService",
          name: "CleanAura",
          url: "https://cleanaura.no",
          telephone: "+47 451 31 748",
          email: "post@cleanaura.no",
          address: { "@type": "PostalAddress", addressLocality: "Oslo", addressCountry: "NO" },
          areaServed: ["Oslo", "Bærum", "Asker", "Lillestrøm", "Drammen"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <head>
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
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
