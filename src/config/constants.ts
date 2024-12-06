import { config } from "dotenv";
config({});

export default {
    //DATABASE
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,

    // SECRET KEY JWT
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,

    PORT: process.env.PORT,

    //MAIL
    MAIL_HOST: process.env.MAIL_HOST, 
    MAIL_PORT: process.env.MAIL_PORT, 
    MAIL_USERNAME: process.env.MAIL_USERNAME, 
    MAIL_PASSWORD: process.env.MAIL_PASSWORD, 
    MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS, 
    MAIL_FROM_NAME: process.env.MAIL_FROM_NAME, 

    // PUSHER (NOTIFICATION)
    PUSHER_APP_ID : process.env.PUSHER_APP_ID,
    PUSHER_APP_KEY : process.env.PUSHER_APP_KEY,
    PUSHER_APP_SECRET : process.env.PUSHER_APP_SECRET,
    PUSHER_APP_CLUSTER : process.env.PUSHER_APP_CLUSTER,
}