// const Hero = () => {
//   return (
//     <>
//         <section id="inicio" className='px-10 py-12 md:flex md:justify-center md:py-0 overflow-hidden' >

//           <section data-aos='fade-right' className='flex flex-col items-center gap-10 md:w-1/2 md:justify-center'>
//             <div className='flex flex-col gap-8 w-full'>
//               <div className='flex flex-col font-semibold font-bebas md:items-start lg:items-start'>
//                 <div className='p-0'>
//                   <h2 className='flex flex-col text-2xl whitespace-nowrap md:whitespace-normal leading-none md:text-sm lg:text-xl tracking-tight'>
//                     INNOVANDO SISTEMAS PARA MARCAR LA DIFERENCIA
//                     <span className='text-[38px] md:text-[22px] lg:text-[32px] whitespace-nowrap md:whitespace-normal'>Y BRINDAR MEJORES SERVICIOS</span>
//                   </h2>
                  
//                 </div>    
//               </div>
//               <div className='text-3xl md:text-base md:flex md:items-end lg:text-xl font-wix' style={{letterSpacing:'0px', lineHeight:'1.2'}}>
//                   <h3>
//                     Con más de <span className='font-semibold text-primary'>35 años
//                     de experiencia</span> y con presencia en mas de <span className='font-semibold text-primary'>20 paises</span> en el mundo. <br></br>
//                     Transformamos tus procesos empresariales en sistemas inteligentes
//                   </h3>
//               </div>
//             </div>
//           </section>

//           <section data-aos='fade-left' className='w-full mt-16 md:flex-1 md:w-1/2 md:my-8'>
//             <div className='w-full md:h-full '>
//               <img className='w-full max-w-[700px]' src="/home/GRUPO-DASHBOARDS.svg" alt="GRUPO-DASHBOARDS" loading="eager"/>
//             </div>
//           </section>
//         </section>

//         <section id="clientes" className='flex flex-col items-center gap-2 font-wix'>
//             <div className='flex gap-12 items-center w-full'>
//               <div className='h-1 rounded-2xl w-full bg-primary'></div>
//               <h4 className='text-4xl font-extrabold whitespace-nowrap'>Nuestros Clientes</h4>
//               <div className='h-1 rounded-2xl w-full bg-primary'></div>
//             </div>
//             <p className='text-xl'>Trabajamos con una red de clientes <span className='text-primary'>nacionales</span> e <span className='text-primary'>internacionales</span></p>
//         </section>

//           <section  className="flex justify-center items-center gap-8 w-full mt-10 overflow-x-auto whitespace-nowrap pl-0 pr-2">
//             <div className="flex-shrink-0">
//               <img src="/home/LOGO-SVG.svg" loading="lazy"  alt="SV FRESH" className='w-[120px]' />
//             </div>
//             <div className="flex-shrink-0">
//               <img src="/home/LOGO-ZELESTRA.svg" loading="lazy" alt="ZELESTRA" className='w-[120px]' />
//             </div>
//             <div className="flex-shrink-0">
//               <img src="/home/LOGO-AES.svg" loading="lazy" alt="AES" className='w-[80px]' />
//             </div>
//             <div className="flex-shrink-0">
//               <img src="/home/LOGO-FARMACIAS-SIMILARES.svg" loading="lazy" alt="FARMACIAS SIMILARES" className='w-[120px]' />
//             </div>
//             <div className="flex-shrink-0">
//               <img src="/home/LOGO-ARRENDAMEX.svg" loading="lazy" alt="ARRENDAMEX" className='w-[100px]' />
//             </div>
//             <div className="flex-shrink-0">
//               <img src="/home/LOGO-LA-BONANZA.svg" loading="lazy" alt="LA BONANZA" className='w-[100px]' />
//             </div>

//         </section>
//     </>
//   )
// }

// export default Hero
const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="px-3 sm:px-6 md:px-10 py-12 md:flex md:justify-center md:py-0 overflow-hidden w-full"
      >
        <section
          data-aos="fade-right"
          className="flex flex-col items-center gap-10 md:w-1/2 md:justify-center w-full"
        >
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col font-semibold font-bebas items-center md:items-start lg:items-start  md:text-left">
              <div className="p-0">
                <h2 className="flex flex-col text-sm sm:text-xl whitespace-normal leading-none md:text-sm lg:text-xl tracking-tight">
                  INNOVANDO SISTEMAS PARA MARCAR LA DIFERENCIA
                  <span className="text-xl sm:text-3xl md:text-[22px] lg:text-[32px] whitespace-normal">
                    Y BRINDAR MEJORES SERVICIOS
                  </span>
                </h2>
              </div>
            </div>

            <div
              className="text-base sm:text-lg md:text-base md:flex md:items-end lg:text-xl font-wix text-left md:text-left"
              style={{ letterSpacing: "0px", lineHeight: "1.2" }}
            >
              <h3>
                Con más de
                <span className="font-semibold text-primary">
                  35 años de experiencia
                </span>
                y con presencia en mas de
                <span className="font-semibold text-primary">20 países</span> en el mundo. <br />
                Transformamos tus procesos empresariales en sistemas inteligentes
              </h3>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-left"
          className="w-full mt-16 md:flex-1 md:w-1/2 md:my-8 flex justify-center"
        >
          <div className="w-full md:h-full max-w-[700px] px-4 sm:px-0">
            <img
              className="w-full"
              src="/home/GRUPO-DASHBOARDS.svg"
              alt="GRUPO-DASHBOARDS"
              loading="eager"
            />
          </div>
        </section>
      </section>

      <section
        id="clientes"
        className="flex flex-col items-center gap-2 font-wix px-4 sm:px-0 text-center"
      >
        <div className="flex gap-4 sm:gap-12 items-center w-full flex-wrap justify-center">
          <div className="h-1 rounded-2xl flex-1 max-w-[100px] sm:max-w-full bg-primary"></div>
          <h4 className="text-2xl sm:text-4xl font-extrabold whitespace-normal">
            Nuestros Clientes
          </h4>
          <div className="h-1 rounded-2xl flex-1 max-w-[100px] sm:max-w-full bg-primary"></div>
        </div>
        <p className="text-base sm:text-xl px-2">
          Trabajamos con una red de clientes{" "}
          <span className="text-primary">nacionales</span> e{" "}
          <span className="text-primary">internacionales</span>
        </p>
      </section>

      <section className="flex justify-center items-center gap-8 w-full mt-10 overflow-x-auto whitespace-nowrap pl-4 pr-4 sm:pl-0 sm:pr-2">
        <div className="flex-shrink-0">
          <img
            src="/home/LOGO-SVG.svg"
            loading="lazy"
            alt="SV FRESH"
            className="w-[80px] sm:w-[120px]"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="/home/LOGO-ZELESTRA.svg"
            loading="lazy"
            alt="ZELESTRA"
            className="w-[80px] sm:w-[100px]"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="/home/LOGO-AES.svg"
            loading="lazy"
            alt="AES"
            className="w-[80px]"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="/home/LOGO-FARMACIAS-SIMILARES.svg"
            loading="lazy"
            alt="FARMACIAS SIMILARES"
            className="w-[80px] sm:w-[100px]"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="/home/LOGO-ARRENDAMEX.svg"
            loading="lazy"
            alt="ARRENDAMEX"
            className="w-[70px] sm:w-[60px]"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="/home/LOGO-LA-BONANZA.svg"
            loading="lazy"
            alt="LA BONANZA"
            className="w-[70px] sm:w-[60px]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;

