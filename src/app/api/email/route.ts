import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { FormData } from "@/components/ui/ContactForm";

export async function POST(request: NextRequest) {
  const data: FormData = await request.json();
  const { email, name, phone, subject, message, category } = data;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Format the categories as a comma-separated string
  const categoryString = Array.isArray(category)
    ? category.join(", ")
    : category;

  // Create a formatted email body
  const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Category: ${categoryString || "None selected"}
Subject: ${subject}

Message:
${message}
  `;

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Contact Form: ${subject} from ${name}`,
    text: emailBody,
    // You can also add HTML version if you want
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Category:</strong> ${categoryString || "None selected"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent successfully! We'll get back to you soon.");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    const result = await sendMailPromise();
    return NextResponse.json({ message: result });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
