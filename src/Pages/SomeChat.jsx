import React from 'react'
import Sidebar from '../components/SomeChat/Sidebar'
import Chat from '../components/SomeChat/Chat'

const SomeChat = () => {
  return (
    <div className='bg-green-800 h-screen  flex justify-center items-center'>
      <div className='border-2 h-[90%] w-full max-w-6xl mx-auto m-4 rounded-lg flex overflow-hidden '>

        <Sidebar />
        <Chat/>

      </div>
    </div>
  )
}

export default SomeChat