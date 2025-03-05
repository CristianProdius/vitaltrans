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
import { useRouter } from "next/navigation";

const steps = [
  {
    icon: <IconCalendar size={48} className="text-white" />,
    title: "Step 1: Choose Your Trip",
    description:
      "Select your departure, destination, date, and number of passengers through our easy booking system.",
  },
  {
    icon: <IconTicket size={48} className="text-white" />,
    title: "Step 2: Book Your Ticket",
    description:
      "Complete your personal details and payment information to secure your reservation instantly.",
  },
  {
    icon: <IconMapPin size={48} className="text-white" />,
    title: "Step 3: Receive Confirmation",
    description:
      "Get your e-ticket and travel details via email with pickup location and departure time.",
  },
  {
    icon: <IconBus size={48} className="text-white" />,
    title: "Step 4: Enjoy Your Journey",
    description:
      "Arrive at the pickup point, board our comfortable bus, and relax while we take you to your destination.",
  },
];

const HowItWorksSection = () => {
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

  // Create a connector line between steps
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
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1e3a8a] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            How It Works
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Booking your journey with Vital-Trans is simple. Follow these four
            steps to secure your comfortable travel experience across Europe.
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
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1e3a8a]/30 group relative"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {index + 1}
              </div>

              {/* Step Icon */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#c8102e] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#c8102e] transition-colors duration-300">
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
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
              Ready to Travel Across Europe?
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied passengers who trust Vital-Trans for
              their travel needs. Book your journey today and experience
              comfortable transportation!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <ButtonsCard
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#c8102e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#c8102e] hover:to-[#1e3a8a] transition-all duration-300 text-lg font-medium tracking-wide"
              >
                Book Your Trip Now
              </ButtonsCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
