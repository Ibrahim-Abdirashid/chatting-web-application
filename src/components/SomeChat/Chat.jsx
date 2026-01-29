
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='  flex-[2]'>
      <div className='h-20 text-white bg-[#11212b] px-4 flex justify-between items-center'>
        <span className='font-medium'>Ayub Dhexyar </span>
        <div className='flex items-center gap-4'>
          <img src="./img/cam.png" alt="" className='h-6 cursor-pointer' />
          <img src="./img/add.png" alt="" className='h-6 cursor-pointer' />
          <img src="./img/more.png" alt="" className='h-6 cursor-pointer' />
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  )
}

export default Chat