import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './mailer/mail.controller';
import { MailModule } from './mailer/mail.module';
import { MailService } from './mailer/mail.service';

@Module({
  imports: [
    MailModule],

  controllers: [AppController, MailController],
  providers: [AppService, MailService],
  exports: [MailService]
})
export class AppModule { }