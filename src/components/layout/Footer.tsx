"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
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
    <footer className="relative bg-[#0a1e4a] text-white">
      {/* Scroll to top button */}
      <motion.div
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={scrollToTop}
          className="bg-[#1e3a8a] text-white hover:bg-white hover:text-[#1e3a8a] border border-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
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
              alt="Vital-Trans Logo"
              width={250}
              height={80}
              className="object-contain drop-shadow-md mb-6"
            />
            <p className="text-gray-300 max-w-md text-center md:text-left mb-6">
              Professional passenger transportation services across Europe.
              Safe, comfortable, and reliable journeys for all travelers!
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8102e] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <IconBrandFacebook size={28} stroke={1.5} />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8102e] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <IconBrandInstagram size={28} stroke={1.5} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold text-[#c8102e] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>Bucharest, Romania</span>
                <IconMapPin size={20} className="text-[#c8102e]" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>+40 123 456 789</span>
                <IconPhone size={20} className="text-[#c8102e]" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>info@vital-trans.com</span>
                <IconMail size={20} className="text-[#c8102e]" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                <span>Daily: 8:00 AM - 8:00 PM</span>
                <IconClock size={20} className="text-[#c8102e]" />
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-[#061636] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vital-Trans. All rights reserved.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
