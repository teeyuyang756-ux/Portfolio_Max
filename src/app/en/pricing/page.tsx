import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function PricingPageEn() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Pricing lang="en" />
      </main>
      <Footer lang="en" />
    </div>
  );
}
