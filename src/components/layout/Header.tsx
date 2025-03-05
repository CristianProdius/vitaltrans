"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonsCard } from "@/components/ui/buttons";
import { IconLanguage, IconChevronDown } from "@tabler/icons-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("RO");
  const pathname = usePathname();

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

  // Handle click outside language menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isLangMenuOpen &&
        event.target &&
        !(event.target as Element).closest(".lang-selector")
      ) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangMenuOpen]);

  // Language options
  const languages = [
    { code: "RO", name: "Română" },
    { code: "EN", name: "English" },
    { code: "RU", name: "Русский" },
  ];

  // Navigation items

  const handleLanguageChange = (langCode: React.SetStateAction<string>) => {
    setCurrentLang(langCode);
    setIsLangMenuOpen(false);
    // Here you would implement the actual language change logic
    console.log(`Language changed to ${langCode}`);
  };

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
                alt="Vital-Trans Logo"
                width={isScrolled ? 120 : 150}
                height={isScrolled ? 40 : 50}
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative lang-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1 text-sm font-medium px-3 py-1 rounded-md transition-colors ${
                  pathname === "/contact"
                    ? "text-black hover:bg-gray-100"
                    : isScrolled
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <IconLanguage size={18} />
                <span>{currentLang}</span>
                <IconChevronDown
                  size={14}
                  className={`transition-transform ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentLang === lang.code
                          ? "bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <ButtonsCard
              className={`${
                isScrolled
                  ? "bg-[#1e3a8a] text-white hover:bg-[#c8102e] hover:text-white"
                  : "bg-[#1e3a8a] text-white hover:bg-white hover:text-[#1e3a8a]"
              } transition-all shadow-md px-5 py-2 text-sm`}
              onClick={() => {
                console.log("Contact Clicked");
                window.location.href = "/contact";
              }}
            >
              Contact
            </ButtonsCard>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative lang-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1 p-1 rounded-md ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <IconLanguage size={20} />
                <span className="text-xs font-medium">{currentLang}</span>
              </button>

              {/* Mobile Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentLang === lang.code
                          ? "bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-[#1e3a8a] focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
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
          {/* Mobile Language Options */}
          <div className="px-3 py-2">
            <p className="text-sm font-medium text-gray-500 mb-2">Language</p>
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-sm rounded-md ${
                    currentLang === lang.code
                      ? "bg-[#1e3a8a] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          <div className="px-3 py-3">
            <ButtonsCard
              className="w-full bg-[#1e3a8a] text-white hover:bg-[#c8102e] hover:text-white transition-all shadow-md px-5 py-2 text-sm"
              onClick={() => {
                console.log("Contact Clicked");
                setIsMenuOpen(false);
                window.location.href = "/contact";
              }}
            >
              Contact
            </ButtonsCard>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
