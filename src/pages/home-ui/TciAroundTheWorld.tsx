const TciAroundTheWorld = () => {
  return (
    <section data-aos="fade-up" className="py-16 flex flex-col items-center font-wix">
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl font-bold">TCI alrededor de<br></br> <span className="text-4xl md:text-6xl text-primary ">Mundo</span></h3>
        <p className="text-md md:text-2xl mt-2">
            Tenemos <span className="text-primary font-bold">presencia </span> 
            en <span className="text-primary font-bold">20</span> 
            <br></br>distintos países <span className="text-primary font-bold">alrededor del mundo</span>
        </p>
      </div>

      <div className="flex justify-center font-wix">
        <img src="/home/MAPA-DE-PRESENCIA.gif" alt="MAPA-DE-PRESENCIA" className="w-full md:max-w-[80%] lg:max-w-[70%]" />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="hidden md:block text-white font-bold text-center text-2xl">Estamos en</h3>
        </div>

        <div className="flex md:gap-16 px-12">
          <div>
            <img src="/home/BOTON-EUA.png" alt="EUA" className="w-full max-w-[200px]" />
          </div>   
          <div>
            <img src="/home/BOTON-LATAM.png" alt="LATAM" className="w-full max-w-[200px]" />
          </div>  
          <div>
            <img src="/home/BOTON-EUROPA.png" alt="EUROPA" className="w-full max-w-[200px]" />
          </div>  
          <div>
            <img src="/home/BOTON-ASIA.png" alt="ASIA" className="w-full max-w-[200px]" />
          </div>  
        </div>

      </div>
    </section>
  )
}

export default TciAroundTheWorld
