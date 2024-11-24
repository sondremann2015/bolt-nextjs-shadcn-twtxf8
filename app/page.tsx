import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNav />
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}