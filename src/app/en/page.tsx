import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeEn() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero lang="en" />
        <BeforeAfter lang="en" />
        <Projects lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </div>
  );
}
