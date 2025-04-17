"use client";

import { useState, useEffect } from "react";
import { IconBus, IconMapPin, IconClock } from "@tabler/icons-react";
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

  // Framer Motion variants
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
      icon: <IconClock size={48} className="text-white" />,
      title: t("services.reliableSchedules.title"),
      description: t("services.reliableSchedules.description"),
    },
  ];

  return (
    <section id="services-section" className="relative overflow-hidden">
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

      {/* Main Gradient Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

        <div className="max-w-7xl mx-auto">
          {/* Section Headline */}
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

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#1e3a8a]/30 group"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                {/* Service Icon */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#c8102e] transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Service Description */}
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 flex-grow">
                  {service.description}
                </p>
                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="mt-4 text-[#1e3a8a] hover:text-[#c8102e] font-semibold transition-all flex items-center"
                ></Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Actions */}
          <motion.div
            className="text-center mt-16 relative"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-4">
              {t("cta.title")}
            </h3>

            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
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

export default ServicesOverview;
