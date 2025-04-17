// app/api/email/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { google } from "googleapis";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// —————— OAuth2 Client Setup ——————
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
});

// —————— Form Data Type ——————
type CombinedFormData = {
  name: string;
  email: string; // visitor’s email
  phone: string;
  subject: string;
  message: string;

  // contact form only
  category?: string[];

  // booking form only
  travelType?: string[];
  departure?: string;
  arrival?: string;
  date?: string;
  passengers?: {
    adults: number;
    children: number;
    students: number;
  };
};

export async function POST(request: NextRequest) {
  try {
    const data: CombinedFormData = await request.json();
    const {
      email: visitorEmail,
      name,
      phone,
      subject,
      message,
      category,
      travelType,
      departure,
      arrival,
      date,
      passengers,
    } = data;

    // 1) Figure out form type
    const isBookingForm = Boolean(departure && arrival);

    // 2) Prepare any array fields
    const categoryString =
      category && Array.isArray(category)
        ? category.join(", ")
        : category || "";
    const travelTypeString =
      travelType && Array.isArray(travelType)
        ? travelType.join(", ")
        : travelType || "";

    // 3) Build text + HTML bodies
    let emailBody = "";
    let htmlBody = "";

    if (isBookingForm) {
      const passengersInfo = passengers
        ? `Adults: ${passengers.adults || 0}, Children: ${
            passengers.children || 0
          }, Students: ${passengers.students || 0}`
        : "Not specified";

      emailBody = `
BOOKING REQUEST

Name: ${name}
Email: ${visitorEmail}
Phone: ${phone || "Not provided"}
Travel Type: ${travelTypeString || "Not specified"}

Route Details:
Departure: ${departure}
Arrival: ${arrival}
Date: ${date}
Passengers: ${passengersInfo}

Subject: ${subject}

Additional Information:
${message || "None provided"}
      `;

      htmlBody = `
<h2>New Booking Request</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${visitorEmail}</p>
<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
<p><strong>Travel Type:</strong> ${travelTypeString || "Not specified"}</p>

<h3>Route Details:</h3>
<ul>
  <li><strong>Departure:</strong> ${departure}</li>
  <li><strong>Arrival:</strong> ${arrival}</li>
  <li><strong>Date:</strong> ${date}</li>
  <li><strong>Passengers:</strong> ${passengersInfo}</li>
</ul>

<p><strong>Subject:</strong> ${subject}</p>

<h3>Additional Information:</h3>
<p>${message ? message.replace(/\n/g, "<br>") : "None provided"}</p>
      `;
    } else {
      emailBody = `
CONTACT FORM SUBMISSION

Name: ${name}
Email: ${visitorEmail}
Phone: ${phone || "Not provided"}
Category: ${categoryString || "None selected"}
Subject: ${subject}

Message:
${message}
      `;

      htmlBody = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${visitorEmail}</p>
<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
<p><strong>Category:</strong> ${categoryString || "None selected"}</p>
<p><strong>Subject:</strong> ${subject}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, "<br>")}</p>
      `;
    }

    // 4) Mint a fresh access token
    const { token: accessToken } = await oauth2Client.getAccessToken();

    // 5) Create the Gmail transporter
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MY_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
    } as SMTPTransport.Options);

    // 6) Mail options
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      cc: visitorEmail, // visitor gets a copy
      bcc: "autocarconstanta@gmail.com", // BCC to the main email
      subject: isBookingForm
        ? `Booking Request: ${departure} → ${arrival} from ${name}`
        : `Contact Form: ${subject} from ${name}`,
      text: emailBody,
      html: htmlBody,
    };

    // 7) Send!
    await transport.sendMail(mailOptions);

    return NextResponse.json({
      message: isBookingForm
        ? "Booking request submitted successfully! We’ll be in touch soon."
        : "Email sent successfully! We’ll reply shortly.",
    });
  } catch (err: unknown) {
    console.error("Email sending failed:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
