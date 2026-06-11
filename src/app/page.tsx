import { Apply } from "@/components/landing/Apply";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { Opportunity } from "@/components/landing/Opportunity";
import { Problem } from "@/components/landing/Problem";
import { SecondaryActions } from "@/components/landing/SecondaryActions";
import { Team } from "@/components/landing/Team";
import { Traction } from "@/components/landing/Traction";


export default function Home() {
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
