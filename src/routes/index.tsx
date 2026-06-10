import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Traction } from "@/components/landing/Traction";
import { Opportunity } from "@/components/landing/Opportunity";
import { Team } from "@/components/landing/Team";
import { SecondaryActions } from "@/components/landing/SecondaryActions";
import { Apply } from "@/components/landing/Apply";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mamaket Founding Council — Operation SDC" },
      { name: "description", content: "A strictly limited Founding Circle for investors and operators shaping the future of cultural commerce." },
      { property: "og:title", content: "Mamaket Founding Council" },
      { property: "og:description", content: "Invitation-only seed round building America's first cultural commerce marketplace." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Problem />
      <Traction />
      <Opportunity />
      <Team />
      <SecondaryActions />
      <Apply />
      <Footer />
    </main>
  );
}
