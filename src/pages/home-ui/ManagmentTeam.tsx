import TeamCarousel from './CarouselTeam'

const ManagmentTeam = () => {
  return (
    <section data-aos="fade-up" id="nosotros" className='flex flex-col gap-8 px-8 py-12 text-xl '>
      <div className='flex flex-col gap-6 font-wix md:pl-14'>
        <h3 className='text-3xl md:text-[28px] text-center font-extrabold text-primary md:text-left'> Nuestro equipo directivo </h3>
        <p className='text-base md:text-base'>En TCI, nuestro equipo combina 
          <span className='text-primary font-semibold'> pasión, experiencia y compromiso para impulsar tu crecimiento. </span> 
           Cada solución que desarrollamos nace de una 
          <span className='text-primary font-semibold'> profunda comprensión de tus desafíos empresariales y de un enfoque personalizado </span>
           que pone tus objetivos en el centro. Nuestro equipo  no solo lidera la innovación, sino que se involucra contigo en cada etapa, asegurando que la tecnología trabaje para lo que realmente importa:
          <span className='text-primary font-semibold'> maximizar tus resultados y brindarte tranquilidad.” </span>
        </p>
      </div>
      <div className="md:mx-auto py-10 flex justify-center md:pl-14">
        <TeamCarousel />
      </div>
    </section>
  )
}

export default ManagmentTeam


