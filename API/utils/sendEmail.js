import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // 587 ke liye hamesha false rakhein
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Ye Render par TLS issues bypass karta hai
  }
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP Error:", error.message);
  } else {
    console.log("🚀 Server is ready to send emails! ✅");
  }
});

const sendMail = async ({ to, subject, html }) => {
  try {
    const mailOptions = {
      from: `"Ap Power" <${process.env.EMAIL_USER}>`,
      to: to || process.env.EMAIL_USER,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Nodemailer Error: ", error.message);
    throw error;
  }
};

export default sendMail;