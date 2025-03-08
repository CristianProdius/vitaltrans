"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl"; // Import useLocale from next-intl

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <motion.button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={onClick}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-semibold text-gray-800 pr-8 group-hover:text-[#1e3a8a] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-full p-2 ${
            isOpen ? "bg-[#1e3a8a]/20" : "bg-gray-100"
          }`}
        >
          <svg
            className={`w-5 h-5 ${
              isOpen ? "text-[#1e3a8a]" : "text-[#1e3a8a]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="text-gray-600 leading-relaxed pb-6 pr-12"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const t = useTranslations("FAQ");
  const locale = useLocale(); // Get the current locale
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: t("questions.routes.question"),
      answer: t("questions.routes.answer"),
    },
    {
      question: t("questions.booking.question"),
      answer: t("questions.booking.answer"),
    },
    {
      question: t("questions.luggage.question"),
      answer: t("questions.luggage.answer"),
    },
    {
      question: t("questions.discounts.question"),
      answer: t("questions.discounts.answer"),
    },
    {
      question: t("questions.amenities.question"),
      answer: t("questions.amenities.answer"),
    },
    {
      question: t("questions.changes.question"),
      answer: t("questions.changes.answer"),
    },
  ];

  // Function to handle the "Book Your Trip" button click
  const handleBookingClick = () => {
    router.push(`/${locale}/contact`); // Navigate to the contact page with the current locale
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
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

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:border-[#1e3a8a]/20 transition-all duration-300"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
              {t("cta.title")}
            </h3>
            <p className="text-gray-700 mb-6">{t("cta.description")}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <ButtonsCard
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-lg font-medium tracking-wide"
              >
                {t("cta.button")}
              </ButtonsCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
