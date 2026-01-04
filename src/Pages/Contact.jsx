import { BsTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";



const Contact = () => {
  return (
    <section>
      <div>
        {/* left */}
        <div>
          <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
          </div>
          {/* icons-ka qeybta left-ga */}
          <div>
            <div>
              <BsTelephonePlusFill size={30} />
              <h3>+996 555 555 555</h3>
            </div>
            <div>
              <MdEmail size={30} />
              <h3>info@example.com</h3>
            </div>
            <div>
              <MdAddLocationAlt size={30} />
              <h3>123 Main Street, City, Country</h3>
            </div>

          </div>
          
        </div>

        {/* right */}
      </div>
    </section>
  )
}

export default Contact