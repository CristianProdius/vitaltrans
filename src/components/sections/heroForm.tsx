import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { sendEmail } from "@/lib/send-email";

const HeroForm = () => {
  const t = useTranslations("Hero");
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

  const cityOptions = [
    { value: "bucharest", label: t("cities.bucharest") },
    { value: "berlin", label: t("cities.berlin") },
    { value: "paris", label: t("cities.paris") },
    { value: "rome", label: t("cities.rome") },
    { value: "london", label: t("cities.london") },
    { value: "madrid", label: t("cities.madrid") },
    { value: "vienna", label: t("cities.vienna") },
    { value: "amsterdam", label: t("cities.amsterdam") },
    // ... add more as needed
  ];

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

  const swapLocations = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        departure: prevData.arrival,
        arrival: prevData.departure,
      };
    });
  };

  return (
    <div className="w-full lg:w-1/2 lg:pl-8">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {t("bookYourTrip")}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Departure and Arrival */}
          <div className="flex flex-col md:flex-row md:items-end md:space-x-3">
            {/* Departure */}
            <div className="flex-1">
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
                {cityOptions.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="self-center my-2 md:my-0">
              <button
                type="button"
                onClick={swapLocations}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                title="Swap locations"
              >
                ↔
              </button>
            </div>

            {/* Arrival */}
            <div className="flex-1">
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
                {cityOptions.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
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
  );
};

export default HeroForm;
