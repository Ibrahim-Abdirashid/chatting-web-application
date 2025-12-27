import React from 'react'
import data_features from './feature.json'


const Features = () => {
  return (
    
    <div className="max-w-6xl mx-auto mt-20 mb-20 flex flex-col gap-10 py-32">
      <div className='flex flex-col items-center justify-center gap-3 '>
        <h1 className='text-4xl font-bold text-green-500'>How Does it Works?</h1>
        <p className=' text-center text-lg text-gray-800 font-light'> Chatting web application that allows users to communicate with each other in real-time</p>
      </div>
      <div className=' flex flex-col gap-20'>
        {
          data_features.map((feature, index) => (
            <div key={index} className='grid grid-cols-2 gap-10 items-center'>
              <div className='flex flex-col py-24 gap-10'>
              <h2 className='text-3xl font-bold'>{feature.name}</h2>
              <p className='text-base text-gray-800 font-light'>{feature.description}</p>
              </div>
              
              <img src={feature.img} alt={feature.name}  className=' max-w-xl' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features