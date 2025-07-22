import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Copyright />
        </>
    )
}
