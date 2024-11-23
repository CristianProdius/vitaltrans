"use client";
import { useTranslations } from "next-intl";

export default function LatestDeals() {
  const t = useTranslations("deals");

  const dealsData = [
    {
      type: "studentDiscount",
      code: "STUDENT25",
      discount: "25%",
    },
    {
      type: "roundTrip",
      code: "RETURN20",
      discount: "20%",
    },
    {
      type: "familyPackage",
      code: "FAMILY30",
      discount: "30%",
    },
    {
      type: "seniorDiscount",
      code: "SENIOR20",
      discount: "20%",
    },
    {
      type: "earlyBird",
      code: "EARLY15",
      discount: "15%",
    },
    {
      type: "groupTravel",
      code: "GROUP25",
      discount: "25%",
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dealsData.map((deal, index) => (
            <div
              key={index}
              className="border border-blue-100 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600 text-xl font-bold">
                  {t(`${deal.type}.title`)}
                </div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {deal.discount}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {t(`${deal.type}.description`)}
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">{t("useCode")}:</p>
                <p className="text-lg font-mono font-bold text-blue-800">
                  {deal.code}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {t("validUntil")}: 2024-12-31
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  {t("applyNow")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
