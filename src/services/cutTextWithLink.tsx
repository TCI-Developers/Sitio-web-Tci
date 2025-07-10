import { Link } from 'react-router-dom';

interface TextoCortadoConLinkProps {
  texto: string;
  limite?: number;
  urlDetalle: string; // URL a la que va el "Leer más"
}

export default function TextoCortadoConLink({ texto, limite = 100, urlDetalle }: TextoCortadoConLinkProps) {
  const textoRecortado = texto.length > limite ? texto.slice(0, limite) + '...' : texto;

  return (
    <p className='text-xs lg:text-sm text-white mt-2 font-wix tracking-normal leading-none'>
      {textoRecortado}{' '}
      <Link to={urlDetalle} className="text-blue-600 underline">
          Leer más
      </Link>
    </p>
  );
}
