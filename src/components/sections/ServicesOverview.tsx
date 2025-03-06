"use client";

import { useState, useEffect } from "react";
import {
  IconBus,
  IconMapPin,
  IconLanguage,
  IconClock,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ButtonsCard } from "../ui/buttons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesOverview = () => {
  const t = useTranslations("ServicesOverview");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle the "Book Your Trip" button click
  const handleBookingClick = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <IconBus size={48} className="text-white" />,
      title: t("services.modernFleet.title"),
      description: t("services.modernFleet.description"),
    },
    {
      icon: <IconMapPin size={48} className="text-white" />,
      title: t("services.extensiveRoutes.title"),
      description: t("services.extensiveRoutes.description"),
    },
    {
      icon: <IconLanguage size={48} className="text-white" />,
      title: t("services.multilingualSupport.title"),
      description: t("services.multilingualSupport.description"),
    },
    {
      icon: <IconClock size={48} className="text-white" />,
      title: t("services.reliableSchedules.title"),
      description: t("services.reliableSchedules.description"),
    },
  ];

  return (
    <section
      id="services-section"
      className="relative bg-gradient-to-b from-gray-50 to-white text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            {t("headline")}
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1e3a8a]/30 group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              {/* Service Title */}
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#c8102e] transition-colors duration-300">
                {service.title}
              </h3>
              {/* Service Description */}
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 flex-grow">
                {service.description}
              </p>
              {/* Learn More Link */}
              <Link
                href="/services"
                className="mt-6 text-[#1e3a8a] hover:text-[#c8102e] font-semibold transition-all flex items-center"
              >
                <span className="mr-1 group-hover:mr-2 transition-all">
                  {t("learnMore")}
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Actions */}
        <motion.div
          className="text-center mt-20 relative"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"></div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-8">
            {t("cta.title")}
          </h3>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ButtonsCard
              onClick={handleBookingClick}
              className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-lg font-medium tracking-wide"
            >
              {t("bookTrip")}
            </ButtonsCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
