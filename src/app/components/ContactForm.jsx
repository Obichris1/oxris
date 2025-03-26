"use client";
import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCheckCircle,
} from "react-icons/ai";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    questionaire: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "", phoneNumber: "", questionaire: "" });
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`w-full ${success ? "hidden" : "flex flex-col w-[50%] border-l-2 border-0 gap-8 p-4 md:p-8"}`}
      >
        <div className="flex flex-col gap-6">
          {/* Name Field */}
          <TextField
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            label="Full Name"
            variant="standard" // Removes box styling
            InputProps={{
              disableUnderline: true, // Removes default underline
              style: { borderBottom: "2px solid black", paddingBottom: "10px" },
              startAdornment: <AiOutlineUser className="mr-2" />,
            }}
          />

          {/* Email Field */}
          <TextField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            label="Email"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { borderBottom: "2px solid black", paddingBottom: "10px" },
              startAdornment: <AiOutlineMail className="mr-2" />,
            }}
          />

          {/* Phone Number Field */}
          <TextField
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            fullWidth
            label="Phone Number"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { borderBottom: "2px solid black", paddingBottom: "10px" },
              startAdornment: <AiOutlinePhone className="mr-2" />,
            }}
          />

          {/* Dropdown Field */}
          <TextField
            label="How did you hear about us?"
            variant="standard"
            fullWidth
            select
            onChange={handleChange}
            value={formData.questionaire}
            name="questionaire"
            InputProps={{
              disableUnderline: true,
              style: { borderBottom: "2px solid black", paddingBottom: "10px" },
            }}
          >
            <MenuItem value="Instagram">Instagram</MenuItem>
            <MenuItem value="Facebook">Facebook</MenuItem>
            <MenuItem value="twitter">X (Twitter)</MenuItem>
            <MenuItem value="Paper Flyers">Paper Flyers</MenuItem>
            <MenuItem value="From a Friend">From a Friend</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full !py-3 !bg-black text-white hover:scale-105 hover:shadow-md transition-transform font-bold text-lg rounded-md"
        >
          {isLoading ? (
            <CircularProgress size={20} className="text-white" />
          ) : (
            <Typography className="text-sm font-semibold text-center  text-white">
              Submit
            </Typography>
          )}
        </Button>
      </form>

      {success && (
        <div className="bg-green-200 p-4 my-10 rounded-xl flex justify-center items-center gap-5 w-full md:max-w-6xl m-auto">
          <AiOutlineCheckCircle className="text-2xl" />
          <Typography className="text-xs md:text-sm">
            Thank you for contacting D Square Events Centre! We will be in touch with you shortly.
          </Typography>
        </div>
      )}
    </>
  );
}
