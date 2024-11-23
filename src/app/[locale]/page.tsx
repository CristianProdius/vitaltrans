"use client";
import { useTranslations } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FaTicketAlt, FaRoute, FaPhoneAlt } from "react-icons/fa";
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
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90">
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
              <p className="text-xl mb-8">{t("hero.subtitle")}</p>

              {/* Search Form */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {t("hero.search.from")}
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded"
                      placeholder={t("hero.search.fromPlaceholder")}
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {t("hero.search.to")}
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded"
                      placeholder={t("hero.search.toPlaceholder")}
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {t("hero.search.date")}
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border rounded"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  {t("hero.search.searchButton")}
                </button>
              </div>
            </div>
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
