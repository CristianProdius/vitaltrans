"use client";

import { useState, useEffect } from "react";
import {
  IconUsers,
  IconHistory,
  IconFileDescription,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ButtonsCard } from "../ui/buttons";
import { useRouter } from "next/navigation";

const Problem = () => {
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

  const challenges = [
    {
      icon: <IconUsers size={48} color="white" />,
      title: "Stressful Negotiations",
      description:
        "Dealing with brokers can be exhausting. We negotiate for you to secure the best-paying loads.",
    },
    {
      icon: <IconHistory size={48} color="white" />,
      title: "Delayed Loads",
      description:
        "Late deliveries hurt your bottom line. We monitor your fleet 24/7 to keep everything on schedule.",
    },
    {
      icon: <IconFileDescription size={48} color="white" />,
      title: "Endless Paperwork",
      description:
        "Managing documents takes time. We handle all administrative tasks so you can focus on driving.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#B8860B] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
            <span className="block">Tired of Stressful Negotiations,</span>
            <span className="block">Delayed Loads & Endless Paperwork?</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            RoadRanger is here to solve the biggest challenges trucking
            companies face. Let us handle the stress while you focus on driving
            profits!
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
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D2B48C]/30 group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-[#D2B48C] to-[#B8860B] p-5 rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-[#B8860B] mb-4 group-hover:text-[#8B4513] transition-colors duration-300">
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
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent"></div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#B8860B] mt-8">
            How RoadRanger Helps You
          </h3>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At RoadRanger, we don&apos;t just dispatch—we partner with you to
            maximize your success on the road. With us, every mile means more
            money in your pocket!
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ButtonsCard
              className="bg-gradient-to-r from-[#D2B48C] to-[#B8860B] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#B8860B] hover:to-[#8B4513] transition-all duration-300 text-lg font-medium tracking-wide"
              onClick={handleConsultationClick}
            >
              Get a Free Consultation
            </ButtonsCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
