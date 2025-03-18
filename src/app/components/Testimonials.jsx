"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr Dolapo Ogbuaya",
    title: "CEO, Dsquare Event Centers",
    feedback:
      "Working with Oxris Solutions was a fantastic experience! They designed a sleek, user-friendly website for us that has made booking and event management effortless. Our clients can now explore our venue, check availability, and make reservations seamlessly. This website has truly elevated our brand and improved customer engagement. ",
    rating: 5,
  },
  {
    name: "Rev. Oluwafemi Omotosho",
    title: "Director of Education, Baptist Model group of Schools",
    feedback:
      "Through their patnership with Techbase consult, The software training provided by Oxris Solution was a transformative experience for our students. The program was well-structured, engaging, and tailored to suit the learning pace of our junior and senior secondary school students. From basic coding principles to hands-on projects, our students gained invaluable knowledge in programming and software development.   This training has sparked a newfound interest in tech among our students, and we look forward to more collaborations in the future!",
    rating: 5,
  },
  {
    name: "Mrs, Ifeoma Bridget",
    title: "MD/CEO Becfom Hotels",
    feedback:
      "Thanks to Oxris solutions, our hotel booking process has never been smoother! The system they built for us allows seamless room reservations, easy customer data entry, and efficient booking tracking. This has greatly improved our operations and enhanced our guests experience. Highly recommended!",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className=" w-[80%] m-auto ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black ">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 text-sm md:text-lg mt-2">
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
              className="shadow-lg transform transition duration-300 hover:scale-105 max-h-screen"
              sx={{ background: "white", borderRadius: "16px" }}
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                <FaQuoteLeft size={60} className="text-primary" />
                <h3 className=" text-lg text-black mt-4">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 font-semibold">
                  {testimonial.title}
                </p>
                <div className="flex mt-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FaStar key={i} size={18} className="text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mt-4 italic text-xs md:text-sm">
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
