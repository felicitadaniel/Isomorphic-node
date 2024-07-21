import { useEffect, useState } from 'react'
import $ from 'jquery'

const Home = () => {
    const [aboutMe, setAboutMe] = useState([])
    const [roles, setRoles] = useState([])

    useEffect(() => {
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

            $(window).on('scroll', function () {
                var b = $(window).scrollTop()
                if (b > 72) {
                    $('.navbar').addClass('scroll')
                } else {
                    $('.navbar').removeClass('scroll')
                }
            })
        })

        return () => {
            $(window).off('scroll')
            $('.navbar .nav-link').off('click')
        }
    }, [])

    return (
        <div className="container">
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
                                    Reviews
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
                            <a href="#" className="custom-btn btn" download>
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
                        <div class="col-12">
                            <h3 class="mb-5 text-center">Main Roles</h3>
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
        </div>
    )
}

export default Home
