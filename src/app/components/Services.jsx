"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaLaptopCode, FaPaintBrush, FaDatabase, FaUsers, FaArrowRight } from "react-icons/fa";
import { Typography, Button } from "@mui/material";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    title: "Website Development",
    description:
      "We build scalable websites tailored to your business needs.",
    link: "/Services/web-development",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-primary" />,
    title: "Corporate/Individual trainings",
    description:
      "Our training program offers mordern tech skills training and side-to-side mentorship ",
    link: "/Services/ui-ux-design",
  },
  {
    icon: <FaDatabase className="text-4xl text-primary" />,
    title: "Digital Brand Expansion",
    description:
      "Our DBE program gives your business a complete online presence.  ",
    link: "/Services/software-solutions",
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    title: "IT Consultation Services",
    description:
      "We offer expert advice customized to fit your unique business needs.",
    link: "/Services/it-consultation",
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
    <section ref={sectionRef} className="w-[90%] md:w-[80%] mx-auto  py-20 ">
      <div className=" text-center">
        <Typography variant="h4" className="text-black !font-bold !mb-10 !text-xl !md:text-3xl ">
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
              <h3 className="text-lg md:text-xl !font-semibold mt-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>

              {/* Read More Button */}
              <Link href={service.link} passHref>
                <Button
                  variant="text"
                  endIcon={<FaArrowRight />}
                  className="!text-gray-500 text-sm hover:underline"
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
