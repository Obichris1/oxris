import React from "react";
import "./HeroSection.css";
// import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll'
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src="/tech7.webp" alt="HeroBanner" />
      </div>

      <div className="content text-white flex justify-start items-start gap-5">
        {/* Content */}
        <motion.div
          className="relative z-10 max-w-3xl px-6 text-center md:text-left mx-auto md:ml-0 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Heading */}
          <motion.h1
            className="text-2xl md:text-4xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your Digital Success Starts Here.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-base md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            We design and develop cutting-edge websites & apps that drive
            business growth and innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link href="/contact" passHref>
            <Button
              variant="contained"
              className="btn !bg-primary !font-semibold !px-4 !py-3 !text-sm "
            >
              Get a quote
            </Button>
            </Link>
            <Link href="/services/software-development" passHref>
              <Button
                variant="outlined"
                className="!bg-transparent !text-white  !px-4 !py-3 !border-black hover:!bg-white hover:!text-primary !font-semibold !hover:border-none "
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
