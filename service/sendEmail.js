const SibApiV3Sdk = require('sib-api-v3-sdk')
require('dotenv').config()

const apiKey = process.env.SENDINBLUE_API_KEY // Reemplaza con tu API key de Sendinblue

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = apiKey

const sendEmail = async ({ name, email, message }) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

    const sendSmtpEmail = {
        to: [
            {
                email: 'daniel.felicita@gmail.com', // Reemplaza con el destinatario
                name: 'Daniel Felicita', // Reemplaza con el nombre del destinatario
            },
        ],
        sender: {
            email: email, // Reemplaza con tu dirección de correo verificada en Sendinblue
            name: name, // Reemplaza con tu nombre
        },
        subject: 'New Contact Form Personal Site',
        textContent: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        htmlContent: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    }

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail)
        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error }
    }
}

module.exports = sendEmail
