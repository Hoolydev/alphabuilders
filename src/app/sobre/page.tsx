import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SobrePage from "@/components/sections/SobrePage";

export const metadata = {
  title: "Sobre Nós | Alpha Builders",
  description: "A Alpha Builders nasceu da frustração com software mal feito. Somos uma software house que constrói sistemas que realmente funcionam.",
};

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main>
        <SobrePage />
      </main>
      <Footer />
    </>
  );
}
