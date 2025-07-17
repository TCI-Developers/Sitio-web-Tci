import TextoCortadoConLink from "../../services/cutTextWithLink";

interface Propiedades {
    titulo: string;
    descripcion: string;
    fondo?:string;
  }
const BlogCard = ({titulo,descripcion,fondo}:Propiedades) => {
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
        <h3 className="text-white text-2xl font-bold font-bebas leading-none">
          {titulo}
        </h3>
        <TextoCortadoConLink texto={descripcion} limite={250} urlDetalle={`/`} />
      </div>
    </section>

  )
}

export default BlogCard
