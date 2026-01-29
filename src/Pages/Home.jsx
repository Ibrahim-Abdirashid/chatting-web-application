import React from 'react'
import Features from '../components/Home/Features'
import Hero from '../components/Home/Hero'
import About from './About'
import Contact from './Contact'
import NavBar from '../components/Home/NavBar'
import Footer from '../components/Home/Footer'
import Snowfall from 'react-snowfall'


const Home = () => {
  return (
    <>
    <Snowfall color='green' />
        <NavBar/>
        <Hero />
        <Features />
        
        <About />
        <Contact />

        <Footer/>
       
        

    
    </>
  )
}

export default Home