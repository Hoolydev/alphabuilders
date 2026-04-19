import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogListing from "@/components/sections/BlogListing";

export const metadata = {
  title: "Blog | Alpha Builders",
  description: "Insights sobre software, automação e inteligência artificial para empresas que querem crescer.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogListing />
      </main>
      <Footer />
    </>
  );
}
