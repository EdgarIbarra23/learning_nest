import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { manageError } from 'src/common/helpers/ErrorHandler.helper';

@Injectable()
export class EmailService {
    constructor(
        private readonly mailerService: MailerService,
    ) { }

    async sendMail(to: string, subject: string, template: string, context: Record<string, any>) {
        try {
            await this.mailerService.sendMail({ to, subject, template, context });
        } catch (error) {
            manageError(error);
        }
    }
}
