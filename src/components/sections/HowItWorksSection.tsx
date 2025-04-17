"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconBus,
  IconCalendar,
  IconTicket,
  IconMapPin,
} from "@tabler/icons-react";
import { ButtonsCard } from "../ui/buttons";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const HowItWorksSection = () => {
  const t = useTranslations("HowItWorksSection");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useParams();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle the "Book Your Trip Now" button click
  const handleBookingClick = () => {
    router.push(`/${locale}/contact`); // Navigate to the contact page
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

  const steps = [
    {
      icon: <IconCalendar size={48} className="text-white" />,
      title: t("steps.choose.title"),
      description: t("steps.choose.description"),
    },
    {
      icon: <IconTicket size={48} className="text-white" />,
      title: t("steps.book.title"),
      description: t("steps.book.description"),
    },
    {
      icon: <IconMapPin size={48} className="text-white" />,
      title: t("steps.receive.title"),
      description: t("steps.receive.description"),
    },
    {
      icon: <IconBus size={48} className="text-white" />,
      title: t("steps.enjoy.title"),
      description: t("steps.enjoy.description"),
    },
  ];

  // Connector line between steps (for large screens)
  const StepConnector = ({ index }: { index: number }) => {
    if (index === steps.length - 1) return null;

    return (
      <div
        className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#1e3a8a] to-transparent -translate-y-1/2 pointer-events-none"
        style={{ width: "calc(100% - 3rem)" }}
      ></div>
    );
  };

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

      {/* Gradient Background */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              {t("headline")}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group relative"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {index + 1}
                </div>

                {/* Step Icon */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#c8102e] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Connector Line (visible on large screens) */}
                <StepConnector index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Actions */}
          <motion.div
            className="text-center mt-14"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 max-w-2xl mx-auto transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                {t("cta.title")}
              </h3>
              <p className="text-gray-700 mb-6">{t("cta.description")}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <ButtonsCard
                  onClick={handleBookingClick}
                  className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-lg font-medium tracking-wide"
                >
                  {t("bookTrip")}
                </ButtonsCard>
              </motion.div>
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

export default HowItWorksSection;
