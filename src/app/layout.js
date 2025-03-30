import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsappIcon";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Oxris Solutions | Websites, Mobile Applications, Business Solutions, IT training ",
  description:
    "Oxris Solutions designs high-quality websites and mobile applications, Offer IT consultation and software trainings services for small and large scale businesses. Elevate your digital presence today!",
  keywords:
    "web development, mobile development, training, IT solutions, Lagos",
  openGraph: {
    title: "Websites, Mobile Applications, Business Solutions, IT training",
    description:
      "We build stunning, high-performance websites and mobile applications for businesses in Nigeria.",
    url: "https://oxrissolutions.com",
    siteName: "Oxris Solutions",
    images: [
      {
        url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
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
      <Head>
      <meta name="google-site-verification" content="-SFmo72WliMp02RXwDBy9rYI4ImejFx3eRkyM_hHyZ8" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://oxrissolutions.com" />

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Oxris Solutions",
              url: "https://oxrissolutions.com",
              logo: "https://oxrissolutions.com/logo.png",
              description:
                "We provide high-quality web and mobile app development.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <meta name="google-site-verification" content="-SFmo72WliMp02RXwDBy9rYI4ImejFx3eRkyM_hHyZ8" />
        <Navbar />
        <div className="">{children}</div>
        <WhatsAppIcon />
        <Footer />
      </body>
    </html>
  );
}
