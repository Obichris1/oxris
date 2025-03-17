'use client'

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/Testimonials";
import Banner from "./components/Banner";
import Services from "./components/Services";

export default function Home() {
  return (
   <div className="space-y-20">
      <HeroSection />
      <Services />
     <Banner />
     <TestimonialSection />

      
   </div>
  );
}
