
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Ye line yahan bhi add kar dein

console.log("Email Config:", process.env.EMAIL_USER ? "FOUND" : "NOT FOUND");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS, // Make sure this is an App Password
//   },
// });


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Port 587 ke liye false hona zaroori hai
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Pakka karein ki ye 16-digit App Password hi hai
  },
  tls: {
    rejectUnauthorized: false // Security handshakes ko smooth banata hai
  },
  connectionTimeout: 20000, // Timeout limit badha dein
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Transporter connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
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