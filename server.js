const express = require('express')
const next = require('next')
const cors = require('cors')
const bodyParser = require('body-parser')
const sendEmail = require('./service/sendEmail')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())
    // Datos de ejemplo
    const content = [
        {
            title: 'About',
            content:
                "With over 15 years of professional experience as a Frontend Developer and a degree in Software Engineering, I offer a proven track record of driving impactful solutions across diverse web technologies. Throughout my career, I've excelled as a Developer, Leader, and Mentor, specializing in HTML, CSS, PHP, JavaScript, TypeScript, Angular, BrightScript, and more. I am deeply committed to delivering client-centric solutions, consistently exceeding expectations, and garnering positive client feedback. My passion for technology fuels my continuous learning and readiness to tackle new challenges. As a motivated and reliable team member, I am dedicated to achieving excellence in every project.",
        },
        {
            title: 'Fronend Developer',
            content:
                'I have significant experience as a frontend developer, leading and collaborating on various projects. At X-Team, I developed an internal HR platform using React.js and TypeScript, creating reusable components and ensuring robust code quality. I collaborated closely with backend engineers to integrate multiple services through REST APIs, ensuring seamless communication between frontend and backend services.',
        },
        {
            title: 'Team Leader',
            content:
                'As a team leader, I spearheaded the development of a platform at my company, utilizing Angular, TypeScript, SASS, and API REST technologies. I mentored team members, helping them advance their skills and grow into senior developers. I also implemented modular components for the platform, which transformed data from various formats into our application’s data model, ensuring efficient data handling and integration.',
        },
        {
            title: 'Roku Developer',
            content:
                'At Roku, I contributed significantly to the SiriusXM project by enhancing its Roku channel’s functionality and performance. I implemented advanced features such as deep linking and developed a new, user-friendly interface using BrightScript and SceneGraph. My work involved detailed integration with backend services, ensuring a seamless experience across devices. This project showcased my ability to handle complex requirements and deliver high-quality, efficient solutions in a demanding environment.',
        },
    ]

    // Ruta de la API
    server.get('/api/aboutme', (req, res) => {
        res.json(content[0])
    })

    server.get('/api/getroles', (req, res) => {
        const roles = content.slice(1, 4)
        res.json(roles)
    })

    server.post('/api/sendemail', async (req, res) => {
        const { email, name, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const result = await sendEmail({ name, email, message })

        if (result.success) {
            res.status(200).json({ success: true })
        } else {
            res.status(500).json({ error: 'Failed to send email' })
        }
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
