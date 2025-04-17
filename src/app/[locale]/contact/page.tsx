"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Footer from "@/components/layout/Footer";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";
import Header from "@/components/layout/Header";
import { useTranslations } from "next-intl";
import HeroFormm from "@/components/sections/HeroFormm";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <>
      <Header />
      <section className="relative bg-gray-50 overflow-hidden min-h-screen">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <TextGenerateEffect
                className="text-4xl font-extrabold tracking-tight text-[#1e3a8a] md:text-5xl lg:text-6xl"
                words={t("headline")}
              />

              <TextGenerateEffect
                className="mt-6 text-lg text-gray-600 md:text-xl max-w-3xl"
                words={t("description")}
              />

              {/* Contact Information */}
              <div className="mt-10 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                    <IconPhone className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">
                      {t("contactInfo.call.title")}
                    </p>
                    <p className="mt-1">{t("contactInfo.call.value")}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                    <IconMail className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">
                      {t("contactInfo.email.title")}
                    </p>
                    <p className="mt-1">{t("contactInfo.email.value")}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                    <IconMapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">
                      {t("contactInfo.location.title")}
                    </p>
                    <p className="mt-1">{t("contactInfo.location.value")}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 p-6 border border-[#1e3a8a] rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold text-[#1e3a8a] flex items-center">
                  <IconClock className="mr-2" />
                  {t("businessHours.title")}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-2 text-gray-700">
                  <div>{t("businessHours.weekdays.day")}:</div>
                  <div>{t("businessHours.weekdays.hours")}</div>
                  <div>{t("businessHours.saturday.day")}:</div>
                  <div>{t("businessHours.saturday.hours")}</div>
                  <div>{t("businessHours.sunday.day")}:</div>
                  <div>{t("businessHours.sunday.hours")}</div>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="mt-6 p-6 border border-[#c8102e] rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold text-[#c8102e]">
                  {t("popularRoutes.title")}
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <div>{t("popularRoutes.routes.germany")}</div>
                  <div>{t("popularRoutes.routes.italy")}</div>
                  <div>{t("popularRoutes.routes.spain")}</div>
                  <div>{t("popularRoutes.routes.france")}</div>
                  <div>{t("popularRoutes.routes.uk")}</div>
                  <div>{t("popularRoutes.routes.netherlands")}</div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}

            <HeroFormm className="w-full lg:px-0 lg:pl-8" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
