import nodemailer from "nodemailer";

const sendMail = async ({ subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_KEY,
    },
  });

  await transporter.sendMail({
    from: `"AP Power Energy Solutions" <${process.env.BREVO_SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject,
    html,
  });
};

export default sendMail;
