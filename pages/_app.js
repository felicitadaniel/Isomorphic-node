// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../styles/custom.scss'
// import '../styles/owl.carousel.scss'
// import '../styles/owl.theme.default.scss'
// import '../styles/all.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Daniel Felicita</title>
                <link rel="icon" href="/Isomorphic-node/images/favicon.ico" />
            </Head>
            <script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
                integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
                crossOrigin="anonymous"
            ></script>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            ></link>
            <link
                rel="stylesheet"
                href="/Isomorphic-node/styles/custom.scss"
            ></link>
            <link
                rel="stylesheet"
                href="/Isomorphic-node/styles/all.scss"
            ></link>
            <link
                rel="stylesheet"
                href="/Isomorphic-node/styles/owl.carousel.scss"
            ></link>
            <link
                rel="stylesheet"
                href="/Isomorphic-node/styles/owl.theme.default.scss"
            ></link>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
