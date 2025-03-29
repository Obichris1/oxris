// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message, phoneNumber, questionaire, formattedDate } =
    await request.json();

  console.log(formattedDate);
  //   console.log(process.env.EMAIL_PASS);

  // Configure Nodemailer with your email service
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // e.g., Gmail, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER, // Set in your .env.local file
      pass: process.env.EMAIL_PASS, // Set in your .env.local file
    },
    service: "gmail",
    port: 465,
    secure: true,
  });

  console.log(transporter);

  const mailOptions = {
    from: email,
    to: "obichris202@gmail.com", // Replace with your receiving email
    subject: "Oxris Solutions",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #fff;"> Oxris Solutions : </h2>
      <p><strong>Client's Name:</strong> ${name}</p>
      <p><strong>Email Address:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Questionaire Response:</strong> ${questionaire}</p>
      <hr style="border: 1px solid #ddd; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr style="border: 1px solid #ddd; margin: 20px 0;" />
      
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
