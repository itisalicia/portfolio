import express from 'express';
import cors from 'cors';
import emailController from '../src/nodemailer/emailController';

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use('/api', emailController);

export default app;