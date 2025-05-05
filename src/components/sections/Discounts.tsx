"use client";

import { useState, useEffect } from "react";
import {
  IconSchool,
  IconBabyCarriage,
  IconCircleNumber6,
  IconCircleNumber0,
  IconUserCheck,
  IconAccessible,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Discounts = () => {
  const router = useRouter();
  const t = useTranslations("Discounts");

  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useParams();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Redirect on CTA
  const handleBookingClick = () => {
    router.push(`/${locale}/contact`); // Navigate to the contact page
  };

  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Discounts data
  const discountOffers = [
    {
      icon: <IconSchool size={20} color="white" />,
      title: t("discounts.students.title"),
      description: t("discounts.students.description"),
    },
    {
      icon: <IconUserCheck size={20} color="white" />,
      title: t("discounts.elevi.title"),
      description: t("discounts.elevi.description"),
    },
    {
      icon: <IconBabyCarriage size={20} color="white" />,
      title: t("discounts.copii.title"),
      description: t("discounts.copii.description"),
    },
    {
      icon: <IconAccessible size={20} color="white" />,
      title: t("discounts.pensionari.title"),
      description: t("discounts.pensionari.description"),
    },
    {
      icon: <IconCircleNumber6 size={20} color="white" />,
      title: t("discounts.calatorie6.title"),
      description: t("discounts.calatorie6.description"),
    },
    {
      icon: <IconCircleNumber0 size={20} color="white" />,
      title: t("discounts.calatorie10.title"),
      description: t("discounts.calatorie10.description"),
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading & Intro */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl tracking-tight leading-tight">
            {t("headline")}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("intro")}
          </p>
        </motion.div>

        {/* Responsive List / Grid */}
        <motion.ul
          className="
            flex flex-col space-y-6   
            md:space-y-8 
            md:px-8 
            lg:space-y-0             
            lg:grid lg:grid-cols-2   
            xl:grid-cols-3           
            lg:gap-6                 
          "
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {discountOffers.map((offer, index) => (
            <motion.li
              key={index}
              className="relative flex items-start" // for small screens (like a vertical timeline item)
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              {/* Icon Container (small bullet approach) */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-white bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] shadow-md flex items-center justify-center">
                  {offer.icon}
                </div>
              </div>

              {/* Card / text content */}
              <div className="flex-1">
                <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-300">
                  <h3 className="text-[#1e3a8a] text-lg font-semibold mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-12 relative"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"></div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-4">
            {t("callToAction.title")}
          </h3>

          <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t("callToAction.description")}
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ButtonsCard
              className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-base font-medium tracking-wide"
              onClick={handleBookingClick}
            >
              {t("callToAction.button")}
            </ButtonsCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Discounts;
