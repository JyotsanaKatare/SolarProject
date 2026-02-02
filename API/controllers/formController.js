
import sendMail from "../utils/sendEmail.js";

const freeQuote = async (req, res) => {
    try {
        const { name, phone, email, bill, city } = req.body;

        if (!name || !phone || !email || !bill || !city) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const html = `
        <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
            <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">
      
            <div style="background:#1F2933; color:#fff; padding:16px; text-align:center;">
            <h2 style="margin:0;">Get a Free Quote</h2>
            </div>

            <div style="padding:20px; color:#333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Monthly Bill:</strong> ${bill}</p>
            <p><strong>City:</strong> ${city}</p>
            </div>

            <div style="background:#fdb813; text-align:center; padding:10px; font-size:14px; color:#1F2933">
            AP Power Energy Solutions
            </div>
           </div>
        </div>`;

        await sendMail({
            subject: "New Free Quote Request",
            html,
        })

        res.status(200).json({
            success: true,
            message: "Quote request sent successfully",
        });

        console.log("name", name);
        console.log("phone", phone);
        console.log("email", email);
        console.log("bill", bill);
        console.log("city", city);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

const contactUs = async (req, res) => {
    try {
        const { name, email, phone, city, message, subject } = req.body;

        if (!name || !email || !phone || !city || !message || !subject) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const html = `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">
      
      <div style="background:#1F2933; color:#fff; padding:16px; text-align:center;">
        <h2 style="margin:0;">New Contact Request</h2>
      </div>

      <div style="padding:20px; color:#333;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      </div>

      <div style="background:#fdb813; text-align:center; padding:10px; font-size:14px; color:#1F2933">
        AP Power Energy Solutions
      </div>

    </div>
  </div>
`;

        await sendMail({
            subject: `Contact Us - ${subject}`,
            html,
        });

        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });

        console.log("name", name);
        console.log("email", email);
        console.log("phone", phone);
        console.log("city", city);
        console.log("message", message);
        console.log("subject", subject);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

export default {
    freeQuote,
    contactUs
}