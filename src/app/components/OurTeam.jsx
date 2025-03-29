"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Typography } from "@mui/material";

// Team members' data
const teamMembers = [
  {
    name: "Chris Obi",
    role: "Lead Developer",
    image: "/Obinna3.jpeg",
  },
  {
    name: "Mayowa",
    role: "Strategist",
    image: "/Mayowa3.jpeg",
  },
  {
    name: "Chibuikem",
    role: "Backend/Mobile developer",
    image: "/chibuikem.jpeg",
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Fade-in effect for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Staggered effect for team member cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center ">
        <Typography className="!text-2xl md:!text-3xl !font-bold !mb-4 !text-black">
          Meet Our Team
        </Typography>
        <Typography className="md:text-base text-sm text-gray-400 leading-relaxed !mb-10">
          Our team consists of passionate and highly skilled professionals
          dedicated to delivering the best IT solutions.
        </Typography>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="object-cover h-full w-full"
                width={300}
                height={400}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className=" font-semibold text-sm md:text-base text-white">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
