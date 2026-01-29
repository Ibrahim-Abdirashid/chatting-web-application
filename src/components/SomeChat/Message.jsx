

let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s";
const Message = ({ Message, owner }) => {
  return (
    <div className={`flex items-start gap-3 mb-4 ${owner ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="flex flex-col items-center gap-1">
        <img src={img} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
      </div>
      <div className={`max-w-[70%] p-3 px-4 rounded-xl text-sm shadow-sm ${owner ? 'bg-[#dcf8c6] text-black rounded-tr-none' : 'bg-white text-black rounded-tl-none'}`}>
        <p className="leading-relaxed">{Message}</p>
      </div>
    </div>
  )
}

export default Message