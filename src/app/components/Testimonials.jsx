"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, TechCorp",
    feedback:
      "D’Xris Tech transformed our business with a stunning website. Highly recommended! Their expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great quality",
    rating: 5,
  },
  {
    name: "John Doe",
    title: "CEO, TechCorp",
    feedback:
      "D’Xris Tech transformed our business with a stunning website. Highly recommended! Their expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great quality",
    rating: 5,
  },
  {
    name: "John Doe",
    title: "CEO, TechCorp",
    feedback:
      "D’Xris Tech transformed our business with a stunning website. Highly recommended! Their expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great qualityTheir expertise in app development is top-notch. Delivered on time with great quality",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold ">What Our Clients Say</h2>
        <p className="text-gray-400 mt-2">
          Trusted by businesses and individuals worldwide
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="shadow-xl transform transition duration-300 hover:scale-105"
              sx={{ background: "white", borderRadius: "16px" }}
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                <FaQuoteLeft size={60} className="text-primary" />
                <h3 className="font-semibold text-lg mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
                <div className="flex mt-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FaStar key={i} size={18} className="text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mt-4 italic">
                  "{testimonial.feedback}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
