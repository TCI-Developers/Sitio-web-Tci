
const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-[#0f245f] to-[#00c0f4] min-h-36 md:max-h-64 w-full p-12 md:flex md:items-center overflow-hidden'>
      <div className='flex md:flex-auto justify-center md:justify-start'>
        <img src="/LOGO-TCI.svg" alt="LOGO EMPRESA" className='w-1/4 max-w-[200px]'/>
      </div>
      <div className='flex md:flex-1 flex-col gap-4 md:flex-row md:justify-center'>
        <div className="flex flex-col md:items-center flex-1">
          <h3 className='font-bebas text-primary font-bold text-xl'>EMPRESA</h3>
          <p className='font-wix text-white mt-2 text-xs lg:text-sm'>TCI Consultoria empresa con labor de formar empresas modelo a travez de un 
            cambio de cultura de trabajo, una cultura de orden y calidad lograda a través 
            de la gestión del capitan humano
          </p>
        </div>
        <div className="flex flex-col md:items-center flex-1">
          <h3 className='font-bebas text-primary font-bold text-xl'>CONTACTO</h3>
          <div>
            <p className='font-wix text-white mt-2 text-xs lg:text-sm'>
              Calle Estocolmo #13,<br/>
              Col la Joyita,<br/>
              Uruapan Michoacan.
            </p>
            <p className='font-wix text-white mt-2 text-xs lg:text-sm'>
              (452) 524 2530
            </p>
          </div>

        </div>
        <div className="flex flex-col md:items-center flex-1">
          <h3 className='font-bebas text-primary font-bold text-xl'>SERVICIOS TCI</h3>
          <div>
            <p className='font-wix text-white mt-2 text-xs lg:text-sm'>Consultoria Administrativa</p>
            <p className='font-wix text-white mt-2 text-xs lg:text-sm'>Desarrollo Movil</p>
            <p className='font-wix text-white mt-2 text-xs lg:text-sm'>Desarrollo Web</p>
            <p className='font-wix text-white mt-2 text-xs lg:text-sm'>Consultoria Administrativa</p>
          </div>
          

        </div>
      </div>
      
    </section>
  )
}

{/* <div className="flex flex-col justify-end w-full p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <h3 className="text-white lg:text-lg xl:text-xl font-bold font-bebas leading-none">
          {titulo}
        </h3>
        <p className="text-xs lg:text-sm text-white mt-2 font-wix tracking-normal leading-none">
          {descripcion}
        </p>
      </div> */}

export default Footer
