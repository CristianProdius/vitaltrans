"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonsCard } from "@/components/ui/buttons";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl"; // Import useLocale from next-intl

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations("Header"); // Use the namespace 'Header'
  const locale = useLocale(); // Get the current locale

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt={t("logoAlt")}
                width={isScrolled ? 120 : 150}
                height={isScrolled ? 40 : 50}
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher />

            <ButtonsCard
              className={`${
                isScrolled
                  ? "bg-[#1e3a8a] text-white hover:bg-[#c8102e] hover:text-white"
                  : "bg-[#1e3a8a] text-white hover:bg-white hover:text-[#1e3a8a]"
              } transition-all shadow-md px-5 py-2 text-sm`}
              onClick={() => {
                console.log("Contact Clicked");
                window.location.href = `/${locale}/contact`;
              }}
            >
              {t("contact")}
            </ButtonsCard>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <LanguageSwitcher />

            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-[#1e3a8a] focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{t("openMenu")}</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <div className="px-3 py-3">
            <ButtonsCard
              className="w-full bg-[#1e3a8a] text-white hover:bg-[#c8102e] hover:text-white transition-all shadow-md px-5 py-2 text-sm"
              onClick={() => {
                console.log("Contact Clicked");
                setIsMenuOpen(false);
                window.location.href = `/${locale}/contact`;
              }}
            >
              {t("contact")}
            </ButtonsCard>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
