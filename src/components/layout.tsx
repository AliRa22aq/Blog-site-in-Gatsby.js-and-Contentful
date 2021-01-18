import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({children}:any) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
