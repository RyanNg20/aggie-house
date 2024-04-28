import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Aggie House <onboarding@resend.dev>',
      to: ['ropher20@gmail.com'],
      subject: "Hello world",
      react: (
        <div>
          hi
        </div>
      ),
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
