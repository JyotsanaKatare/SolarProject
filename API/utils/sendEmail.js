import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Resend ka instance banayein
const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Free tier mein yahi default rehta hai
      to: [process.env.EMAIL_USER], // Jis email par aap data receive karna chahte hain
      subject: subject,
      html: html,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error(error.message);
    }

    console.log("Email sent successfully via Resend:", data.id);
    return data;

  } catch (error) {
    console.error("Resend Connection Error:", error);
    throw error;
  }
};

export default sendMail;