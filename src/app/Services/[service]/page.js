"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

// Service Data
const serviceDetails = {
  "web-development": {
    title: "Website Development",
    description:
      "We specialize in building scalable, responsive, and high-performance web and mobile applications tailored to your business needs. Our team ensures that every digital solution is optimized for user experience and business growth.",
    image: "/tech4.jpg",
  },
  "ui-ux-design": {
    title: "Corporate/Individual trainings",
    description:
      "We create visually stunning and user-friendly designs that enhance user experience and drive engagement. From wireframes to high-fidelity designs, we craft intuitive interfaces that captivate and convert users.",
    image: "/tech1.jpg",
  },
  "software-solutions": {
    title: "Digital Brand Expansion",
    description:
      "Providing custom software solutions to streamline and automate your business operations. Whether it's enterprise applications, workflow automation, or cloud-based systems, we build solutions that scale with your business.",
    image: "/tech7.webp",
  },
  "it-consultation": {
    title: "IT Consultation Services",
    description:
      "Offering expert IT consultation and corporate training programs to enhance technological proficiency. We help businesses and individuals stay ahead in the tech landscape with industry-relevant skills and strategies.",
    image: "/tech6.webp",
  },
};

const ServiceDetail = () => {
  const { service } = useParams() ?? {}; // Ensure useParams() doesn't return undefined
  const serviceKey = service?.toLowerCase(); // Normalize param case
  const data = serviceDetails[serviceKey]; // Fetch service details

  return (
    <div className="flex flex-col md:flex-row w-full  mx-auto p-6 gap-10">
      {/* Side Navigation */}
      <nav className="w-full md:w-1/5  p-4 rounded-lg shadow-md bg-white">
        <Typography variant="h6" className="font-bold mb-4 uppercase text-center text-lg">Services</Typography>
        <ul className="space-y-2 text-sm">
          {Object.keys(serviceDetails).map((key) => (
            <li key={key}>
              <Link
                href={`/services/${key}`}
                className={`block px-3 py-2 rounded-lg font-medium transition duration-300 ${
                  serviceKey === key ? "bg-purple-600 text-white" : ""
                }`}
              >
                {serviceDetails[key].title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Service Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-full p-6 rounded-lg  flex flex-col items-center gap-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <Typography variant="h4" className="font-bold mb-4 text-center">
            {data.title}
          </Typography>
          <Typography variant="body1" className="text-gray-600 leading-7">
            {data.description}
          </Typography>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-2/3"
        >
          <Image src={data.image} alt={data.title} width={700} height={450} className="rounded-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;

