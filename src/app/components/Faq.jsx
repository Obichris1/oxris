'use client';

import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  { question: 'What services does Oxris Solutions offer?', answer: 'We offer website and app development, personal and corporate software training, and complete business digitalization.' },
  { question: 'Can I get a free quote for my project?', answer: 'Yes, our project and business development quotes are free!' },
  { question: 'Are there installmental payment plans?', answer: 'Absolutely! We offer very flexible and budget-friendly payment plans.' },
  { question: 'Can you develop a custom software solution for my business?', answer: 'Absolutely! We specialize in custom software solutions tailored to your needs.' },
  { question: 'Do you offer one-on-one private trainings?', answer: 'Yes, we offer training to individuals, corporate organizations, and private schools, both physically and online.' }
];

export default function FAQSection() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="w-[85%] md:w-[80%] lg:w-[80%] self-start mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <Typography variant="h4" className="!font-bold !text-2xl md:!text-3xl">
          Frequently Asked Questions
        </Typography>
        <Typography className="text-gray-500 mt-2 text-sm md:text-base ">
          Here are some of the common questions we get from our clients.
        </Typography>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Accordion className="shadow-md rounded-xl">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="" />}>
                <Typography className="font-semibold text-gray-800">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-500">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
