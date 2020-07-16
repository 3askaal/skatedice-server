import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

const REQUEST_TYPES: any = {
  trick: {
    subject: 'SkateDice - Trick request',
    title: 'User has submitted a Trick Request:',
  },
  feature: {
    subject: 'SkateDice - Feature request',
    title: 'User has submitted a Feature Request:',
  },
};

@Injectable()
export class RequestService {
  async sendRequest(type: string, message: string): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_ADRESS || '',
          pass: process.env.MAIL_PASSWORD || '',
        },
      });

      const info = await transporter.sendMail({
        from: 'SkateDice Server',
        to: '3askaal@gmail.com',
        subject: REQUEST_TYPES[type].subject,
        html: `
          <h3>${REQUEST_TYPES[type].title}</h3>
          <p>${message}</p>
        `,
      });
    } catch (err) {
      throw err;
    }
  }
}
