"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconBus,
  IconDiscount2,
  IconMapPin,
  IconClock,
  IconDeviceMobile,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

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

  const compareVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3 },
    },
  };

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
      icon: <IconMapPin size={48} className="text-white" />,
      title: t("benefits.extensiveRoutes.title"),
      description: t("benefits.extensiveRoutes.description"),
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
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

          {/* Comparison Section */}
          <motion.div
            className="mt-16 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-shadow duration-300"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={compareVariants}
          >
            {/* Comparison Header */}
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
                {t("comparison.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Other Transportation */}
              <div className="bg-gray-50 p-6 sm:p-8 border-r border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 inline-flex items-center justify-center bg-gray-200 rounded-full mr-3 text-gray-700 text-sm font-bold">
                    VS
                  </span>
                  {t("comparison.others.title")}
                </h4>
                <ul className="space-y-4 text-gray-600">
                  {[1, 2, 3, 4, 5, 6].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>{t(`comparison.others.points.${item}`)}</span>
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
                  {t("comparison.vitalTrans.title")}
                </h4>
                <ul className="space-y-4 text-gray-700">
                  {[1, 2, 3, 4, 5, 6].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{t(`comparison.vitalTrans.points.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comparison Footer */}
            <div className="bg-gradient-to-r from-[#1e3a8a]/10 to-[#c8102e]/10 p-4 text-center">
              <p className="text-[#1e3a8a] font-medium">
                {t("comparison.footer")}
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
