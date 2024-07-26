import { useEffect, useState } from 'react'
import $ from 'jquery'

const Home = () => {
    const [aboutMe, setAboutMe] = useState([])
    const [roles, setRoles] = useState([])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    useEffect(() => {
        window.jQuery = $
        window.$ = $

        require('../public/js/smoothscroll.js')
        require('../public/js/owl.carousel.min.js')

        const fetchContent = async () => {
            try {
                const res = await fetch('/api/aboutme')
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const data = await res.json()
                setAboutMe(data)

                const res2 = await fetch('/api/getroles')
                if (!res2.ok) {
                    throw new Error(`HTTP error! status: ${res2.status}`)
                }
                const data2 = await res2.json()
                setRoles(data2)
            } catch (error) {
                console.error('Failed to fetch articles:', error)
            }
        }

        fetchContent()

        $(function () {
            'use strict'

            // $('.navbar .nav-link').on('click', function () {
            //     $('.navbar-collapse').collapse('hide')
            // })

            $(window).on('scroll', function () {
                var b = $(window).scrollTop()

                if (b > 72) {
                    $('.navbar').addClass('scroll')
                } else {
                    $('.navbar').removeClass('scroll')
                }
            })

            $('#testimonials-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    900: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                        loop: false,
                    },
                },
            })

            $(function () {
                $('.navbar .nav-link').on('click', function (event) {
                    var $anchor = $(this)
                    $('html, body')
                        .stop()
                        .animate(
                            {
                                scrollTop:
                                    $($anchor.attr('href')).offset().top - 49,
                            },
                            500
                        )
                    event.preventDefault()
                })
            })
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                // Handle successful response
                console.log('Email sent successfully')
            } else {
                // Handle error response
                console.error('Failed to send email')
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    return (
        <div className="container-fluid">
            {/* MENU BAR */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Daniel Resume
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a
                                    href="#intro"
                                    className="nav-link smoothScroll"
                                >
                                    Introduction
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    href="#about"
                                    className="nav-link smoothScroll"
                                >
                                    About Me
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    href="#testimonials"
                                    className="nav-link smoothScroll"
                                >
                                    References
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    className="nav-link smoothScroll"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
                            <a
                                href="/assets/Daniel_Felicita_Professional_Resume.pdf"
                                className="custom-btn btn"
                                download="Daniel_Felicita_Professional_Resume.pdf"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section
                className="hero d-flex flex-column justify-content-center align-items-center"
                id="intro"
            >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-5 col-md-5 col-10">
                            <img
                                src="/images/daniel_no_BG.png"
                                className="img-fluid"
                                alt="Daniel Resume HTML Template"
                            />
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                            <div className="hero-text">
                                <h1 className="hero-title">
                                    👋 Daniel, Developer
                                </h1>

                                <a
                                    href="mailto:daniel.felicita@gmail.com"
                                    className="email-link"
                                >
                                    daniel.felicita@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about section-padding" id="about">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h3 className="mb-4">This is Daniel's Resume</h3>

                            <p className="text-justify">{aboutMe.content}</p>

                            <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                                <li>
                                    <strong>Full Name :</strong> Daniel Felicita
                                </li>

                                <li>
                                    <strong>Date of Birth:</strong> 16 July 1984
                                </li>

                                <li>
                                    <strong>Email :</strong>{' '}
                                    daniel.felicita@gmail.com
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-5 mx-auto col-md-6 col-12">
                            <img
                                src="images/true-agency.jpg"
                                className="about-image img-fluid"
                                alt="Ben's Resume HTML Template"
                            />
                        </div>
                    </div>
                    <div className="row about-third">
                        <div className="col-12">
                            <h3 className="mb-5 text-center">Main Roles</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h4>{roles[0]?.title}</h4>
                            <p>{roles[0]?.content}</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h4>{roles[1]?.title}</h4>
                            <p>{roles[1]?.content}</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h4>{roles[2]?.title}</h4>
                            <p>{roles[2]?.content}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="testimonials section-padding" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-5 text-center">References</h3>

                            <div
                                className="owl-carousel owl-theme"
                                id="testimonials-carousel"
                            >
                                <a
                                    href="https://www.linkedin.com/in/nikunjchapadia/"
                                    target="_blank"
                                >
                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img
                                                    src="/images/nikunj.jpeg"
                                                    className="img-fluid"
                                                    alt="testimonials image"
                                                />
                                            </div>

                                            <div className="testimonials-info">
                                                <h6 className="mb-0">
                                                    Nikunj Chapadia
                                                </h6>
                                                <span>
                                                    Project Lead<br></br>SIRIUS
                                                    XM RADIO INC.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/henderruiz/"
                                    target="_blank"
                                >
                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img
                                                    src="/images/hender.jpeg"
                                                    className="img-fluid"
                                                    alt="testimonials image"
                                                />
                                            </div>

                                            <div className="testimonials-info">
                                                <h6 className="mb-0">
                                                    Hender Ruiz
                                                </h6>
                                                <span>
                                                    Lead Project Manager
                                                    <br></br>LIAL SYSTEMS SAS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/nmedinam/"
                                    target="_blank"
                                >
                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img
                                                    src="/images/nelson.jpeg"
                                                    className="img-fluid"
                                                    alt="testimonials image"
                                                />
                                            </div>

                                            <div className="testimonials-info">
                                                <h6 className="mb-0">
                                                    Nelson Medina
                                                </h6>
                                                <span>
                                                    Senior DevOps Engineer
                                                    <br></br>
                                                    Stocktwits, Inc.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/juan-miguel-echeverria-blanco-30ab27121/"
                                    target="_blank"
                                >
                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img
                                                    src="/images/juan.jpeg"
                                                    className="img-fluid"
                                                    alt="testimonials image"
                                                />
                                            </div>

                                            <div className="testimonials-info">
                                                <h6 className="mb-0">
                                                    Juan Echeverria
                                                </h6>
                                                <span>
                                                    Systems Engineer<br></br>
                                                    EPAM Systems, Inc.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="contact section-padding pt-0" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form webform"
                                role="form"
                            >
                                <div className="form-group d-flex flex-column-reverse">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group d-flex flex-column-reverse">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group d-flex flex-column-reverse">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="form-control"
                                    id="submit-button"
                                    name="submit"
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        <div className="mx-auto col-lg-4 col-md-6 col-12">
                            <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>

                            <a className="mb-1" href="tel:+573147828092">
                                +57 314 7828092
                            </a>

                            <p>
                                <a href="mailto:daniel.felicita@gmail.com">
                                    daniel.felicita@gmail.com
                                    <i className="fas fa-arrow-right custom-icon"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
