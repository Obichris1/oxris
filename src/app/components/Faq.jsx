'use client';

import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  { question: 'What services does d\'xris tech offer?', answer: 'We offer website and app development, personal and corporate software training, and UI/UX design.' },
  { question: 'How can I contact d\'xris tech?', answer: 'You can reach us via email at obichris202@gmail.com or call us at 08129614462.' },
  { question: 'Do you provide training for beginners?', answer: 'Yes! We offer training programs suitable for beginners and advanced learners.' },
  { question: 'Can you develop a custom software solution for my business?', answer: 'Absolutely! We specialize in custom software solutions tailored to your needs.' }
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
    <div className="w-[80%] m-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
      </motion.div>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </div>
  );
}
