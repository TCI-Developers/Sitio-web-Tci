import { FaArrowCircleRight } from 'react-icons/fa';
interface Propiedades {
    titulo: string;
    descripcion: string;
    fondo:string;
  }
  
const SystemsCard = ({titulo,descripcion,fondo}:Propiedades) => {
  return (
    <div className={`flex flex-col justify-end pl-4 pb-8 pr-2 rounded-2xl min-h-[210px] max-w-[400px] md:min-h-[300px] md:max-w-[320px] leading-none relative`}
    style={{
      backgroundImage: `linear-gradient(to top, rgba(0, 192, 244, 0.7), #fff0), url(${fondo})`,
      backgroundSize:'cover',

    }}
    >
      <div className='w-3/4'>
        <h3 className='text-xl font-bold leading-none font-bebas'>{titulo}</h3>
        <p className='text-base mt-2 leading-none text-black font-wix tracking-normal'>{descripcion}</p>
      </div>
      <div className='flex justify-end mt-2 absolute right-4 bottom-4'>
        <FaArrowCircleRight size={40} />
      </div>
    </div>
  )
}

export default SystemsCard
