"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ButtonsCard } from "../ui/buttons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import React from "react";
import HeroForm from "./heroForm";

const Hero = () => {
  const t = useTranslations("Hero");

  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt={t("backgroundAlt")}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left side - Content */}
        <div
          className={`w-full ${
            showForm
              ? "lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
              : "lg:w-full text-center flex flex-col items-center justify-center"
          }`}
        >
          {/* Headline with increased spacing */}
          <div>
            <TextGenerateEffect
              className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl drop-shadow-lg tracking-wider"
              words={t("companyName")}
            />
          </div>

          {/* Tagline with improved contrast */}
          <TextGenerateEffect
            className="mt-6 text-xl text-white md:text-2xl lg:text-3xl max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-md"
            words={t("tagline")}
          />

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            {/* Book Now Button - Shows the form */}
            <ButtonsCard
              className="bg-[#1e3a8a] text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg px-6 py-3"
              onClick={() => setShowForm(true)}
            >
              {t("bookNow")}
            </ButtonsCard>

            {/* Checkout Button - Redirects to checkout page */}
            <ButtonsCard
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg px-6 py-3"
              onClick={() =>
                (window.location.href = "https://constanta-chisinau.md/")
              }
            >
              {t("goToCheckout")}
            </ButtonsCard>
          </div>
        </div>
        {/* Right side - Booking Form */}
        {showForm ? <HeroForm /> : null}
      </div>
    </section>
  );
};

export default Hero;
