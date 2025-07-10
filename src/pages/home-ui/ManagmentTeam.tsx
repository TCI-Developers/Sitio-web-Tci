import TeamCarousel from './CarouselTeam'

const ManagmentTeam = () => {
  return (
    <section data-aos="fade-up" id="nosotros" className='flex flex-col gap-8 px-8 py-12 text-xl md:flex-row'>
      <div className='flex flex-col md:flex-1  gap-6 font-wix py-10'>
        <h3 className='text-2xl md:text-3xl text-center font-bold text-primary md:text-left'> Nuestro equipo directivo</h3>
        <p className='text-sm md:text-base'>Personas <span className='text-primary'>comprometidas con tu crecimiento</span></p>
        <p className='text-sm md:text-base'>Detrás de cada solución de TCI hay personas con <span className='text-primary'>vocación, experiencia y una profunda compresión de los desafíos empresariales</span></p>
        <p className='text-sm md:text-base'>Nuestro quipo directivo no solo lidera la estrategia de innovación, también escucha, acompaña y se involucra en cada etapa del proceso para que <span className='text-primary'>cada cliente reciba una solución hecha a la medida.</span></p>
        <p className='text-primary text-sm md:text-base'>Trabajamos hombro a hombro contigo para que  la tecnología impulse lo que realmente importa: tus resultados y tu tranquilidad.</p>
      </div>
      <div className="max-w-4xl md:flex-1 md:mx-auto py-10 flex justify-center">
        <TeamCarousel />
      </div>
    </section>
  )
}

export default ManagmentTeam
