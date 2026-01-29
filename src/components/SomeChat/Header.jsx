

import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-20 bg-[#11212b] py-3 px-6'>
      <p className='text-white font-bold text-lg'>Abraham Razhid</p>
      <div className='flex gap-10 items-center justify-between '>
        <button className='bg-[#00a884] text-white font-bold text-xs py-2 rounded-md px-4 uppercase'>Logout</button>
      </div>
    </div>
  )
}

export default Header