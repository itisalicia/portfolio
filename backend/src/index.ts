import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailController from './controllers/emailController';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

app.use('/api', emailController);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

