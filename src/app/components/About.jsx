'use client';

import { Box, Button, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaPhone } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div id="about" className="w-full m-auto ">

      <div className='w-[90%] md:w-[80%] m-auto '>
        <Grid container spacing={6} alignItems="center"> {/* Increased spacing */}
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" fontWeight="bold" className='text-center !text-2xl md:!text-3xl !mb-6'>
                About Us
              </Typography>
              <Typography variant="body1"  className='!mb-6 text-gray-500 text-sm md:text-base !leading-7'> {/* Increased mb */}
                 <span className='!text-primary !font-semibold'>Oxris Solutions</span> specializes in crafting cutting-edge digital solutions, including
                website and app development, personalized software training, and UI/UX design.
                Our mission is to empower businesses with innovative and user-friendly technology.
              </Typography>

              <Typography variant="body1" className='!mb-6 text-gray-500 text-sm md:text-base !leading-7'> {/* Increased mb */}
              We deliver premium website design and redesign services, mobile app development, corporate branding, eCommerce solutions, interactive multimedia experiences, graphic and motion design,
               professional training, and reliable hosting and maintenance solutions for businesses of all scales.
                
              </Typography>

              <Link href="/services/software-development" passHref>
                <Button variant="contained"  endIcon={<FaArrowRight />} className="!hidden lg:!flex !bg-primary !px-4 !py-3 !text-sm !mt-12 !font-semibold  btn">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/about-image.png" // Replace with actual image path
                alt="About Us"
                width={500}
                height={350}
                style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </div>

      {/* Positioned to deliver on your needs Section */}
      <div className="bg-[url('/tech10.webp')] bg-center relative bg-cover py-40 mt-20 text-center rounded-lg text-white"> {/* Increased padding and margin */}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Animated Content */}
        <motion.div 
          className="relative z-1"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h4" fontWeight="bold" className="text-gray-200 !text-2xl md:!text-3xl !mb-6">
            Equipped to meet your requirements..
            </Typography>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="body1" className="!text-gray-300 !text-sm md:!text-base  !w-[80%] md:w-[65%] !mx-auto !mb-6 max-w-5xl"> {/* Increased mb */}
            We are committed to providing industry-leading products and solutions tailored to specific business needs. Our expert team excels in identifying market trends, developing effective solutions, and delivering high-performance systems.
            </Typography>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography variant="body1" className="!text-gray-300 !w-[75%] !text-sm md:!text-base !md:w-[65%] !mx-auto">
              At Oxris Solutions, we believe that every business challenge is unique and requires a tailored approach.
              By collaborating closely with our clients, we combine industrial expertise with technical innovation
              to create solutions that drive success.
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
