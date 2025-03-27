"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

// Service Data
const serviceDetails = {
  "software-development": {
    title: "Software Development",
    description:
      " Oxris Solutions provides top-notch custom software development services, delivering high-quality websites and mobile applications tailored to your business needs. Whether you require a responsive, SEO-optimized website, a secure e-commerce platform, or a feature-rich mobile app, we ensure seamless functionality, excellent performance, and an engaging user experience.",
    description2:
      "Our solutions are designed to help businesses establish a strong digital presence, sell products and services effortlessly, and enhance customer interactions. Beyond development, we offer ongoing maintenance and support to keep your software secure, updated, and running smoothly. Our expert team also implements strategic SEO and digital marketing techniques to boost your online visibility, drive traffic, and maximize user engagement",
    image: "/tech16.webp",
  },
  "it-training": {
    title: "Corporate/Individual trainings",
    description:
      "we offer comprehensive corporate and individual training programs designed to empower professionals, businesses, and students with in-demand tech skills. Whether you're an organization looking to upskill your team, a school seeking structured IT training, or an individual eager to advance your career, our expert-led programs are tailored to meet your needs.",
    description2:
      "Our training services cover corporate IT training, online courses, and one-on-one coaching, ensuring flexibility and personalized learning experiences. With a hands-on approach, industry-relevant curriculum, and experienced instructors, we ensure that every learner gains the expertise needed to thrive in today's digital world. ",
    image: "/tech14.webp",
  },
  "digital-brand-expansion": {
    title: "Digital Brand Expansion",
    description:
      "In today’s digital era, having a strong online presence is essential for business growth. At Oxris Solutions, we offer comprehensive Digital Brand Expansion services to help businesses establish and maintain a powerful digital footprint. Our services include website and app development, ensuring your brand has a professional, user-friendly, and fully functional online platform.",
    description2:
      "Beyond development, we also create and manage your social media presence, helping you engage with your audience, build brand awareness, and drive customer growth. To keep everything running smoothly, we provide ongoing maintenance and support, ensuring your digital assets remain secure, updated, and optimized for peak performance. With us, your business is equipped with all the digital tools needed to thrive in an ever-evolving market. ",
    image: "/tech13.webp",
  },
  "it-consultation": {
    title: "IT Consultation Services",
    description:
      "Our consultation services provide expert guidance to help businesses and individuals make informed technology decisions. Whether you need assistance with IT strategy, infrastructure planning, software solutions, or digital transformation, we offer tailored advice to align technology with your goals.",
    description2:
      "From startups to established enterprises, we analyze your current systems, identify areas for improvement, and recommend the best solutions to enhance efficiency, security, and scalability. Whether you're looking to integrate new technologies, optimize workflows, or future-proof your IT infrastructure, our team ensures you stay ahead in today’s competitive digital landscape. Let’s transform your business with the right tech solutions!",
    image: "/tech11.webp",
  },
};

const ServiceDetail = () => {
  const { service } = useParams() ?? {}; // Ensure useParams() doesn't return undefined
  const serviceKey = service?.toLowerCase(); // Normalize param case
  const data = serviceDetails[serviceKey]; // Fetch service details

  return (
    <div className="flex flex-col md:flex-row w-full  mx-auto p-6 ">
      {/* Side Navigation */}
      <nav className="w-full md:w-[25%]  p-4 rounded-lg shadow-md bg-white">
        <Typography
          variant="h6"
          className="!font-bold !mb-4 uppercase !text-center !text-lg"
        >
          Services
        </Typography>
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
          <Typography
            variant="h4"
            className="!font-bold !mb-4 !text-2xl md:!text-3xl !text-center"
          >
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-500 text-sm md:text-base !leading-7"
          >
            {data.description}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-2/3"
        >
          <Image
            src={data.image}
            alt={data.title}
            width={700}
            height={450}
            className="rounded-lg"
          />

          <Typography
            variant="body1"
            className="!mt-10 text-gray-500 text-sm md:text-base !leading-7"
          >
            {data.description2}
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
