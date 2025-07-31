import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { doctor, service, date, time, name, email, phone, notes } = req.body;

  // Configure your SMTP transporter (use environment variables for security)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Körper Heil Booking" <${process.env.SMTP_USER}>`,
      to: "korper.heil@gmail.com", // recipient email
      subject: "New Booking Received",
      html: `
        <h2>New Booking Details</h2>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}