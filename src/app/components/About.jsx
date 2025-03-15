'use client';

import { Box, Button, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <Box id="about" sx={{ py: 10, px: 3, maxWidth: '1200px', mx: 'auto' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About d’xris tech
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              At d’xris tech, we specialize in crafting cutting-edge digital solutions, including
              website and app development, personalized software training, and UI/UX design.
              Our mission is to empower businesses with innovative and user-friendly technology.
            </Typography>
            <Link href="#services" passHref>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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
              src="/tech7.webp" // Replace with actual image path
              alt="About Us"
              width={500}
              height={350}
              style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
