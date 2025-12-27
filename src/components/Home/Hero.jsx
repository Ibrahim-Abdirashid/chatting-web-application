import React from 'react'
import { Link } from "react-router-dom";



const Hero = () => {

  const currentUser = false;
  return (
    <div className=" flex justify-between max-w-6xl mx-auto mt-10 gap-10 ">
      <div className="flex flex-col justify-center gap-6 max-w-lg mt-20 items-start">
        <h1 className="text-4xl font-bold text-green-500 ">CHAT WITH YOUR FRIENDS AND STAY CONNECTED</h1>
        <p className="text-lg text-gray-800 font-light">Chatting web application that allows users to communicate with each other in real-time</p>

        {!currentUser? 
        <Link
            to="/login"
            className="text-xl bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Get Started
          </Link>  
          :
          <Link
            to="/login"
            className="text-xl bg-green-500 text-white px-4 py-2 rounded-md"
          >
            make 
          </Link>
      }
      </div>

    {/* image-ka hero */}
    <div>
      <img src="./hero.gif" alt="" />
    </div>
    </div>
  )
}

export default Hero