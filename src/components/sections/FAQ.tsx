"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";

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
        <span className="text-lg font-semibold text-gray-800 pr-8 group-hover:text-[#B8860B] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-full p-2 ${
            isOpen ? "bg-[#D2B48C]/20" : "bg-gray-100"
          }`}
        >
          <svg
            className={`w-5 h-5 ${
              isOpen ? "text-[#B8860B]" : "text-[#D2B48C]"
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
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "What services does RoadRanger provide?",
      answer:
        "RoadRanger offers expert dispatching, load negotiation, fleet monitoring, multilingual communication, and tailored solutions for trucking companies. We handle all the logistics so you can focus on driving and growing your business.",
    },
    {
      question: "How can I get started with RoadRanger?",
      answer:
        "Getting started is simple! Contact us via email or phone to discuss your needs. We'll guide you through the onboarding process step by step, collect your fleet information, and begin finding the best loads for your trucks right away.",
    },
    {
      question: "Is RoadRanger available around the clock?",
      answer:
        "Yes! Our team provides 24/7 support to ensure your operations run smoothly at all times. We understand that trucking doesn't stop at 5pm, so neither do we. Our dispatchers are always available to handle any issues that arise.",
    },
    {
      question: "What languages do your dispatchers speak?",
      answer:
        "Our dispatchers are fluent in English, Russian, and Romanian to ensure clear communication with brokers and shippers. This multilingual capability helps eliminate miscommunications and ensures smooth operations for all parties involved.",
    },
    {
      question: "What are your fees?",
      answer:
        "We offer a reasonable fee structure designed to maximize owner-operator profits while providing high-quality service. Our pricing is transparent with no hidden costs, allowing you to plan your finances effectively. Contact us for specific pricing based on your fleet size and needs.",
    },
    {
      question: "Do you offer additional services beyond dispatching?",
      answer:
        "Yes! We also provide optional accounting services to save you time and money while managing your business effectively. Our comprehensive approach ensures all aspects of your trucking business are handled professionally, allowing you to focus on growth.",
    },
  ];

  const router = useRouter();

  // Function to handle the "Get a Free Consultation" button click
  const handleConsultationClick = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-70"></div>

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
          <h2 className="text-3xl font-extrabold text-[#B8860B] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our dispatch services and how
            we can help your trucking business thrive.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:border-[#D2B48C]/20 transition-all duration-300"
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
            <h3 className="text-2xl font-bold text-[#B8860B] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our team is ready to answer any questions you might have about our
              dispatch services. Get in touch today for personalized assistance!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <ButtonsCard
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-[#D2B48C] to-[#B8860B] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#B8860B] hover:to-[#8B4513] transition-all duration-300 text-lg font-medium tracking-wide"
              >
                Contact Us for More Details
              </ButtonsCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
