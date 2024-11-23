"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">{t("company.title")}</h3>
            <div className="text-gray-400 space-y-2">
              <p>{t("company.address")}</p>
              <p>{t("company.phone")}</p>
              <p>{t("company.email")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">{t("quickLinks.title")}</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("quickLinks.privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("quickLinks.terms")}
              </Link>
              <Link
                href="/faqs"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("quickLinks.faqs")}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">{t("social.title")}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("social.facebook")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("social.twitter")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("social.instagram")}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">{t("newsletter.title")}</h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                {t("newsletter.button")}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
