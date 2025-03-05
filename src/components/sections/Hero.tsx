"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { sendEmail } from "@/lib/send-email";

const Hero = () => {
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
      subject: "Booking Inquiry",
      message: "Please find my booking details attached.",
      travelType: ["One-way"],
      passengers: {
        adults: formData.adults,
        children: formData.children,
        students: formData.students,
      },
    });
    // Handle booking submission
    console.log("Booking submitted:", formData);
    // You can add API call here to process the booking
  };

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
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.png" // Replace with your background image path
          alt="Bus transportation"
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
              words="Vital-Trans"
            />
          </div>

          {/* Tagline with improved contrast */}
          <TextGenerateEffect
            className="mt-6 text-xl text-white md:text-2xl lg:text-3xl max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-md"
            words="Safe and comfortable passenger transportation across Europe!"
          />

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            {/* Primary Button */}
            <ButtonsCard
              className="bg-[#1e3a8a] text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg px-6 py-3"
              onClick={handleConsultationClick}
            >
              Contact Us
            </ButtonsCard>

            {/* Secondary Button */}
            <ButtonsCard
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg px-6 py-3"
              onClick={handleExploreServicesClick}
            >
              Our Routes
            </ButtonsCard>
          </div>

          {/* Floating Stats */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6">
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-200">Routes</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-200">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Right side - Booking Form */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Book Your Trip
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Departure and Arrival */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="departure"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Departure
                  </label>
                  <select
                    id="departure"
                    name="departure"
                    value={formData.departure}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                    required
                  >
                    <option value="">Select departure</option>
                    <option value="bucharest">Bucharest</option>
                    <option value="berlin">Berlin</option>
                    <option value="paris">Paris</option>
                    <option value="rome">Rome</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="arrival"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Arrival
                  </label>
                  <select
                    id="arrival"
                    name="arrival"
                    value={formData.arrival}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                    required
                  >
                    <option value="">Select arrival</option>
                    <option value="london">London</option>
                    <option value="madrid">Madrid</option>
                    <option value="vienna">Vienna</option>
                    <option value="amsterdam">Amsterdam</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date
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
                    Adults
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
                    Children
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
                    Students
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
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Smith"
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
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
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
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
                  I have read and accept the{" "}
                  <a href="#" className="text-[#1e3a8a] hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#1e3a8a] py-2 px-4 text-base font-semibold text-white hover:bg-[#152a61] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2 shadow-md"
              >
                Complete Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
