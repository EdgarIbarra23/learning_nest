import { MailerOptions } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import constants from "./constants";

export const mailConfig: MailerOptions = {
    transport: {
        host: constants.MAIL_HOST,
        port: constants.MAIL_PORT,
        auth: {
            user: constants.MAIL_USERNAME,
            pass: constants.MAIL_PASSWORD,
        },
    },
    defaults: {
        from: constants.MAIL_FROM_NAME,
    },
    template: {
        dir: 'src/features/email/templates',
        adapter: new HandlebarsAdapter(),
        options: {
            strict: true,
        },
    },
}