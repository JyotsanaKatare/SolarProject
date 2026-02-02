import nodemailer from "nodemailer";

const sendMail = async ({ subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // must be false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"AP Power Energy Solutions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject,
      html,
    });

    console.log("EMAIL SENT SUCCESSFULLY ✅");
  } catch (error) {
    console.error("EMAIL ERROR ❌:", error.message);
    throw error; // important so controller catches it
  }
};

export default sendMail;
