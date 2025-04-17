import type { BookingFormData } from "@/components/sections/HeroFormm";

export function sendEmail(data: BookingFormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to send email");
      }
      return res.json();
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(`Error: ${err.message}`);
    });
}
