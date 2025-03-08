"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl"; // Import useLocale from next-intl

const CallToActionSection = () => {
  const t = useTranslations("CallToActionSection");
  const router = useRouter();
  const locale = useLocale(); // Get the current locale
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle the "Book Your Trip Now" button click
  const handleBookingClick = () => {
    router.push(`/${locale}/contact`); // Navigate to the contact page with the current locale
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#1e3a8a]/10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1e3a8a]/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c8102e]/10 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7 }}
        >
          <div className="h-3 bg-gradient-to-r from-[#1e3a8a] to-[#c8102e]"></div>

          <div className="p-8 sm:p-12 text-center">
            {/* Headline */}
            <motion.h2
              className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("headline")}
            </motion.h2>

            <motion.p
              className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t("description")}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <ButtonsCard
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-xl font-medium tracking-wide"
              >
                {t("bookTrip")}
              </ButtonsCard>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t("tagline")}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
