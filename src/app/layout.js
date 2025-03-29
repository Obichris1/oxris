import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oxris Solutions | Websites, Mobile Applications, Business Solutions, IT training ",
  description:
    "Oxris Solutions offers high-quality web and app development, branding, and IT solutions for businesses in Nigeria. Elevate your digital presence today!",
  keywords: "web development, app development, training,  IT solutions, Nigeria",
  openGraph: {
    title: "Oxris Solutions | Web & App Development in Nigeria",
    description:
      "We build stunning, high-performance websites and mobile applications for businesses in Nigeria.",
    url: "https://oxrissolutions.com",
    siteName: "Oxris Solutions",
    images: [
      {
        url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Oxris Solutions - Web & App Development",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<head>
        {/* Favicon */}
        <link rel="icon" href="/logo-no-background.png" sizes="any" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://oxrissolutions.com" />

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Oxris Solutions",
              "url": "https://oxrissolutions.com",
              "logo": "https://oxrissolutions.com/logo.png",
              "description":
                "We provide high-quality web and app development, branding, and IT solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "Nigeria",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <div className="">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
