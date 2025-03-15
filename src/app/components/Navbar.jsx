"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Box, Button } from "@mui/material";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Navbar.css";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState(false);
    const isMenuOpen = Boolean(anchorEl);


  const showMenu = () => setClick(!click);
  const handleMouseEnter = (event) => {
    if (!isMobile) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClick = (event) => {
    if (isMobile) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  


  useEffect(() => {
    const changeColor = () => setColor(window.scrollY >= 1);
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust breakpoint as needed
    };
    // Initial check
    checkScreenSize();
    // Listen for window resize events
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);



 
  const services = [
    { name: "Web Development", path: "/Services/web-development" },
    { name: "App Development", path: "/Services/software-solutions" },
    { name: "UI/UX Design", path: "/Services/ui-ux-design" },
    { name: "Software Training", path: "/Services/it-consultation" },
  ];

  return (
    <div
      className={
        color
          ? "header header-bg bg-white text-black z-10"
          : "header text-black bg-white "
      }
    >
     
        <Link href="/">
        {isMobile ? (
        <Image src="/logo-no-background.png" width={120} height={200} alt="Mobile Logo" />
      ) : (
        <Image src="/logo-no-background.png" width={150} height={300} alt="Desktop Logo" />
      )}
        </Link>

        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <Link href="/" onClick={showMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" onClick={showMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/OurWorks" onClick={showMenu}>
              Our Works
            </Link>
          </li>
          <li className="relative">
      <span
        className="flex items-center gap-2 cursor-pointer text-sm mt-[3px]"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick} // Handle click on mobile
      >
        Services
        {isMenuOpen ? (
          <FaChevronUp size={10} className="transition-transform duration-300" />
        ) : (
          <FaChevronDown size={10} className="transition-transform duration-300" />
        )}
      </span>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: !isMobile ? handleClose : undefined, // Only close on hover for desktop
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          },
        }}
      >
        {services.map((service) => (
          <MenuItem
            key={service.name}
            component={Link}
            href={service.path}
            onClick={handleClose}
            sx={{
              fontSize: "14px",
              marginTop: "8px",
              fontWeight: "bold",
              padding: "10px 20px",
              color: "black",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "#4B0082",
              },
            }}
          >
            {service.name}
          </MenuItem>
        ))}
      </Menu>
    </li>
          <li>
            <Link href="/Contact" onClick={showMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <Button variant="contained" className="hidden lg:flex btn bg-primary ">
          Get a Quote
        </Button>

        <div className="hamburger" onClick={showMenu}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
 
  );
};

export default Navbar;
