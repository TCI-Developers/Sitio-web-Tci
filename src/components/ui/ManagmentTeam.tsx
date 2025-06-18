import React from 'react'
import TeamCarousel from './CarouselTeam'

const ManagmentTeam = () => {
  return (
    <section className='flex flex-col gap-8 p-12 text-xl md:flex-row'>
      <div className='flex flex-col  gap-6 font-wix py-10'>
        <h3 className='text-3xl text-center font-bold text-primary md:text-left'> Nuestro equipo directivo</h3>
        <p>Personas <span className='text-primary'>comprometidas con tu crecimiento</span></p>
        <p>Detrás de cada solucion de TCI hay personas con <span className='text-primary'>vocación, experiencia y una profunda compresión de los desafíos empresariales</span></p>
        <p>Nuestro quipo directivo no solo lidera la estrategia de innovacion, tambien escucha, acompaña y se involucra en cada etapa del proceso para que <span className='text-primary'>cada cliente reciba una solución hecha a la medida.</span></p>
        <p className='text-primary'>Trabajamos hombro a hombro contigo para que  la tecnología impulse lo que realmente importa tus resultados y tu tranquilidad.</p>
      </div>
      <div className="max-w-4xl mx-auto py-10">
        <TeamCarousel />
      </div>
    </section>
  )
}

export default ManagmentTeam
