"use client";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonialsData = [
    {
      type: "student",
      avatar: "/images/avatar1.jpg",
      rating: 5,
    },
    {
      type: "family",
      avatar: "/images/avatar2.jpg",
      rating: 5,
    },
    {
      type: "business",
      avatar: "/images/avatar3.jpg",
      rating: 5,
    },
    {
      type: "senior",
      avatar: "/images/avatar4.jpg",
      rating: 5,
    },
    {
      type: "regular",
      avatar: "/images/avatar5.jpg",
      rating: 5,
    },
    {
      type: "tourist",
      avatar: "/images/avatar6.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={t(`${testimonial.type}.name`)}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">
                    {t(`${testimonial.type}.name`)}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t(`${testimonial.type}.location`)}
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{t(`${testimonial.type}.text`)}&quot;
              </p>
              <p className="text-sm text-gray-500 mt-4">
                {t(`${testimonial.type}.date`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
