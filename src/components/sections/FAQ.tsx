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
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "What routes does Vital-Trans operate?",
      answer:
        "Vital-Trans operates passenger transportation routes connecting major cities across Europe, with a focus on Romania, Germany, France, Italy, Spain, and other EU countries. We offer regular scheduled services with convenient pickup and drop-off points in city centers.",
    },
    {
      question: "How can I book a ticket with Vital-Trans?",
      answer:
        "Booking is simple! You can reserve your seat through our online booking system on our website, by calling our customer service, or visiting one of our partner agencies. We recommend booking in advance to secure your preferred travel date and seat.",
    },
    {
      question: "What is the luggage allowance?",
      answer:
        "Each passenger can bring one large suitcase (up to 30kg) and one piece of hand luggage free of charge. Additional luggage may be transported for a small fee, subject to available space. Please inform us in advance if you plan to travel with extra luggage.",
    },
    {
      question: "Do you offer discounts for certain passengers?",
      answer:
        "Yes! We offer special discounts for children (under 12), students with valid ID, seniors (over 65), and regular travelers. We also provide group booking discounts for families or groups traveling together. Contact our customer service for details.",
    },
    {
      question: "What amenities are available on your buses?",
      answer:
        "Our modern fleet is equipped with air conditioning, comfortable reclining seats, free WiFi, USB charging ports, and onboard restrooms. On longer journeys, we make regular comfort stops at service areas with food and refreshment options.",
    },
    {
      question: "What happens if I need to change or cancel my booking?",
      answer:
        "You can modify or cancel your reservation up to 48 hours before departure with minimal or no fees, depending on your ticket type. Changes made less than 48 hours before departure may incur additional charges. Please contact our customer service for assistance with changes.",
    },
  ];

  const router = useRouter();

  // Function to handle the "Book Your Trip" button click
  const handleBookingClick = () => {
    router.push("/contact"); // Navigate to the contact page
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
            Frequently Asked Questions
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our passenger transportation
            services and how to make your journey comfortable and convenient.
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
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our customer service team is ready to answer any questions you
              might have about our routes, bookings, or services. Get in touch
              today for personalized assistance!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <ButtonsCard
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-lg font-medium tracking-wide"
              >
                Contact Us or Book Your Trip
              </ButtonsCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
