'use client'
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export function ClientLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}