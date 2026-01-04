import React from 'react'
import Features from '../components/Home/Features'
import Hero from '../components/Home/Hero'
import About from './About'

const Home = () => {
  return (
    <>
     
        <Hero />
        <Features />
         <section id="about">
        <About />
       </section>
        

    
    </>
  )
}

export default Home