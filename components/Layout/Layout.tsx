import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Head from "next/head"

import { PropsWithChildren } from 'react'

export default function Layout( {children} : PropsWithChildren ) {
    return (
    <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"></link>
            <title>Pokedex</title>
        </Head>
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
    </>
    )
}