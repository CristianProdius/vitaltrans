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
  travelType: string[];
  departure: string;
  arrival: string;
  date: string;
  passengers: {
    adults: number;
    children: number;
    students: number;
  };
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      passengers: {
        adults: 0,
        children: 0,
        students: 0,
      },
    },
  });

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
          placeholder="ex. Ion Popescu"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
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
            placeholder="Adresa de email"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
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
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Numărul de telefon"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Route Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="departure"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Departure
          </label>
          <select
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
            {...register("departure", { required: "Departure is required" })}
          >
            <option value="">Selectați</option>
            <option value="bucharest">Bucharest</option>
            <option value="iasi">Iasi</option>
            <option value="cluj">Cluj-Napoca</option>
            <option value="timisoara">Timisoara</option>
            <option value="constanta">Constanta</option>
          </select>
          {errors.departure && (
            <p className="mt-1 text-sm text-red-600">
              {errors.departure.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="arrival"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Arrival
          </label>
          <select
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
            {...register("arrival", { required: "Arrival is required" })}
          >
            <option value="">Selectați</option>
            <option value="berlin">Berlin</option>
            <option value="paris">Paris</option>
            <option value="madrid">Madrid</option>
            <option value="rome">Rome</option>
            <option value="london">London</option>
          </select>
          {errors.arrival && (
            <p className="mt-1 text-sm text-red-600">
              {errors.arrival.message}
            </p>
          )}
        </div>
      </div>

      {/* Date Selection */}
      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Travel Date
        </label>
        <input
          type="date"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
          {...register("date", { required: "Date is required" })}
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
        )}
      </div>

      {/* Passenger Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Passengers
        </label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Adults
            </label>
            <input
              type="number"
              min="0"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
              {...register("passengers.adults", {
                min: { value: 0, message: "Cannot be negative" },
                valueAsNumber: true,
              })}
            />
          </div>

          <div>
            <label
              htmlFor="children"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Children
            </label>
            <input
              type="number"
              min="0"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
              {...register("passengers.children", {
                min: { value: 0, message: "Cannot be negative" },
                valueAsNumber: true,
              })}
            />
          </div>

          <div>
            <label
              htmlFor="students"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Students
            </label>
            <input
              type="number"
              min="0"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
              {...register("passengers.students", {
                min: { value: 0, message: "Cannot be negative" },
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
      </div>

      {/* Travel Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Travel Type: (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="type-one-way"
              className="h-5 w-5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
              {...register("travelType")}
              value="One Way"
            />
            <label
              htmlFor="type-one-way"
              className="ml-3 text-sm text-gray-700"
            >
              One Way
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="type-round-trip"
              className="h-5 w-5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
              {...register("travelType")}
              value="Round Trip"
            />
            <label
              htmlFor="type-round-trip"
              className="ml-3 text-sm text-gray-700"
            >
              Round Trip
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="type-regular"
              className="h-5 w-5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
              {...register("travelType")}
              value="Regular Travel"
            />
            <label
              htmlFor="type-regular"
              className="ml-3 text-sm text-gray-700"
            >
              Regular Travel
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="type-group"
              className="h-5 w-5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
              {...register("travelType")}
              value="Group Travel"
            />
            <label htmlFor="type-group" className="ml-3 text-sm text-gray-700">
              Group Travel
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
          placeholder="Booking inquiry"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
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
          Additional Information
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about any special requirements or questions..."
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-gray-400 outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all resize-none"
          {...register("message")}
        ></textarea>
      </div>

      <div className="flex items-start mb-4">
        <input
          type="checkbox"
          id="terms"
          className="h-5 w-5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a] mt-1"
          required
        />
        <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
          I have read and accept the{" "}
          <a href="#" className="text-[#1e3a8a] hover:underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-[#1e3a8a] py-3 px-6 text-base font-semibold text-white hover:bg-[#c8102e] hover:text-white border border-[#1e3a8a] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2 focus:ring-offset-white shadow-md"
        >
          {isSubmitting ? "Processing..." : "Finalizează rezervarea"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
