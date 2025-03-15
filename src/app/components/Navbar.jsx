"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Box, Button } from "@mui/material";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Navbar.css";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const showMenu = () => setClick(!click);

  const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => setColor(window.scrollY >= 1);
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMouseEnter = (event) => setAnchorEl(event.currentTarget);
  const handleMouseLeave = () => setAnchorEl(null);

  const services = [
    { name: "Web Development", path: "/Services/web-development" },
    { name: "App Development", path: "/Services/app-development" },
    { name: "UI/UX Design", path: "/Services/ui-ux-design" },
    { name: "Software Training", path: "/Services/software-training" },
  ];

  return (
    <div className={color ? "header header-bg bg-white text-black z-10" : "header text-black bg-white "}>
      <Link href="/">
      <Image src='/logo-no-background.png' width={150} height={300} alt="logo" />
      </Link>

      <ul className={click ? "nav-links active" : "nav-links"}>
        <li>
          <Link href="/" onClick={showMenu}>Home</Link>
        </li>
        <li>
          <Link href="/About" onClick={showMenu}>About</Link>
        </li>
        <li>
          <Link href="/OurWorks" onClick={showMenu}>Our Works</Link>
        </li>
        <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span className="flex items-center gap-2 cursor-pointer text-sm mt-[3px] ">
            Services
            {isMenuOpen ? <FaChevronUp size={10} className="transition-transform duration-300" /> 
                        : <FaChevronDown size={10} className=" transition-transform duration-300" />}
          </span>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMouseLeave}
            MenuListProps={{ onMouseLeave: handleMouseLeave }}
            sx={{ "& .MuiPaper-root": { backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" } }}
          >
            {services.map((service) => (
              <MenuItem
                key={service.name}
                component={Link}
                href={service.path}
                onClick={handleMouseLeave}
                sx={{
                  fontSize: "14px",
                  marginTop: "8px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  color: "black", // Default black
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#E6E6FA", // Light purple hover effect
                    color: "#4B0082", // Purple text on hover
                  }
                }}
              >
                {service.name}
              </MenuItem>
            ))}
          </Menu>
        </li>
        <li>
          <Link href="/Contact" onClick={showMenu}>Contact Us</Link>
        </li>
      </ul>

      <Button variant="contained" className="hidden lg:flex btn bg-primary ">
        Get a Quote
      </Button>

      <div className="hamburger" onClick={showMenu}>
        {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
      </div>
    </div>
  );
};

export default Navbar;
