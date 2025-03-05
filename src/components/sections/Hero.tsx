"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";

import React from "react";

const Hero = () => {
  const router = useRouter();

  // Function to handle the "Get a Free Consultation" button click
  const handleConsultationClick = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  // Function to handle the "Explore Services" button click
  const handleExploreServicesClick = () => {
    // Find the services section and scroll to it
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative bg-white overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.png" // Replace with your background image path
          alt="Trucks on the road"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="RoadRanger Logo"
            width={250}
            height={250}
            className="drop-shadow-md"
          />
        </div>
        {/* Headline with increased spacing */}
        <div>
          <TextGenerateEffect
            className="text-5xl font-extrabold  text-white md:text-6xl lg:text-7xl drop-shadow-lg text-center tracking-wider"
            words="Road Ranger"
          />
        </div>

        {/* Tagline with improved contrast */}
        <TextGenerateEffect
          className="mt-6 text-2xl text-white md:text-3xl lg:text-4xl max-w-3xl mx-auto text-center font-medium drop-shadow-md"
          words="With us, every mile means more money in your pocket!"
        />

        {/* CTA Button */}
        <div className="mt-8 flex justify-center gap-4">
          {/* Primary Button */}
          <ButtonsCard
            className="bg-[#D2B48C] text-black hover:bg-black hover:text-[#D2B48C] transition-all shadow-lg px-8 py-4"
            onClick={handleConsultationClick}
          >
            Get a Free Consultation
          </ButtonsCard>

          {/* Secondary Button */}
          <ButtonsCard
            className="bg-transparent border border-[#D2B48C] text-[#D2B48C] hover:bg-[#D2B48C] hover:text-black transition-all shadow-lg px-8 py-4"
            onClick={handleExploreServicesClick}
          >
            Explore Services
          </ButtonsCard>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">15+</p>
            <p className="text-gray-300">Dispatchers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">3+</p>
            <p className="text-gray-300">Years in Business</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">24/7</p>
            <p className="text-gray-300">Support Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
