import { Router } from "express";
import { sendEmail } from "./emailModel";

const router = Router();

router.post('/send-email', async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Tous les champs sont requis.'
            });
        };
        const success = await sendEmail({ name, email, message });
        if (success) {
            res.status(200).json({ message: 'Email envoyé avec succès !' });
        } else {
            res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
        }
    } catch (error) {
        console.error('Error in /send-email route:', error);
        res.status(500).json({ error: 'Erreur serveur.' });
    }
});

export default router;