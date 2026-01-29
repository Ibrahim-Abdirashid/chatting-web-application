

import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='bg-[#004e4a] p-4 h-[calc(100vh-160px)] overflow-y-scroll scrollbar-hide flex flex-col'>
      <Message Message={"Asc, Wll Xld kwrn sidee tahay."} owner={true} />
      <Message Message={"Wcs, Wll Fcn."} owner={false} />
      <Message Message={"Adiga bal iska waran xaaladaha sidee lahay."} owner={true} />
      <Message Message={"Alx wll qaali waan kuu fiicanahay."} owner={false} />
      <Message Message={"M.a wll waan xog wareysanayay haddii aad ii nabad qabto waa Alx ."} owner={true} />
    </div>
  )
}

export default Messages