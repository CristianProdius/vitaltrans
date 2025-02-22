"use client";
import { useTranslations } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FaTicketAlt, FaRoute, FaPhoneAlt } from "react-icons/fa";
import {
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import PopularDestinations from "@/components/PopularDestinations";
import LatestDeals from "@/components/LatestDeals";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState("");

  const features = [
    {
      icon: <FaTicketAlt className="text-2xl text-blue-600" />,
      title: t("features.easyBooking.title"),
      description: t("features.easyBooking.description"),
    },
    {
      icon: <FaRoute className="text-2xl text-blue-600" />,
      title: t("features.multipleRoutes.title"),
      description: t("features.multipleRoutes.description"),
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-blue-600" />,
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="relative h-[800px] overflow-hidden flex  items-center justify-center">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/modern-bus.png"
            alt="Modern coach bus on highway"
            className="w-full h-full object-cover object-left"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-white  text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-down">
            {t("hero.title")}
          </h1>
          <p className="text-2xl mb-8 opacity-95 leading-snug">
            {t("hero.subtitle")}
          </p>

          {/* Enhanced and fully functional Search Form */}
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_1.5fr_1.5fr] gap-8">
              {/* Start Destination Field */}
              <div className="space-y-2 min-w-0">
                <label className="block text-sm font-medium text-blue-100">
                  {t("hero.search.from")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full p-5 pr-14 text-lg rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-300 placeholder:text-blue-100/80"
                    placeholder={t("hero.search.fromPlaceholder")}
                  />
                  <MapPinIcon className="w-7 h-7 text-white absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Finish Destination Field */}
              <div className="space-y-2 min-w-0">
                <label className="block text-sm font-medium text-blue-100">
                  {t("hero.search.to")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full p-5 pr-14 text-lg rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-300 placeholder:text-blue-100/80"
                    placeholder={t("hero.search.toPlaceholder")}
                  />
                  <MapPinIcon className="w-7 h-7 text-white absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Travel Date Field */}
              <div className="space-y-2 min-w-0">
                <label className="block text-sm font-medium text-blue-100">
                  {t("hero.search.date")}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-5 pr-14 text-lg rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-300"
                  />

                  <CalendarIcon className="w-7 h-7 text-white absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Passengers Field */}
              <div className="space-y-2 min-w-0">
                <label className="block text-sm font-medium text-blue-100">
                  {t("hero.search.passengers")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    className="w-full p-5 pr-14 text-lg rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-300 placeholder:text-blue-100/80"
                    placeholder={t("hero.search.passengersPlaceholder")}
                  />
                  <UserIcon className="w-7 h-7 text-white absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={() => console.log({ fromCity, toCity, date })}
              className="w-full mt-8 bg-blue-400 hover:bg-blue-300 text-blue-900 font-bold py-[18px] rounded-lg transition-all duration-300 flex items-center justify-center gap-[10px] text-lg"
            >
              <MagnifyingGlassIcon className="w-[24px] h-[24px]" />
              {t("hero.search.searchButton")}
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PopularDestinations />
      <LatestDeals />
      <Testimonials />
      <Footer />
    </div>
  );
}
