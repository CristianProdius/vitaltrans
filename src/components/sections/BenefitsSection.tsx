"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconBus,
  IconDiscount2,
  IconClock,
  IconDeviceMobile,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BenefitsSection = () => {
  const t = useTranslations("BenefitsSection");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const buses = [
    { src: "/images/bus1.png", alt: "Autobuz Vital Trans #1" },
    { src: "/images/bus2.png", alt: "Autobuz Vital Trans #2" },
    { src: "/images/bus3.png", alt: "Autobuz Vital Trans #3" },
    { src: "/images/bus4.png", alt: "Autobuz Vital Trans #4" },
    { src: "/images/bus5.png", alt: "Autobuz Vital Trans #1" },
    { src: "/images/bus6.png", alt: "Autobuz Vital Trans #2" },
    { src: "/images/bus7.png", alt: "Autobuz Vital Trans #3" },
    { src: "/images/bus8.png", alt: "Autobuz Vital Trans #4" },
    { src: "/images/bus9.png", alt: "Autobuz Vital Trans #4" },
  ];

  const benefits = [
    {
      icon: <IconBus size={48} className="text-white" />,
      title: t("benefits.modernFleet.title"),
      description: t("benefits.modernFleet.description"),
    },
    {
      icon: <IconDiscount2 size={48} className="text-white" />,
      title: t("benefits.competitivePricing.title"),
      description: t("benefits.competitivePricing.description"),
    },

    {
      icon: <IconClock size={48} className="text-white" />,
      title: t("benefits.reliableSchedules.title"),
      description: t("benefits.reliableSchedules.description"),
    },
    {
      icon: <IconDeviceMobile size={48} className="text-white" />,
      title: t("benefits.easyBooking.title"),
      description: t("benefits.easyBooking.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Top Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="block relative w-full h-32 text-gray-100"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0V37.49c47.6,8.81,95.15,17.62,142.75,16.76C258.31,52.36,344.29,26.86,430.75,16.31S603.64,4.85,685.59,21.39c84.3,17.14,168.62,45.93,252.91,63C999.2,96.06,1083.55,101.52,1167.9,99.21,1194.69,98.32,1220.46,94.66,1246.2,91.55L1200,0Z" />
        </svg>
      </div>

      {/* Main Gradient Background */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl tracking-tight leading-tight">
              {t("headline")}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#1e3a8a]/30 group"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                {/* Benefit Icon */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Benefit Title */}
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#c8102e] transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Benefit Description */}
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Section */}
          <motion.div
            className="mt-16 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-shadow duration-300"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            {/* Gallery Header */}
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t("gallery.title")}
              </h3>
            </div>
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-white">
              {buses.map((bus, idx) => (
                <motion.div
                  key={idx}
                  className="relative w-full pb-[75%] overflow-hidden rounded-xl shadow hover:shadow-lg cursor-pointer"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* 
         pb-[75%] gives a 4:3 box (75% padding-bottom).
         Switch to pb-[56.25%] for 16:9, pb-[100%] for 1:1, etc. 
       */}
                  <Image
                    src={bus.src}
                    alt={bus.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
            {/* Optional Footer */}
            <div className="bg-gradient-to-r from-[#1e3a8a]/10 to-[#c8102e]/10 p-4 text-center">
              <p className="text-[#1e3a8a] font-medium">
                {t("gallery.footer")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="block relative w-full h-32 text-gray-100"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200,0V37.49c-47.6,8.81-95.15,17.62-142.75,16.76C941.69,52.36,855.71,26.86,769.25,16.31S566.36,4.85,484.41,21.39c-84.3,17.14-168.62,45.93-252.91,63C200.8,96.06,116.45,101.52,32.1,99.21,5.31,98.32-20.46,94.66-46.2,91.55L0,0Z" />
        </svg>
      </div>
    </section>
  );
};

export default BenefitsSection;
