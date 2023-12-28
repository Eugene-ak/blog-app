import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../stylesheets/home.styles.css';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </>
    )
}

export default HomePage;
