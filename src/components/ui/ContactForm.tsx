"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  category: string[];
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#D2B48C] focus:ring-1 focus:ring-[#D2B48C] transition-all"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#D2B48C] focus:ring-1 focus:ring-[#D2B48C] transition-all"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#D2B48C] focus:ring-1 focus:ring-[#D2B48C] transition-all"
            {...register("phone")}
          />
        </div>
      </div>

      {/* Category Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          I am a: (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="category-mc"
              className="h-5 w-5 rounded border-gray-300 text-[#D2B48C] focus:ring-[#D2B48C]"
              {...register("category")}
              value="Motor Carrier"
            />
            <label htmlFor="category-mc" className="ml-3 text-sm text-gray-700">
              Motor Carrier (MC)
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="category-broker"
              className="h-5 w-5 rounded border-gray-300 text-[#D2B48C] focus:ring-[#D2B48C]"
              {...register("category")}
              value="Broker"
            />
            <label
              htmlFor="category-broker"
              className="ml-3 text-sm text-gray-700"
            >
              Broker
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="category-customer"
              className="h-5 w-5 rounded border-gray-300 text-[#D2B48C] focus:ring-[#D2B48C]"
              {...register("category")}
              value="Customer"
            />
            <label
              htmlFor="category-customer"
              className="ml-3 text-sm text-gray-700"
            >
              Customer
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="category-other"
              className="h-5 w-5 rounded border-gray-300 text-[#D2B48C] focus:ring-[#D2B48C]"
              {...register("category")}
              value="Other"
            />
            <label
              htmlFor="category-other"
              className="ml-3 text-sm text-gray-700"
            >
              Other
            </label>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          placeholder="How can we help you?"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#D2B48C] focus:ring-1 focus:ring-[#D2B48C] transition-all"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us more about your needs..."
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#D2B48C] focus:ring-1 focus:ring-[#D2B48C] transition-all resize-none"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-[#D2B48C] py-3 px-6 text-base font-semibold text-white hover:bg-gray-800 hover:text-[#D2B48C] border border-[#D2B48C] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D2B48C] focus:ring-offset-2 focus:ring-offset-white shadow-md"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
