import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body() data) {
    const to = data.toMail;
    const subject = 'PRISE DE RENDEZ-VOUS';
    const text = 'Pour le plateau d\'Assistance Plus \n C\'est juste un Test mais non pas un SPAM Oooooo';

    try {
      await this.mailService.sendMail(to, subject, text);
      return 'Email sent successfully!';
    } catch (error) {
      return `Error sending email: ${error.message}`;
    }
  } 

}
