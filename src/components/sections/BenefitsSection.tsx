"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconBus,
  IconDiscount2,
  IconLanguage,
  IconMapPin,
  IconClock,
  IconDeviceMobile,
} from "@tabler/icons-react";

const benefits = [
  {
    icon: <IconBus size={48} className="text-white" />,
    title: "Modern Fleet",
    description:
      "Comfortable, well-maintained buses with air conditioning, WiFi, and ample luggage space for a pleasant journey.",
  },
  {
    icon: <IconDiscount2 size={48} className="text-white" />,
    title: "Competitive Pricing",
    description:
      "Affordable fares with special discounts for students, children, and regular travelers. Group booking discounts available.",
  },
  {
    icon: <IconLanguage size={48} className="text-white" />,
    title: "Multilingual Staff",
    description:
      "Our staff speaks Romanian, English, and other European languages to assist all passengers with their needs.",
  },
  {
    icon: <IconMapPin size={48} className="text-white" />,
    title: "Extensive Route Network",
    description:
      "Regular connections between major European cities with convenient pickup and drop-off points in city centers.",
  },
  {
    icon: <IconClock size={48} className="text-white" />,
    title: "Reliable Schedules",
    description:
      "Punctual departures and arrivals with real-time updates. We value your time and plan for efficient travel.",
  },
  {
    icon: <IconDeviceMobile size={48} className="text-white" />,
    title: "Easy Online Booking",
    description:
      "Simple reservation system available 24/7, allowing you to book tickets from anywhere with instant confirmation.",
  },
];

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const compareVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3 },
    },
  };

  return (
    <section className="relative bg-white text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Why Travel with Us?
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Vital-Trans, we don&apos;t just transport passengers—we provide a
            complete travel experience with comfort, reliability, and
            convenience across Europe.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1e3a8a]/30 group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Benefit Icon */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              {/* Benefit Title */}
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#c8102e] transition-colors duration-300">
                {benefit.title}
              </h3>
              {/* Benefit Description */}
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          className="mt-20 rounded-2xl shadow-xl overflow-hidden"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={compareVariants}
        >
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
              How We Compare to Other Transportation Options
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Other Transportation */}
            <div className="bg-gray-50 p-6 sm:p-8 border-r border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-gray-200 rounded-full mr-3 text-gray-700 text-sm font-bold">
                  VS
                </span>
                Other Transportation
              </h4>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Higher costs for similar routes",
                  "Unpredictable schedules and delays",
                  "Limited luggage allowance",
                  "Uncomfortable seating for long journeys",
                  "Few or no onboard amenities",
                  "Limited pickup and drop-off locations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vital-Trans */}
            <div className="bg-white p-6 sm:p-8">
              <h4 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] rounded-full mr-3 text-white text-sm font-bold">
                  VT
                </span>
                Vital-Trans
              </h4>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Competitive pricing with special discounts",
                  "Reliable, punctual schedules",
                  "Generous luggage allowance",
                  "Comfortable seating with extra legroom",
                  "Free WiFi, charging ports, and climate control",
                  "Convenient city center pickup and drop-off points",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1e3a8a]/10 to-[#c8102e]/10 p-4 text-center">
            <p className="text-[#1e3a8a] font-medium">
              Choose the transportation service that prioritizes your comfort
              and convenience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
