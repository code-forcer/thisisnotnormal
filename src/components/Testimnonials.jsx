import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "/testimonials/1.webp",
    quote: "This service completely changed the way I work. Highly recommend!",
  },
  {
    name: "Jane Smith",
    image: "/testimonials/2.webp",
    quote: "Amazing experience! The team was professional and helpful.",
  },
  {
    name: "Michael Johnson",
    image: "/testimonials/3.webp",
    quote: "I can't believe how easy it was to use this platform!",
  },
  {
    name: "Emily Davis",
    image: "/testimonials/4.webp",
    quote: "A top-notch experience from start to finish.",
  },
  {
    name: "Robert Brown",
    image: "/testimonials/5.webp",
    quote: "Fantastic support and wonderful results. Five stars!",
  },
];

const staticImages = [
  "/testimonials/static/1.png",
  "/testimonials/static/2.png",
  "/testimonials/static/3.png",
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Pick a static image based on the current testimonial
  const staticImage = staticImages[current % staticImages.length];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Static image */}
        <div className="flex-1">
          <img
            src={staticImage}
            alt="Happy clients"
            className="w-full rounded-3xl shadow-lg object-contain"
          />
        </div>

        {/* Right: Testimonials Carousel */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Hear from Our Clients
          </h2>
          <p className="text-gray-600 mb-10">
            See what our users have to say about our services and how we helped them achieve their goals.
          </p>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-4 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="w-24 h-24 rounded-full border-4 border-blue-500 overflow-hidden mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-lg italic mb-2">&quot;{t.quote}&quot;</p>
                  <h4 className="text-blue-600 font-semibold">{t.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Paginator dots */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === idx ? "bg-blue-500 scale-125" : "bg-blue-300"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
