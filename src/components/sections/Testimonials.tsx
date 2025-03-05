"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "RoadRanger has been a game-changer for our trucking business. Their dispatchers are professional, multilingual, and always available when we need them!",
    name: "John Doe",
    designation: "Owner-Operator",
    src: "/testimonial1.png",
  },
  {
    quote:
      "Thanks to RoadRanger, I no longer worry about delayed loads or endless paperwork. Their tailored solutions have saved me time and money.",
    name: "Jane Smith",
    designation: "Fleet Manager",
    src: "/testimonial2.png",
  },
  {
    quote:
      "The team at RoadRanger is exceptional! Their 24/7 support and reasonable fees make them the perfect dispatch partner.",
    name: "Michael Brown",
    designation: "Logistics Coordinator",
    src: "/testimonial3.png",
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#B8860B] md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from trucking professionals who trust RoadRanger to handle
            their dispatch needs and drive their success.
          </p>
        </motion.div>

        {/* Animated Testimonials Component */}
        <AnimatedTestimonialsCustom testimonials={testimonials} />
      </div>
    </section>
  );
};

// Custom version of AnimatedTestimonials that matches your aesthetic
const AnimatedTestimonialsCustom = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: {
    quote: string;
    name: string;
    designation: string;
    src: string;
  }[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (autoplay && isClient) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isClient, handleNext]);

  const randomRotateY = (seed: number) => {
    // Use a deterministic random function based on the seed
    const x = Math.sin(seed) * 10000;
    return Math.floor((x - Math.floor(x)) * 21) - 10;
  };

  if (!isClient) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="h-80 w-full bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="flex justify-between flex-col py-4">
            <div className="h-8 bg-gray-200 animate-pulse mb-4"></div>
            <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
            <div className="h-20 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="relative h-[500px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="h-full w-full rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={300}
                      height={300}
                      draggable={false}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#B8860B]">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-700 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-8 justify-end">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white border border-[#D2B48C] flex items-center justify-center group/button hover:bg-[#D2B48C] transition-all duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-[#B8860B] group-hover/button:text-white group-hover/button:rotate-12 transition-all duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gradient-to-r from-[#D2B48C] to-[#B8860B] flex items-center justify-center group/button hover:from-[#B8860B] hover:to-[#8B4513] transition-all duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
