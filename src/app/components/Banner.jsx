"use client";
import React, { useState, useEffect, useRef } from "react";
import { Typography, Button } from "@mui/material";
import { gsap } from "gsap";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  const [successRate, setSuccessRate] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const [years, setYears] = useState(0);

  const bannerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const statsRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              leftTextRef.current,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            );

            gsap.fromTo(
              rightTextRef.current,
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            );

            gsap.fromTo(
              statsRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );

            observer.disconnect(); // Stop observing after triggering animation
          }
        });
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ NEW: Observer for the Success Rate Counter
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (successRef.current) {
      counterObserver.observe(successRef.current);
    }

    return () => {
      if (successRef.current) {
        counterObserver.unobserve(successRef.current);
      }
    };
  }, []);

  // ✅ Success Rate Counter
  useEffect(() => {
    if (startCounting) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 99) {
          count++;
          setSuccessRate(count);
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [startCounting]);

  // ✅ Years Counter
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 2) {
        count++;
        setYears(count);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative w-full py-20 bg-[url('/tech5.jpeg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="w-[80%] m-auto flex flex-col gap-10 relative z-1 text-gray-500">
        {/* Text section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Text */}
          <div
            ref={leftTextRef}
            className="flex flex-col gap-10 w-full md:w-1/2  opacity-0 "
          >
            <Typography className="!text-gray-300 !text-[14px] md:!text-base !leading-7 ">
              Oxris solutions, is a Nigerian based IT solutions agency 
            </Typography>

            <Typography className="!text-gray-300 !text-[14px] md:!text-base !leading-7">
              At Oxris Solutions, we understand that no one knows your business
              better than you. That’s why our team of experts takes the time to
              understand your unique needs and goals, working closely with you
              to develop a professionally written and beautifully designed
              website or app. Beyond just development, we offer a range of
              services tailored to enhance your digital presence, ensuring your
              business stands out and thrives in today's competitive market.
            </Typography>
          </div>

          {/* Right Text */}
          <Typography
            ref={rightTextRef}
            className="md:w-1/2 w-full opacity-0 !text-gray-300 !text-sm md:!text-base !leading-7"
          >
            Whether you're a startup, a growing company, or an established
            brand, we offer tailored services that ensure you are easily found,
            known, and trusted by your target audience.
          </Typography>
        </div>

        {/* Buttons & Stats */}
        <div
          ref={statsRef}
          className="flex justify-between flex-col md:flex-row gap-10 items-center opacity-0"
        >
          <Link href="/about" passHref>
            <Button
              variant="contained"
              color="primary"
              endIcon={<FaArrowRight />}
              className="!bg-primary !px-6 md:px-8 !text-xs !py-3 !rounded-lg btn text-gray-300 !font-semibold"
            >
              Learn More
            </Button>
          </Link>

          {/* Years */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
              Years
            </h2>
            <p className="text-xl md:text-3xl font-extrabold mt-2 text-gray-300">
              {years}+
            </p>
          </div>

          {/* ✅ Success Rate (Now Working!) */}
          <div className="text-center" ref={successRef}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
              Project Success Rate
            </h2>
            <p className="text-xl md:text-3xl font-extrabold mt-2 text-gray-300">
              {successRate}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
