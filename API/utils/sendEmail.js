
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // Ye line yahan bhi add kar dein

console.log("Email Config:", process.env.EMAIL_USER ? "FOUND" : "NOT FOUND");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Ya 587 try karein agar 465 fail ho
  secure: true, // 465 ke liye true, 587 ke liye false
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Yeh connection drop hone se bachata hai
  },
  connectionTimeout: 10000, // 10 seconds wait karega
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("Server is ready to send emails! ✅");
  }
});

const sendMail = async ({ to, subject, html }) => {
  try {
    const mailOptions = {
      from: `"Ap Power Energy Solutions" <${process.env.EMAIL_USER}>`,
      to: to || process.env.EMAIL_USER, // Agar 'to' nahi diya, toh admin ko jayega
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Nodemailer Error: ", error);
    throw error; // Controller ko error handle karne dein
  }
};

export default sendMail;