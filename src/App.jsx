import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import SomeChat from './Pages/SomeChat'
import NotFound from './Pages/NotFound'
import NavBar from './components/Home/NavBar'
import Footer from './components/Home/Footer'
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    <>
    <Snowfall color='green' />
    <NavBar />  
    <Routes>
      {/* pages */}
      <Route path='/' element={<Home />} />
      {/* <Route path='/about' element={<About />} /> */}
     
      <Route path='/contact' element={<Contact />} />

      {/* auth page */}
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      {/* sometask */}
      <Route path='/somechat' element={<SomeChat />} />
       {/* notfound page */}
       <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App