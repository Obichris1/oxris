"use client";
import React from "react";
import ContactForm from "../components/ContactForm";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineX,
} from "react-icons/ai";

const Page = () => {
  return (
    <div className="w-full md:w-[80%] m-auto flex flex-col md:flex-row justify-center p-8 items-center gap-10">
      {/* Contact Information - Slides in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 w-full md:w-[50%]"
      >
        <Typography variant="h4" className="!font-semibold !text-2xl md:!text-3xl !text-center md:!text-left">
          REACH OUT TO US
        </Typography>

        <hr />

       

        <div className="text-[#aaa5a5] text-xs md:text-sm flex flex-col gap-3">
          {/* <Typography className="font-bold uppercase text-black mb-4">
            Contact Info
          </Typography> */}

          <span className="flex items-center gap-4 text-gray-500">
            <AiOutlineMail className="text-lg" />
            <Link href="mailto:obichris202@gmail.com?subject=Inquiry&body=Hello, I want to make enquiries..." className="hover:text-primary">
             obichris202@gmail.com
            </Link>
          </span>
          <span className="flex items-center gap-4 text-gray-500 ">
            <AiOutlinePhone className="text-lg" />
            <Link href="tel:+2348129614462" className="hover:text-primary">+234 812 961 4462</Link>
          </span>
        </div>

          {/* SOCIAL MEDIA  */}
          <div className="flex  md:self-end  items-center gap-4 mt-3">


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

      </motion.div>

      {/* Contact Form - Slides in from the right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[50%]"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Page;
