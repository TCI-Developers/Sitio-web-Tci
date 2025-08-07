import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isBlogRoute = location.pathname.includes('/blog/');

  return (
    <section className={`min-h-36 lg:max-h-64 w-full p-12 lg:flex lg:items-center overflow-hidden ${!isBlogRoute ? 'bg-gradient-to-r from-[#0f245f] to-[#00c0f4] text-white':'bg-white text-black md:pl-28 pt-4'}`}>
      <div className='flex lg:flex-auto justify-center lg:justify-start'>
      <div className='flex lg:flex-auto justify-center lg:justify-start'>
        {
          !isBlogRoute ? (
            <img src="/home/LOGO-TCI.svg" alt="LOGO EMPRESA" className='w-3/4 max-w-[200px]' />
          ) : (
            <img src="/home/LOGO-TCI-OBS.svg" alt="LOGO EMPRESA" className='w-3/4 max-w-[300px] lg:w-1/4' />
          )
        }
      </div>
        
      </div>
      <div className='flex lg:flex-1 flex-col gap-4 lg:flex-row md:justify-center '>
        <div className="flex flex-col lg:px-4 max-w-60 ">
          <h3 className='font-bebas text-primary font-bold text-xl '>EMPRESA</h3>
          <p className='font-wix mt-2 text-xs lg:text-sm'>TCI Consultoria empresa con labor de formar empresas modelo a travez de un 
            cambio de cultura de trabajo, una cultura de orden y calidad lograda a través 
            de la gestión del capitan humano
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col flex-1">
            <h3 className='font-bebas text-primary font-bold text-xl'>CONTACTO</h3>
            <div>
              <p className='font-wix mt-2 text-xs lg:text-sm'>
                Calle Estocolmo #13,<br/>
                Col la Joyita,<br/>
                Uruapan Michoacan.
              </p>
              <p className='font-wix mt-2 text-xs lg:text-sm'>
                (452) 524 2530
              </p>
            </div>

          </div>
          <div className="flex flex-col flex-1">
            <h3 className='font-bebas text-primary font-bold text-xl'>SERVICIOS TCI</h3>
            <div>
              <p className='font-wix mt-2 text-xs lg:text-sm'>Consultoria Administrativa</p>
              <p className='font-wix mt-2 text-xs lg:text-sm'>Desarrollo Movil</p>
              <p className='font-wix mt-2 text-xs lg:text-sm'>Desarrollo Web</p>
              <p className='font-wix mt-2 text-xs lg:text-sm'>Consultoria Administrativa</p>
            </div>
            

          </div>
        </div>
      </div>
      
    </section>
  )
}



export default Footer
