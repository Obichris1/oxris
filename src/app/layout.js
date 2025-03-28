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
  title: "Oxris Solutions | Web & App Development in Nigeria",
  description:
    "Oxris Solutions offers high-quality web and app development, branding, and IT solutions for businesses in Nigeria. Elevate your digital presence today!",
  keywords: "web development, app development, branding, IT solutions, Nigeria",
  openGraph: {
    title: "Oxris Solutions | Web & App Development in Nigeria",
    description:
      "We build stunning, high-performance websites and mobile applications for businesses in Nigeria.",
    url: "https://oxrissolutions.com",
    siteName: "Oxris Solutions",
    images: [
      {
        url: "https://oxrissolutions.com/logo-no-background.png", // Replace with your actual image URL
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
