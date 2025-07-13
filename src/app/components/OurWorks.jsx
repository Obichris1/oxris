'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

const projects = [

  {
    title: 'E-Commerce Website',
    description: 'An ecommerce website for joe karter leather and athleisure  ',
    image: '/Assets/joe-karter.png',
    url: 'https://joe-karter-store-xvs1.vercel.app/', // Replace with actual live URL
  },
  {
    title: 'E-Commerce Website',
    description: 'A website for FMCC Nigeria  ',
    image: '/Assets/fmcc.png',
    url: 'https://fmccng.com/', // Replace with actual live URL
  },
  {
    title: 'Real Estate Platform',
    description: 'An event center website for Dsquare events center ',
    image: '/Assets/Dsquare2.png',
    url: 'https://dsquare-events.vercel.app/', // Replace with actual live URL
  },
  
  {
    title: 'SaaS Dashboard',
    description: 'A fully-featured e-commerce app for shoes hive.',
    image: '/Assets/ShoesHive2.png',
    url: 'https://shoes-hive.vercel.app/', // Replace with actual live URL
  },
  {
    title: 'Portfolio Website',
    description: 'A fitness application for Shred Nigeria that details a workout plan for users  .',
    image: '/Assets/Shred.png',
    url: 'https://shredapp.netlify.app/', // Replace with actual live URL
  },
];

const OurWorks = () => {
  return (
    <div className='flex flex-col gap-24 w-[90%] md:px-8 py-8  m-auto'>
      <section>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-black text-center mb-3 "
        >
          Our Works
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 text-center text-sm md:text-base mb-10 "
        >
          Checkout some projects we have completed.
          </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.url} key={index} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full p-2 h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-2">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-black rounded-2xl p-8 w-full max-w-4xl text-white text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            Got a Project? Tell us about it! <span className="wave">👋</span>
          </h2>
          <div className="flex justify-center items-center mt-6 space-x-4 text-lg">
            <FiPhone className="text-2xl text-gray-300" />
            <a
              href="tel:+2348129614462"
              className="underline hover:text-primary transition-colors duration-300"
            >
              +234 8129614462
            </a>
            {/* <span className="text-gray-500">|</span> */}
           
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurWorks;
