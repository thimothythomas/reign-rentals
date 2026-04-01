import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SearchFilter from "@/components/search-filter";
import TradeIn from "@/components/trade-in";
import FeaturedVehicles from "@/components/featured-vehicles";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Services from "@/components/services";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <SearchFilter />
        <TradeIn />
        <FeaturedVehicles />
        <Testimonials />
        <About />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
