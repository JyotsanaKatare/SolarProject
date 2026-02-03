import nodemailer from "nodemailer";

// Transporter ko function ke bahar rakhein (Connection Reuse)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Make sure this is an App Password
  },
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