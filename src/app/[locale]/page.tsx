/*
 * Home Page (src/app/page.tsx)
 * ===========================
 * - Hero Section:
 *   - Main headline (e.g., "Professional Truck Dispatch Services")
 *   - Subheadline explaining your value proposition
 *   - Primary CTA button (e.g., "Get a Free Consultation")
 *   - Background image (high-quality image of trucks or logistics)
 *   - Optional floating stats (e.g., "X+ carriers served", "Y+ years in business")
 *
 * - Problem Statement Section:
 *   - Headline addressing pain points
 *   - 3-4 common challenges trucking companies face
 *   - Visuals illustrating these challenges
 *   - Transition to your solution
 *
 * - Services Overview Section:
 *   - Section headline
 *   - 4-6 core services with icons
 *   - Brief description for each service
 *   - "Learn More" link to services page
 *   - Secondary CTA button
 *
 * - Benefits Section:
 *   - Headline highlighting value (e.g., "Why Choose Our Dispatch Services?")
 *   - 3-5 key benefits with supporting icons/graphics
 *   - Brief explanation of how each benefit impacts the client's business
 *   - Optional comparison with traditional methods or competitors
 *
 * - Featured Testimonial Section:
 *   - 1-2 prominent client testimonials
 *   - Client photo, name, and company information
 *   - Pull quote highlighting results achieved
 *   - Link to more testimonials
 *
 * - How It Works Section:
 *   - Step-by-step process visualization (3-5 steps)
 *   - Brief description of each step
 *   - Graphics or icons for each step
 *   - CTA button to start the process
 *
 * - FAQ Preview Section:
 *   - 3-4 most common questions with answers
 *   - Link to full FAQ page or section
 *
 * - Call-to-Action Section:
 *   - Final compelling headline
 *   - Subheadline reiterating value proposition
 *   - Primary CTA button
 *   - Optional secondary CTA (e.g., "Learn More")
 */

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
    </main>
  );
}
