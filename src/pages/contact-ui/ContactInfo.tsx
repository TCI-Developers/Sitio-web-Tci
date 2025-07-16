import { TbClockHour4 } from "react-icons/tb";
import { CgPhone } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <section className="md:flex md:justify-center tracking-normal">
      <div className="font-bebas py-12 flex flex-col gap-4 md:py-16 md:max-w-[600px]">
        <h2 className="font-bold text-3xl sm:text-xl whitespace-normal leading-10 text-primary md:text-5xl md:tracking-tighter">INFORMACIÓN DE CONTACTO</h2>
        <p className="font-wix font-semibold text-xl md:text-sm md:mb-8">Gracias por tu visita, estamos aquí para ayudarte. Visitanos en:</p>
        
        <div className="flex gap-2 p-2 bg-white rounded-xl text-black text-[11px]">
        
          <div className="flex gap-2 flex-1 border-r-black border-r">
          <div className="flex items-center justify-center"><TbClockHour4 color="#00c0f4" size={25}/></div>
            <div>
              <p className="font-bold font-wix">Horario de atención:</p>
              <p>Lunes a viernes</p>
              <p>8:00 am - 17:00pm</p>
            </div>
          </div>

          <div className="flex gap-4 flex-1">
            <div className="flex items-center justify-center"><HiOutlineLocationMarker color="#00c0f4" size={25}/></div>
            <div>
              <p>Calle Estocolmo #13,</p>
              <p>Col la Joyita,</p>
              <p>Uruapan, Michocán.</p>
            </div>
          </div>
          
        </div>

        <div className="flex gap-2 bg-primary w-1/2 rounded-full p-2 md:mt-4">
          <div className="bg-white rounded-full p-2"><CgPhone size={25} color="#00c0f4"/></div>
          <p className="flex items-center">(452) 524 2530</p>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
