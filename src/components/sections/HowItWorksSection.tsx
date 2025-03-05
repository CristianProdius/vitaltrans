"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconTruckDelivery,
  IconPhoneCall,
  IconFileDescription,
  IconCheck,
} from "@tabler/icons-react";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";

const steps = [
  {
    icon: <IconPhoneCall size={48} className="text-white" />,
    title: "Step 1: Contact Us",
    description:
      "Reach out via phone or email to discuss your dispatch needs and business requirements.",
  },
  {
    icon: <IconFileDescription size={48} className="text-white" />,
    title: "Step 2: Share Your Details",
    description:
      "Provide us with your fleet information and preferences so we can tailor our services to your needs.",
  },
  {
    icon: <IconTruckDelivery size={48} className="text-white" />,
    title: "Step 3: Start Dispatching",
    description:
      "We'll begin finding top-paying loads, negotiating deals, and managing your fleet efficiently.",
  },
  {
    icon: <IconCheck size={48} className="text-white" />,
    title: "Step 4: Focus on Driving",
    description:
      "Enjoy stress-free operations while we handle the paperwork, communication, and logistics.",
  },
];

const HowItWorksSection = () => {
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Create a connector line between steps
  const StepConnector = ({ index }: { index: number }) => {
    if (index === steps.length - 1) return null;

    return (
      <div
        className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#D2B48C] to-transparent -translate-y-1/2 pointer-events-none"
        style={{ width: "calc(100% - 3rem)" }}
      ></div>
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#B8860B] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            How It Works
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Getting started with RoadRanger is simple. Follow these four steps
            to streamline your trucking operations and maximize profits.
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
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D2B48C]/30 group relative"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#D2B48C] to-[#B8860B] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {index + 1}
              </div>

              {/* Step Icon */}
              <div className="bg-gradient-to-br from-[#D2B48C] to-[#B8860B] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-[#B8860B] mb-4 group-hover:text-[#8B4513] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {step.description}
              </p>

              {/* Connector Line */}
              <StepConnector index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Actions */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#B8860B] mb-4">
              Ready to Simplify Your Trucking Operations?
            </h3>
            <p className="text-gray-700 mb-6">
              Join the many trucking companies that trust RoadRanger to handle
              their dispatch needs. Get started today and experience the
              difference!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <ButtonsCard
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-[#D2B48C] to-[#B8860B] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#B8860B] hover:to-[#8B4513] transition-all duration-300 text-lg font-medium tracking-wide"
              >
                Get Started Today
              </ButtonsCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
