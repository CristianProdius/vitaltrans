"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";

const CallToActionSection = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle the "Get a Free Consultation" button click
  const handleConsultationClick = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#D2B48C]/10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D2B48C]/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#D2B48C]/10 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7 }}
        >
          <div className="h-3 bg-gradient-to-r from-[#D2B48C] to-[#B8860B]"></div>

          <div className="p-8 sm:p-12 text-center">
            {/* Headline */}
            <motion.h2
              className="text-3xl font-extrabold text-[#B8860B] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Maximize Your Profits?
            </motion.h2>

            <motion.p
              className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Partner with RoadRanger today and experience stress-free
              dispatching, top-paying loads, and 24/7 support. Let us handle the
              logistics while you focus on driving success.
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
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-[#D2B48C] to-[#B8860B] text-white px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:from-[#B8860B] hover:to-[#8B4513] transition-all duration-300 text-xl font-medium tracking-wide"
              >
                Get Started Now
              </ButtonsCard>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              No obligation. Free consultation to discuss your needs.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
