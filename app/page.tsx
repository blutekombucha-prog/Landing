import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Flavors } from "@/components/flavors";
import { Patagonia } from "@/components/patagonia";
import { FinalCTA } from "@/components/final-cta";
import { DondeEncontrarnos } from "@/components/donde-encontrarnos";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Philosophy />
      <Flavors />
      <Patagonia />
      <FinalCTA />
      <DondeEncontrarnos />
      <Footer />
    </main>
  );
}
