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

          <div className="max-w-56">
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa adipisci amet?
            </Typography>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-3">
            <Link
              href="https://www.instagram.com/dsquarevents/"
              target="_blank"
              className="p-3 bg-[#E12F6C] rounded-full text-white hover:bg-transparent transition"
            >
              <AiOutlineInstagram />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100090758267591&mibextid=ZbWKwL"
              target="_blank"
              className="p-3 bg-[#3C5997] rounded-full text-white hover:bg-transparent transition"
            >
              <AiFillFacebook />
            </Link>

            <Link
              href="https://x.com/DEventcent23511"
              target="_blank"
              className="p-3 bg-[#000] rounded-full text-white hover:bg-transparent transition"
            >
              <AiOutlineX />
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-black text-sm flex flex-col gap-3 w-full md:w-[20%]">
          <Typography className="font-bold uppercase mb-2">
            Company
          </Typography>
          <Link href="/about" className="hover:text-white transition">About Us</Link>
          <Link href="/careers" className="hover:text-white transition">Careers</Link>
          <Link href="/faq" className="hover:text-white transition">FAQs</Link>
        </div>

        {/* Services Section */}
        <div className="text-sm flex flex-col gap-3 w-full md:w-[20%]">
          <Typography className="font-bold uppercase mb-2">
            Our Services
          </Typography>
          <Link href="/services/web-development" className="hover:text-white transition">Web Development</Link>
          <Link href="/services/app-development" className="hover:text-white transition">App Development</Link>
          <Link href="/services/training" className="hover:text-white transition">Software Training</Link>
        </div>

        {/* Contact Info Section */}
        <div className="text-sm flex flex-col gap-3 w-full md:w-[20%]">
          <Typography className="font-bold uppercase mb-2">
            Contact Info
          </Typography>
          <Link href="tel:+2348012345678" className="hover:text-white transition">+234 801 234 5678</Link>
          <Link href="mailto:support@dxristech.com" className="hover:text-white transition">support@dxristech.com</Link>
          <Link href="https://goo.gl/maps/X123456" className="hover:text-white transition">Lagos, Nigeria</Link>
        </div>
      </div>

      {/* Divider */}
      <hr className=" w-[90%] md:w-[80%] mx-auto bg-black" />

      {/* Footer Bottom Section */}
      <div className="py-6 text-center text-black text-xs">
        &copy; 2024 OXRIS SOLUTIONS. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
