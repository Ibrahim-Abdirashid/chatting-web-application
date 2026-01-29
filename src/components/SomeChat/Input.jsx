
import React from 'react'

const Input = () => {
  return (
    <div className='h-20 bg-[#11212b] p-4 flex items-center justify-between'>
      <input
        type="text"
        placeholder='Type something...'
        className='w-[80%] bg-transparent outline-none text-white placeholder-gray-400 text-sm'
      />
      <div className='flex items-center gap-4'>
        <img src="./img/attach.png" alt="" className='h-6 cursor-pointer' />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="./img/img.png" alt="" className='h-6 cursor-pointer' />
        </label>
        <button className='bg-[#00a884] text-white px-4 py-2 rounded-md font-medium text-sm'>Send</button>
      </div>
    </div>
  )
}

export default Input