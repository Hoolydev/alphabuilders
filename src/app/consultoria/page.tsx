import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultoriaPage from "@/components/sections/ConsultoriaPage";

export const metadata = {
  title: "Consultoria Técnica | Alpha Builders",
  description: "Ajudamos empresas a mapear processos, escolher tecnologias e definir o roadmap certo. Sem viés de venda, só orientação técnica honesta.",
};

export default function Consultoria() {
  return (
    <>
      <Navbar />
      <main>
        <ConsultoriaPage />
      </main>
      <Footer />
    </>
  );
}
