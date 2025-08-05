import TextoCortadoConLink from "../../services/cutTextWithLink";

interface Propiedades {
    titulo: string;
    descripcion: string;
    fondo?:string;
    id?:string;
    index?:number;
  }
const BlogCard = ({titulo,descripcion,fondo,id,index}:Propiedades) => {
  //obtengo el primer parrafo del html
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = descripcion;

  const paragraphs = tempDiv.querySelectorAll('p');

  let firstRealText = '';
  for (const p of paragraphs) {
    const text = p.textContent?.trim();
    if (text) {
      firstRealText = text;
      break;
    }
  }
  
  return (
    <section
      className="flex items-end rounded-3xl overflow-hidden w-full h-full"
      style={{
        backgroundImage: `linear-gradient(to top, #0f245f, #fff0), url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-end w-full p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <h3 className={`text-primary font-bold font-bebas leading-none ${index==0?'text-4xl md:text-[48px]':'text-4xl md:text-2xl'}`}>
          {titulo}  #{id}
        </h3>
        <TextoCortadoConLink texto={firstRealText} limite={250} urlDetalle={`/`} index={index}/>
      </div>
    </section>

  )
}

export default BlogCard
