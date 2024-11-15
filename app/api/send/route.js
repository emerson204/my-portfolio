import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["emecasti65@gmail.com"],
        subject: "Emerson Portafolio",
        react: EmailTemplate({
          username: dataForm.username,
          email: dataForm.email,
          message: dataForm.message,
        }),
        text: "Emerson ",
      });
      return new Response(JSON.stringify(data));
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
