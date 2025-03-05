"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Footer from "@/components/layout/Footer";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";

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
                className="text-4xl font-extrabold tracking-tight text-[#1e3a8a] md:text-5xl lg:text-6xl"
                words="Get in Touch with Vital-Trans"
              />

              <TextGenerateEffect
                className="mt-6 text-lg text-gray-600 md:text-xl max-w-3xl"
                words="Have questions about our transportation services? Ready to book your journey? Fill out the form and our team will get back to you within 24 hours."
              />

              {/* Contact Information */}
              <div className="mt-10 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                    <IconPhone className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">Call Us</p>
                    <p className="mt-1">+40 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                    <IconMail className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">Email Us</p>
                    <p className="mt-1">info@vital-trans.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                    <IconMapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="text-sm font-medium">Our Location</p>
                    <p className="mt-1">Bucharest, Romania</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 p-6 border border-[#1e3a8a] rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold text-[#1e3a8a] flex items-center">
                  <IconClock className="mr-2" />
                  Business Hours
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-2 text-gray-700">
                  <div>Monday - Friday:</div>
                  <div>8:00 AM - 8:00 PM</div>
                  <div>Saturday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Sunday:</div>
                  <div>10:00 AM - 4:00 PM</div>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="mt-6 p-6 border border-[#c8102e] rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold text-[#c8102e]">
                  Popular Routes
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <div>Romania → Germany</div>
                  <div>Romania → Italy</div>
                  <div>Romania → Spain</div>
                  <div>Romania → France</div>
                  <div>Romania → UK</div>
                  <div>Romania → Netherlands</div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
                Book Your Trip or Send Us a Message
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
