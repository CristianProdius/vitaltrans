"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
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
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt={t("logoAlt")}
                width={280}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-gray-200 mb-8">{t("companyDescription")}</p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8102e]"
                aria-label={t("socialLinks.facebook")}
              >
                <IconBrandFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8102e]"
                aria-label={t("socialLinks.instagram")}
              >
                <IconBrandInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#c8102e] mb-6">Adresa</h3>
            <div className="flex items-center gap-3 text-gray-200 mb-4">
              <IconMapPin size={20} className="text-[#c8102e] flex-shrink-0" />
              <span>str. Ion Pruncul 12 of. 14, mun. Chișinău</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <IconClock size={20} className="text-[#c8102e] flex-shrink-0" />
              <span>Zilnic 09:00 - 21:00</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#c8102e] mb-6">
              Contact us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <IconPhone size={20} className="text-[#c8102e] flex-shrink-0" />
                <span>+373 76 06 14 66</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <IconPhone size={20} className="text-[#c8102e] flex-shrink-0" />
                <span>+40 744 49 31 49</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <IconPhone size={20} className="text-[#c8102e] flex-shrink-0" />
                <span>+40 720 25 14 39</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <IconMail size={20} className="text-[#c8102e] flex-shrink-0" />
                <span>autocarconstanta@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#061636] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              {t("links.terms")}
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              {t("links.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
