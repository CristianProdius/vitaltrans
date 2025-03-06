"use client";

import { useState, useEffect } from "react";
import { IconUsers, IconClock, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Problem = () => {
  const t = useTranslations("Problem");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle the "Book Your Trip Now" button click
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

  const challenges = [
    {
      icon: <IconUsers size={48} color="white" />,
      title: t("challenges.uncomfortable.title"),
      description: t("challenges.uncomfortable.description"),
    },
    {
      icon: <IconClock size={48} color="white" />,
      title: t("challenges.unpredictable.title"),
      description: t("challenges.unpredictable.description"),
    },
    {
      icon: <IconMapPin size={48} color="white" />,
      title: t("challenges.limited.title"),
      description: t("challenges.limited.description"),
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
            <span className="block">{t("headline.part1")}</span>
            <span className="block">{t("headline.part2")}</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("intro.description")}
          </p>
        </motion.div>

        {/* Challenges Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1e3a8a]/30 group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#c8102e] transition-colors duration-300">
                {challenge.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition to Solution */}
        <motion.div
          className="text-center mt-20 relative"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"></div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-8">
            {t("solution.title")}
          </h3>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t("solution.description")}
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ButtonsCard
              className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-lg font-medium tracking-wide"
              onClick={handleBookingClick}
            >
              {t("button.bookTrip")}
            </ButtonsCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
