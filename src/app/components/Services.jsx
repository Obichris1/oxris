"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaLaptopCode, FaChalkboardTeacher, FaChartLine, FaUsers, FaArrowRight } from "react-icons/fa";
import { Typography, Button } from "@mui/material";

const services = [
  {
    icon: <FaLaptopCode className="text-2xl text-primary" />,
    title: "Software Development",
    description:
      "We build scalable,  custom websites and mobile apps tailored to your business requirements.",
    link: "/services/web-development",
  },
  {
    icon: <FaChalkboardTeacher className="text-2xl text-primary" />,
    title: "Corporate/Individual Training",
    description:
      "Our training program offers mordern tech skills training and mentorship ",
    link: "/services/it-training",
  },
  {
    icon: <FaChartLine className="text-2xl text-primary" />,
    title: "Digital Brand Expansion",
    description:
      "Our custom DBE service gives your business a complete online presence.  ",
    link: "/services/digital-brand-expansion",
  },
  {
    icon: <FaUsers className="text-2xl text-primary" />,
    title: "IT Consultation Services",
    description:
      "We offer expert advice customized to fit your unique business needs.",
    link: "/services/it-consultation",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
          );
          observer.disconnect(); // Stop observing after animation
        }
      },
      { threshold: 0.5 } // Triggers animation when at least 50% of the cards are visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-[90%] md:w-[80%] mx-auto  ">
      <div className=" text-center">
        <Typography variant="h2" className="text-black !font-bold !mb-8 !text-2xl md:!text-3xl ">
          OUR SERVICES
        </Typography>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center opacity-0 transform"
            >
              {service.icon}
              <h3 className="text-[16px] md:text-lg font-bold mt-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-7">{service.description}</p>

              {/* Read More Button */}
              <Link href={service.link} passHref>
                <Button
                  variant="text"
                  endIcon={<FaArrowRight className="!text-primary " />}
                  className="!text-sm !text-gray-400 mt-4 hover:underline"
                >
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
