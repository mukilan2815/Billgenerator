import { NextResponse as res } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await request.json();
  const mail = await resend.emails.send({
    from: "BillGenerator <noreply@mail.billgenerator.co.in>",
    to: body.email,
    subject: body.subject,
    html: "<p>Please find the bill recipt attachment bellow!</p>",
    attachments: body.attachments,
  });
  console.log(mail);
  return res.json(mail);
}
