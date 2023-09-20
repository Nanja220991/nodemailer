import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';

@Injectable()
export class MailService {
  private readonly transporter;

  constructor() { 
    this.transporter = nodemailer.createTransport(
      smtpTransport({
        service: 'Gmail', // e.g., 'Gmail' or use SMTP details for other services
        auth: {
          user: 'nanjarabarijaona@gmail.com',
          pass: 'zkmvmgzgppyuzxws',
        },
      }),
    );
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: 'appointment-client-mail@assistanceplus.mg',
      to,
      subject,
      text,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error(`Error sending email: ${error.message}`);
    }
  }
}
