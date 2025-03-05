"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconArrowUp,
} from "@tabler/icons-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white">
      {/* Scroll to top button */}
      <motion.div
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={scrollToTop}
          className="bg-[#D2B48C] text-black hover:bg-black hover:text-[#D2B48C] border border-[#D2B48C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={24} />
        </button>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-20">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
            <Image
              src="/logo.png" // Your logo path
              alt="RoadRanger Logo"
              width={250}
              height={250}
              className="object-contain drop-shadow-md mb-6"
            />
            <p className="text-gray-400 max-w-md text-center md:text-left mb-6">
              Professional dispatch services for trucking companies. With us,
              every mile means more money in your pocket!
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D2B48C] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <IconBrandFacebook size={28} stroke={1.5} />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D2B48C] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <IconBrandLinkedin size={28} stroke={1.5} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold text-[#D2B48C] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>123 Trucking Lane, Moldova</span>
                <IconMapPin size={20} className="text-[#D2B48C]" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>+373 123 456 789</span>
                <IconPhone size={20} className="text-[#D2B48C]" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>dispatch@roadranger.us</span>
                <IconMail size={20} className="text-[#D2B48C]" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>24/7 Availability</span>
                <IconClock size={20} className="text-[#D2B48C]" />
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
