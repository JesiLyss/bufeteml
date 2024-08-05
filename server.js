const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bufetemendezlozano@gmail.com', // Reemplaza con tu correo
        pass: 'Glimon12@'        // Reemplaza con tu contraseña de correo
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('Todos los campos son requeridos.');
    }

    const mailOptions = {
        from: email,
        to: 'bufetemendezlozano@gmail.com', // Reemplaza con tu correo
        subject: `Mensaje de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error al enviar el mensaje.');
        }
        res.status(200).send('Mensaje enviado con éxito.');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
