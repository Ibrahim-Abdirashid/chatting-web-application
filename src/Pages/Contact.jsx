import { BsTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";



const Contact = () => {
  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto ">
      <div className="grid grid-cols-2">
        {/* left */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h1 className=" text-2xl font-bold text-green-500">Contact Us</h1>
            <p className="text-left leading-loose text-gray-800 font-light   ">If you have any questions, feel free to reach out to us!</p>
          </div>
          {/* icons-ka qeybta left-ga */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <BsTelephonePlusFill size={20} color="rgb(34 197 94)" />
              <h3>+252 63 4924649 </h3>
            </div>
            <div className="flex gap-6 items-center">
              <MdEmail size={20} color="rgb(34 197 94)" />
              <h3>Neeykaraamo@gmail.com</h3>
            </div>
            <div className="flex gap-6 items-center">
              <MdAddLocationAlt size={20} color="rgb(34 197 94)" />
              <h3>123 Main Street, City, Country</h3>
            </div>

          </div>
          
        </div>

        {/* right */}
        <div className="flex flex-col gap-6">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <textarea placeholder="Feel Free" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"></textarea>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact