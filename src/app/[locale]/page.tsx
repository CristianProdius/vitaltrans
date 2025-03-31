"use client";
import Hero from "@/components/sections/Hero";
import Discounts from "@/components/sections/Discounts";
import ServicesOverview from "@/components/sections/ServicesOverview";
import BenefitsSection from "@/components/sections/BenefitsSection";
//import Testimonials from "@/components/sections/Testimonials";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQ from "@/components/sections/FAQ";
import CallToActionSection from "@/components/sections/CallToActionSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactWidget from "@/components/ui/ContactWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorksSection />
      <Discounts />
      <ServicesOverview />
      <BenefitsSection />
      {/*<Testimonials />*/}

      <FAQ />
      <CallToActionSection />
      <Footer />
      <ContactWidget />
    </main>
  );
}
