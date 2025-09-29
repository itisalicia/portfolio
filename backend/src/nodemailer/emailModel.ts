import { EmailData } from '../types/email.types';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export async function sendEmail(data: EmailData, file?: Express.Multer.File): Promise<boolean> {
    const mailOptions: any = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        replyTo: data.email,
        subject: `Nouveau message de ${data.name}, (${data.email})`,
        html: `
        <h2> Nouveau message </h2>
        <p><strong>Nom: </strong> ${data.name}</p>
        <p><strong>Email: </strong> ${data.email}</p>
        <p><strong>Message: </strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p> `
    };
    if (file) {
        mailOptions.attachment = [{
            filename: file?.originalname,
            content: file?.buffer,
            contentType: file?.mimetype
        }]
    }
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }


};