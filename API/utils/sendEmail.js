import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail", // Ye property ports ko auto-configure karti hai
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Timeout settings ko increase karna Render par help karta hai
  connectionTimeout: 10000, 
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

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
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Nodemailer Error: ", error.message);
    throw error;
  }
};

export default sendMail;