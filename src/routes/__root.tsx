import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { CookieBanner } from "@/components/CookieBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-9xl text-orange">404</h1>
        <h2 className="mt-4 text-xl text-foreground font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This load got hauled away. Let's get you home.
        </p>
        <Link to="/" className="inline-block mt-6 bg-orange text-background px-6 py-3 font-display font-extrabold hover:bg-orange-bright transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Something broke</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 bg-orange text-background px-6 py-3 font-display font-extrabold">
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RS Junk Removal — You Call. We Haul. | Miami Beach, FL" },
      { name: "description", content: "Fast, same-day junk removal & hauling in Miami Beach and surrounding areas. Cleanouts, furniture, garage. Call 786-572-8486." },
      { name: "author", content: "RS Junk Removal" },
      { property: "og:title", content: "RS Junk Removal — You Call. We Haul." },
      { property: "og:description", content: "Same-day junk removal in Miami Beach, FL." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RouteFade({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={path} className="animate-[fade-in_0.5s_ease-out]">
      {children}
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      {loading && <PageLoader onDone={() => setLoading(false)} />}
      <Navbar />
      <main className="pt-16 min-h-screen">
        <RouteFade><Outlet /></RouteFade>
      </main>
      <Footer />
      <CookieBanner />
    </QueryClientProvider>
  );
}
