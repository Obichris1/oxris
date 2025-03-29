import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineX,
} from "react-icons/ai";
import Image from "next/image";


const Footer = () => {
  return (
    <div className=" bg-white mt-10  text-black">
      {/* Footer Container */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 w-[80%] md:w-[80%] mx-auto py-10 md:py-28">
        
        {/* SOCIAL MEDIA  */}
        <div className="flex flex-col gap-4 w-full md:w-[30%]">
        <Link href="/">
      <Image src='/logo-no-background.png' width={150} height={300} alt="logo" />
      </Link>

          <div className="max-w-56 ">
            <Typography className="text-black mt-2 !text-xs md:!text-sm ">
            At Oxris Solutions, We Believe In The Power Of Being Found, Known, And Trusted.
            </Typography>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-3 mt-8">
            <Link
              href=""
              target="_blank"
              className="p-3 bg-[#E12F6C] rounded-full text-white hover:scale-75 transition"
            >
              <AiOutlineInstagram />
            </Link>

            <Link
              href=""
              target="_blank"
              className="p-3 bg-[#3C5997] rounded-full text-white hover:scale-75 transition"
            >
              <AiFillFacebook />
            </Link>

            <Link
              href=""
              target="_blank"
              className="p-3 bg-[#000] rounded-full text-white hover:scale-75 transition"
            >
              <AiOutlineX />
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-black text-sm flex flex-col gap-3 w-full md:w-[20%]">
          <Typography className="!font-bold uppercase mb-2 text-black">
            Company
          </Typography>
          <Link href="/about" className="hover:text-primary text-gray-500 transition !text-xs md:!text-sm">About Us</Link>
          <Link href="/ourworks" className="hover:text-primary text-gray-500 transition !text-xs md:!text-sm">Works</Link>
          <Link href="/about#faq" className="hover:text-primary text-gray-500 transition !text-xs md:!text-sm">FAQs</Link>
        </div>

        {/* Services Section */}
        <div className="text-sm flex flex-col gap-3 w-full md:w-[20%]">
          <Typography className="!font-bold uppercase mb-2 text-black">
            Our Services
          </Typography>
          <Link href="/services/software-development" className="hover:text-primary text-gray-500 transition !text-xs md:!text-sm">Software Development</Link>
          <Link href="/services/it-training" className="hover:text-primary  transition text-gray-500 !text-xs md:!text-sm">Corporate/Individual training</Link>
          <Link href="/services/digital-brand-expansion" className="hover:text-primary text-gray-500  transition !text-xs md:!text-sm">Digital Brand Expansion</Link>
          <Link href="/services/it-consultation" className="hover:text-primary  text-gray-500 transition !text-xs md:!text-sm">IT Consultation Services</Link>
        </div>

        {/* Contact Info Section */}
        <div className="text-sm flex flex-col gap-3 w-full md:w-[20%]">
          <Typography className="!font-bold uppercase mb-2 text-black" >
            Contact Info
          </Typography>
          <Link href="tel:+2348129614462" className="hover:text-primary text-gray-500  transition !text-xs md:!text-sm">+234 812 961 4462</Link>
          <Link href="mailto:support@dxristech.com" className="hover:text-primary text-gray-500  transition !text-xs md:!text-sm">support@oxrissolutions.com</Link>
          <Typography className=" text-gray-500 !text-xs md:!text-sm">Lagos, Nigeria.</Typography>
        </div>
      </div>

      {/* Divider */}
      <hr className=" w-[90%] md:w-[80%] mx-auto bg-black" />

      {/* Footer Bottom Section */}
      <div className="py-6 text-center text-black text-xs">
        &copy; 2025 OXRIS SOLUTIONS. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
