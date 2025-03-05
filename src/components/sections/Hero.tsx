"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { sendEmail } from "@/lib/send-email";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const router = useRouter();
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    date: "",
    adults: 0,
    children: 0,
    students: 0,
    name: "",
    phone: "",
    email: "",
    termsAccepted: false,
    subject: "",
    message: "",
    travelType: [],
    passengers: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNumberChange = (field: string, value: number) => {
    setFormData({
      ...formData,
      [field]: Math.max(0, value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail({
      ...formData,
      subject: t("bookingInquiry"),
      message: t("bookingDetails"),
      travelType: ["One-way"],
      passengers: {
        adults: formData.adults,
        children: formData.children,
        students: formData.students,
      },
    });
    console.log("Booking submitted:", formData);
  };

  const handleConsultationClick = () => {
    router.push("/contact");
  };

  const handleExploreServicesClick = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
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
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
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
            {/* Primary Button */}
            <ButtonsCard
              className="bg-[#1e3a8a] text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg px-6 py-3"
              onClick={handleConsultationClick}
            >
              {t("contactUs")}
            </ButtonsCard>

            {/* Secondary Button */}
            <ButtonsCard
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg px-6 py-3"
              onClick={handleExploreServicesClick}
            >
              {t("ourRoutes")}
            </ButtonsCard>
          </div>

          {/* Floating Stats */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6">
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-gray-200">{t("yearsExperience")}</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-200">{t("routes")}</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-200">{t("customerSupport")}</p>
            </div>
          </div>
        </div>

        {/* Right side - Booking Form */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {t("bookYourTrip")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Departure and Arrival */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="departure"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("departure")}
                  </label>
                  <select
                    id="departure"
                    name="departure"
                    value={formData.departure}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                    required
                  >
                    <option value="">{t("selectDeparture")}</option>
                    <option value="bucharest">{t("cities.bucharest")}</option>
                    <option value="berlin">{t("cities.berlin")}</option>
                    <option value="paris">{t("cities.paris")}</option>
                    <option value="rome">{t("cities.rome")}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="arrival"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("arrival")}
                  </label>
                  <select
                    id="arrival"
                    name="arrival"
                    value={formData.arrival}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                    required
                  >
                    <option value="">{t("selectArrival")}</option>
                    <option value="london">{t("cities.london")}</option>
                    <option value="madrid">{t("cities.madrid")}</option>
                    <option value="vienna">{t("cities.vienna")}</option>
                    <option value="amsterdam">{t("cities.amsterdam")}</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("date")}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  required
                />
              </div>

              {/* Passengers */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label
                    htmlFor="adults"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("adults")}
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        handleNumberChange("adults", formData.adults - 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full text-center border-y border-gray-300 py-1"
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleNumberChange("adults", formData.adults + 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="children"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("children")}
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        handleNumberChange("children", formData.children - 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full text-center border-y border-gray-300 py-1"
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleNumberChange("children", formData.children + 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="students"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("students")}
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        handleNumberChange("students", formData.students - 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="students"
                      name="students"
                      value={formData.students}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full text-center border-y border-gray-300 py-1"
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleNumberChange("students", formData.students + 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("fullName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("fullNamePlaceholder")}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("phoneNumber")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t("phonePlaceholder")}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a] mt-1"
                  required
                />
                <label
                  htmlFor="termsAccepted"
                  className="ml-2 text-sm text-gray-700"
                >
                  {t("termsText")}{" "}
                  <a href="#" className="text-[#1e3a8a] hover:underline">
                    {t("termsLink")}
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#1e3a8a] py-2 px-4 text-base font-semibold text-white hover:bg-[#152a61] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2 shadow-md"
              >
                {t("completeReservation")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
