import OurOfficesCard from "./OurOfficesCard"

const OurOffices = () => {
  return (
    <section className="md:flex md:justify-center tracking-normal">
      <div className="md:max-w-[400px]">
        <h2 className="font-bold text-3xl sm:text-xl whitespace-normal leading-10 text-primary md:text-xl lg:text-2xl font-bebas">NUESTRAS OFICINAS</h2>
        <p className="text-xl md:mb-8 md:md:text-sm font-wix">Puedes visitarnos en nuestras oficinas:</p>    
        <OurOfficesCard
          location="Uruapan, Michoacán"
          address="Calle Estocolmo #13, Col. La Joyita Uruapan Michoacán."
          phone="(452) 524 2530"
          img="UBICACION-TCI-CONSULTORIA.png"
        />
        <OurOfficesCard
          location="Zapopan, Jalisco"
          address="P. de los Virreyes 45, Puerta de Hierro, Zapopan, Jal"
          phone="(33) 0000000"
          img="UBICACION-ZAPOPAN.png"
        />
      </div>
    </section>
  )
}

export default OurOffices
