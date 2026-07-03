import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
