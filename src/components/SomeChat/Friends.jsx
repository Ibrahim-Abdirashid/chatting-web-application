
let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s";
const Friends = () => {
  return (
    <>
      <div className="flex p-3 items-center gap-4 cursor-pointer hover:bg-[#02a093]">
        <img src={img} alt="" className="w-12 h-12 rounded-full" />
        <div className="font-medium text-sm">
          <span className="text-sm font-medium text-white">Ayub Dhexyar </span>
          <p className="text-xs font-light text-gray-200">quraacdii ma karsateen</p>
        </div>
      </div>
      <div className="flex p-3 items-center gap-4 cursor-pointer hover:bg-[#02a093]">
        <img src={img} alt="" className="w-12 h-12 rounded-full" />
        <div className="font-medium text-sm">
          <span className="text-sm font-medium text-white">Engineerka</span>
          <p className="text-xs font-light text-gray-200">game-ka saaka ma is keeneysaa</p>
        </div>
      </div>
      <div className="flex p-3 items-center gap-4 cursor-pointer hover:bg-[#02a093]">
        <img src={img} alt="" className="w-12 h-12 rounded-full" />
        <div className="font-medium text-sm">
          <span className="text-sm font-medium text-white">Ustad Abdirahman</span>
          <p className="text-xs font-light text-gray-200">suuqaa alaab la iiga diray</p>
        </div>
      </div>
    </>
  )
}

export default Friends