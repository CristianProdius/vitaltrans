"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <>
      <section className="relative bg-gray-50 overflow-hidden min-h-screen">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <TextGenerateEffect
                className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                words="Get in Touch with RoadRanger"
              />

              <TextGenerateEffect
                className="mt-6 text-lg text-gray-600 md:text-xl max-w-3xl"
                words="Have questions about our dispatch services? Ready to partner with us? Fill out the form and our team will get back to you within 24 hours."
              />

              {/* Contact Information */}
              <div className="mt-10 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D2B48C] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">Call Us</p>
                    <p className="mt-1">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D2B48C] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">Email Us</p>
                    <p className="mt-1">info@roadranger.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D2B48C] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">Our Location</p>
                    <p className="mt-1">
                      123 Dispatch Road, Trucking City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 p-6 border border-[#D2B48C] rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold text-[#D2B48C]">
                  Business Hours
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-2 text-gray-700">
                  <div>Monday - Friday:</div>
                  <div>8:00 AM - 8:00 PM</div>
                  <div>Saturday:</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
