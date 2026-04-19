import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import ClientsLogoStrip from "@/components/sections/ClientsLogoStrip";
import BotsAIHumansSection from "@/components/sections/BotsAIHumansSection";
import OmnichannelSection from "@/components/sections/OmnichannelSection";
import AgentsStore from "@/components/sections/AgentsStore";
import ProductsNavBar from "@/components/sections/ProductsNavBar";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Alpha Builders | SuperApp de Agentes de IA para Empresas",
  description:
    "Plataforma de Agentes de IA e desenvolvimento de software personalizado. Alpha AI, Voice, Bots e Chat — tudo integrado para sua empresa.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroBanner />
        <SolutionsGrid />
        <ClientsLogoStrip />
        <BotsAIHumansSection />
        <OmnichannelSection />
        <AgentsStore />
        <ProductsNavBar />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
