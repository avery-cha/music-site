import { contactForm } from "./data";

export async function GET() {
  return Response.json(contactForm);
}

export async function POST(request: Request) {
  const contact = await request.json();
  const newContact = {
    id: contactForm.length + 1,
    email: contact.email,
    subject: contact.subject,
    message: contact.message,
  };
  contactForm.push(newContact);
  return new Response(JSON.stringify(newContact), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
