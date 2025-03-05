"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconTruck,
  IconCash,
  IconGlobe,
  IconSettings,
  IconClock,
  IconDeviceAnalytics,
} from "@tabler/icons-react";

const benefits = [
  {
    icon: <IconTruck size={48} className="text-white" />,
    title: "Proven Industry Experience",
    description:
      "3+ years in trucking. Our dispatchers are well-versed in FMCSA regulations, Hours of Service rules, and best practices.",
  },
  {
    icon: <IconCash size={48} className="text-white" />,
    title: "Reasonable Fee",
    description:
      "We focus on quality service without cutting into owner-operator profits. Affordable fees allow you to grow your fleet.",
  },
  {
    icon: <IconGlobe size={48} className="text-white" />,
    title: "Multilingual Dispatchers",
    description:
      "Fluent in English, Russian, and Romanian. No misunderstandings with brokers or shippers—smooth communication guaranteed.",
  },
  {
    icon: <IconSettings size={48} className="text-white" />,
    title: "Tailored Solutions",
    description:
      "We integrate seamlessly with your TMS or software platforms, ensuring minimal disruptions and real-time updates.",
  },
  {
    icon: <IconClock size={48} className="text-white" />,
    title: "24/7 Availability",
    description:
      "Around-the-clock monitoring prevents costly delays. Extended coverage ensures early starts and late-night check calls.",
  },
  {
    icon: <IconDeviceAnalytics size={48} className="text-white" />,
    title: "Advanced Technology",
    description:
      "Utilizing the latest technology to provide real-time tracking and updates, ensuring efficiency and transparency.",
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
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#B8860B] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Why Partner with Us?
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At RoadRanger, we don&apos;t just dispatch—we partner with you to
            ensure success on the road. Here&apos;s why trucking companies trust
            us.
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
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D2B48C]/30 group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Benefit Icon */}
              <div className="bg-gradient-to-br from-[#D2B48C] to-[#B8860B] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              {/* Benefit Title */}
              <h3 className="text-xl font-bold text-[#B8860B] mb-4 group-hover:text-[#8B4513] transition-colors duration-300">
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
          <div className="bg-gradient-to-r from-[#B8860B] to-[#D2B48C] p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
              How We Compare to Traditional Dispatch Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Traditional Dispatch */}
            <div className="bg-gray-50 p-6 sm:p-8 border-r border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-gray-200 rounded-full mr-3 text-gray-700 text-sm font-bold">
                  VS
                </span>
                Traditional Dispatch
              </h4>
              <ul className="space-y-4 text-gray-600">
                {[
                  "High fees that cut into profits",
                  "Limited availability and support",
                  "Generic services without customization",
                  "Language barriers causing miscommunication",
                  "Outdated technology and tracking methods",
                  "Slow response times to issues",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RoadRanger Dispatch */}
            <div className="bg-white p-6 sm:p-8">
              <h4 className="text-xl font-bold text-[#B8860B] mb-6 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-gradient-to-br from-[#D2B48C] to-[#B8860B] rounded-full mr-3 text-white text-sm font-bold">
                  RR
                </span>
                RoadRanger Dispatch
              </h4>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Reasonable fees to maximize owner profits",
                  "24/7 availability for seamless operations",
                  "Tailored solutions for every client",
                  "Multilingual communication (English, Russian, Romanian)",
                  "Advanced technology integration",
                  "Rapid response to any issues on the road",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D2B48C]/10 to-[#B8860B]/10 p-4 text-center">
            <p className="text-[#8B4513] font-medium">
              Choose the dispatch service that puts your success first
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
