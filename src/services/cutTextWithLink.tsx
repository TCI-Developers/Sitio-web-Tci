import { Link } from 'react-router-dom';

interface TextoCortadoConLinkProps {
  texto: string;
  limite?: number;
  urlDetalle: string; // URL a la que va el "Leer más"
  index?:number;
  imgValidation:string;
}

export default function TextoCortadoConLink({ texto, limite = 100, urlDetalle,index, imgValidation }: TextoCortadoConLinkProps) {
  const textoRecortado = typeof texto === 'string' && texto.length > limite
  ? texto.slice(0, limite) + '...'
  : texto ?? '';


  return (
    <p className={`text-lg text-white mt-2 font-wix tracking-normal leading-none ${index == 0 ? 'md:text-xl' : 'md:text-sm' }`}>
      {textoRecortado}{' '}
      {
        imgValidation ?
        <Link to={urlDetalle} className="text-blue-600 underline font-bold">
          Leer más
        </Link>
        :
        ''
      }
    </p>
  );
}
