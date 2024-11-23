"use client";
import { useTranslations } from "next-intl";

export default function PopularDestinations() {
  const t = useTranslations("destinations");

  const destinations = [
    {
      name: "Brasov",
      image: "/images/brasov.jpg",
      description: t("brasov.description"),
      price: t("price", { amount: "250" }),
    },
    {
      name: "Constanta",
      image: "/images/constanta.jpg",
      description: t("constanta.description"),
      price: t("price", { amount: "200" }),
    },
    {
      name: "Sinaia",
      image: "/images/sinaia.jpg",
      description: t("sinaia.description"),
      price: t("price", { amount: "220" }),
    },
    {
      name: "Sighisoara",
      image: "/images/sighisoara.jpg",
      description: t("sighisoara.description"),
      price: t("price", { amount: "280" }),
    },
    {
      name: "Iasi",
      image: "/images/iasi.jpg",
      description: t("iasi.description"),
      price: t("price", { amount: "180" }),
    },
    {
      name: "Bucharest",
      image: "/images/bucharest.jpg",
      description: t("bucharest.description"),
      price: t("price", { amount: "150" }),
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    {destination.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    {t("bookNow")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
