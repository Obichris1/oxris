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
    <div className="w-[80%] m-auto flex flex-col md:flex-row justify-center p-8 items-center gap-10">
      {/* Contact Information - Slides in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 w-full md:w-[50%]"
      >
        <Typography variant="h4" className="font-bold">
          REACH OUT TO US
        </Typography>

        <hr />

        <Typography variant="h6">CONTACT</Typography>

        <div className="text-[#aaa5a5] text-xs md:text-sm flex flex-col gap-3">
          <Typography className="font-bold uppercase text-[#aaa5a5] mb-4">
            Contact Info
          </Typography>

          <span className="flex items-center gap-4">
            <AiOutlineMail className="text-lg" />
            <Link href="mailto:dolaposquare123@gmail.com?subject=Inquiry&body=Hello, I have a question...">
              dolaposquare123@gmail.com
            </Link>
          </span>
          <span className="flex items-center gap-4">
            <AiOutlinePhone className="text-lg" />
            <Link href="tel:+2349165235934">+234 916 523 5934</Link>
          </span>
        </div>

          {/* SOCIAL MEDIA  */}
          <div className="flex  self-end items-center gap-4">


<Link
  href="https://www.instagram.com/dsquarevents/"
  target="_blank"
  className="p-3 bg-[#E12F6C] rounded-full text-white hover:bg-transparent"
>
  <AiOutlineInstagram />
</Link>

<Link
  href="https://www.facebook.com/profile.php?id=100090758267591&mibextid=ZbWKwL"
  target="_blank"
  className="p-3 bg-[#3C5997] rounded-full text-white hover:bg-transparent"
>
  <AiFillFacebook />
</Link>

<Link
  href="https://x.com/DEventcent23511"
  target="_blank"
  className="p-3 bg-[#000] rounded-full text-white hover:bg-transparent"
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
