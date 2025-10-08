import { Router } from "express";
import { sendEmail } from "../models/emailModel";
import { upload } from "../config/multerConfig";

const router = Router();

router.post('/send-email', upload.single('attachment'), async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const file = req.file;

        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Tous les champs sont requis.'
            });
        };
        const success = await sendEmail({ name, email, message }, file);
        if (success) {
            res.status(200).json({
                message: 'Email envoyé avec succès !',
                // hasAttachment: !!file,
                // attachmentName: file?.originalname
            });
        } else {
            res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
        }
    } catch (error) {
        console.error('Error in /send-email route:', error);
        res.status(500).json({ error: 'Erreur serveur.' });
    }
});

export default router;