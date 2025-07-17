import { FaArrowRight } from "react-icons/fa6";

const Form = () => {
  return (
    <section className="md:py-12 md:flex md:justify-center tracking-normal">
      <div className="bg-white text-black px-4 py-8 rounded-[2.5rem] md:w-11/12 md:max-w-[400px]">
        <h2 className="font-bebas font-bold text-4xl sm:text-xl whitespace-normal leading-10 text-primary md:text-2xl tracking-tight">HAZ TU PREGUNTA</h2>
        <p className="font-wix leading-none mt-2 md:text-xs text-[#0F245F]">
          Si tienes una pregunta, puedes contactarnos.
          Rellena el formulario con tus datos, y te mandaremos un mail.
        </p>
        <form className="p-2" action="https://formsubmit.co/alexisgmez65@gmail.com" method="POST">
          
          <div className="flex gap-2">
              <input className="w-1/2 border-b-2 border-b-black py-2 focus:outline-none placeholder-gray-600" type="text" name="nombre" placeholder="Nombre(s)" required />
              <input className="w-1/2 border-b-2 border-b-black py-2 focus:outline-none placeholder-gray-600" type="text" name="apellido" placeholder="Apellido(s)" required />
          </div>
          <div className="flex gap-2 my-4">
              <input className="w-1/2 border-b-2 border-b-black py-2 focus:outline-none placeholder-gray-600" type="tel" name="numero" placeholder="Número de Contacto" required />
              <input className="w-1/2 border-b-2 border-b-black py-2 focus:outline-none placeholder-gray-600" type="email" name="email" placeholder="E-mail" required />
          </div>

          <div className="flex flex-col justify-start gap-8">
              <textarea className="border-b-2 border-b-black pb-12 focus:outline-none placeholder-gray-600" name="mensaje" placeholder="Mensaje" required />
              <button type="submit" className="bg-primary w-1/2 text-white p-3 rounded-2xl flex justify-between items-center font-wix">Enviar <FaArrowRight size={24} /></button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Form
