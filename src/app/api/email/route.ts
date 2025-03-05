import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// Combined type that can handle both form types
type CombinedFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;

  // Fields from original contact form
  category?: string[];

  // Fields from hero booking form
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
  const data: CombinedFormData = await request.json();
  const {
    email,
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

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Determine if this is a booking form or contact form
  const isBookingForm = departure && arrival;

  // Format the categories or travel types as a comma-separated string
  const categoryString =
    category && Array.isArray(category) ? category.join(", ") : category || "";

  const travelTypeString =
    travelType && Array.isArray(travelType)
      ? travelType.join(", ")
      : travelType || "";

  // Create a formatted email body based on form type
  let emailBody = "";
  let htmlBody = "";

  if (isBookingForm) {
    // Booking form email
    const passengersInfo = passengers
      ? `Adults: ${passengers.adults || 0}, Children: ${
          passengers.children || 0
        }, Students: ${passengers.students || 0}`
      : "Not specified";

    emailBody = `
BOOKING REQUEST

Name: ${name}
Email: ${email}
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
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Travel Type:</strong> ${
        travelTypeString || "Not specified"
      }</p>
      
      <h3>Route Details:</h3>
      <p><strong>Departure:</strong> ${departure}</p>
      <p><strong>Arrival:</strong> ${arrival}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Passengers:</strong> ${passengersInfo}</p>
      
      <p><strong>Subject:</strong> ${subject}</p>
      
      <h3>Additional Information:</h3>
      <p>${message ? message.replace(/\n/g, "<br>") : "None provided"}</p>
    `;
  } else {
    // Regular contact form email
    emailBody = `
CONTACT FORM SUBMISSION

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Category: ${categoryString || "None selected"}
Subject: ${subject}

Message:
${message}
    `;

    htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Category:</strong> ${categoryString || "None selected"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;
  }

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: isBookingForm
      ? `Booking Request: ${departure} to ${arrival} from ${name}`
      : `Contact Form: ${subject} from ${name}`,
    text: emailBody,
    html: htmlBody,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve(
            isBookingForm
              ? "Booking request submitted successfully! We'll contact you shortly to confirm your reservation."
              : "Email sent successfully! We'll get back to you soon."
          );
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
