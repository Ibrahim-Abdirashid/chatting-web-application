
import React from 'react'
import { useState } from 'react'

const Input = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      // Halkan waxaa dambe ka imaan doona logic-ga fariinta lagu dirayo
      setMessage(""); // Nadiifi input-ka ka dib marka la diro
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };


  return (
    <div className='h-20 bg-[#11212b] p-4 flex items-center justify-between'>
      <input
        type="text"
        placeholder='Type something...'
        className='w-[80%] bg-transparent outline-none text-white placeholder-gray-400 text-sm'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className='flex items-center gap-4'>
        <img src="./img/attach.png" alt="" className='h-6 cursor-pointer' />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="./img/img.png" alt="" className='h-6 cursor-pointer' />
        </label>
        <button
          onClick={handleSend}
          className='bg-[#00a884] text-white px-4 py-2 rounded-md font-medium text-sm'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Input