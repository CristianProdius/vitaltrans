"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../LanguageSwitcher/indes";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("navigation");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("aboutUs") },
    { href: "/services", label: t("services") },
    { href: "/schedule", label: t("schedule") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-800">
              VitalTrans
            </Link>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 ml-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/booking"
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              {t("bookRide")}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden pb-6`}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("bookRide")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
