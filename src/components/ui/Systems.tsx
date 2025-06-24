import SystemsCard from './SystemsCard'

const Systems = () => {
  return (
    <section className='flex flex-col items-center rounded-[90px] mt-4 font-wix'>
      <section className='flex flex-col items-center py-12 px-12'>
        <h3 className='text-4xl text-center'>Nuestros <span className='font-semibold text-primary'>sistemas operativos</span> con tus <span className='font-semibold text-primary'>necesidades</span></h3>
        <p className='text-center text-2xl mt-2 w-4/5'>Un <span className='font-semibold text-primary'>buen sistema</span> aumenta el <span className='font-semibold text-primary'>rendimiento y eficacia</span> de tus procesos.</p>
        <section className='flex flex-col items-center md:flex-row md:justify-center gap-6 md:gap-4 mt-4'>
            <SystemsCard titulo='HERRAMIENTAS RESPONSIVAS' descripcion='Toda la información de su negocio desde cualquier dispositivo' fondo='./IMAGEN-PROCESO-1-1.svg' />
            <SystemsCard titulo='INNOVAR PROCESOS' descripcion='Soluciones en tecnología de la información especializadas en negocio' fondo='./IMAGEN-PROCESO-2.svg'/>
            <SystemsCard titulo='CONSULTORÍA' descripcion='Asesorias en linea de nuestro personal capacitado para  hacer que su negocio de más' fondo='./IMAGEN-PROCESO-3.svg'/>     
        </section>
        
      </section>

      <section className='flex justify-center bg-white-text w-full rounded-[90px] p-12'>
            <div className='flex flex-col items-center md:3/4 lg:w-4/5'>
              <h3 className='text-primary font-semibold text-3xl'>Sistemas hechos a la medida <span className='text-black'>de tu empresa</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-2 mt-16">
                {/* 1 */}
                <div className="bg-[#dce9ed] p-6 md:p-8 lg:p-10 rounded-lg md:col-span-2 lg:col-span-3 relative overflow-hidden min-h-[400px]">
                  <div className="relative z-10">
                    <h3 className="text-secondary text-xl md:text-2xl lg:text-lg font-bold mb-4">
                      COMUNICACIÓN REMOTA
                    </h3>
                    <p className="text-accent text-base md:text-lg lg:text-base">
                      Controla la eficiencia de tus operaciones en tiempo real, con acceso móvil y con <span>Talk Tracking</span> automático.
                    </p>
                  </div>
                  <img 
                    src="./COMUNICACION-REMOTA.svg" 
                    alt="Comunicacion Remota" 
                    className="absolute bottom-0 left-0 w-full h-auto z-0"
                  />
                </div>

                {/* 2 */}
                <div className="bg-[#c1ebfc] p-6 md:p-8 lg:p-10 rounded-lg md:col-span-2 relative overflow-hidden min-h-[400px]">
                  <div className="relative z-10">
                    <img src="./CONECTADO-DE-EXTREMO-A-EXTREMO.svg" className="mb-4 w-full h-auto" alt="Extremo a extremo" />
                    <h3 className="text-secondary text-xl md:text-2xl lg:text-lg font-bold mb-4">
                      CONECTADO DE EXTREMO A EXTREMO
                    </h3>
                    <p className="text-accent text-base md:text-lg lg:text-base">
                      La aplicación web que TCI proporciona a los clientes, tiene una visión completa de su información en tiempo real, y les permite gestionar los procesos operativos.
                    </p>
                  </div>
                
                </div>

                {/* 3 */}
                <div className="bg-[#c1ebfc] p-6 md:p-8 lg:p-10 rounded-lg md:col-span-2 flex flex-col justify-between">
                  <img src="./PROJECT-MANAGEMENT.svg" className="mb-4 w-full h-auto" alt="Project Management" />
                  <div>
                    <h3 className="text-secondary text-xl md:text-2xl lg:text-lg font-bold mb-4">
                      PROJECT MANAGEMENT
                    </h3>
                    <p className="text-accent text-base md:text-lg lg:text-base">
                      Mantén en tiempo real el seguimiento de tus tareas, visibilidad de presupuestos y un reporte de procesos inmediato.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="bg-[#dce9ed] p-6 md:p-8 lg:p-10 rounded-lg md:col-span-2 lg:col-span-3 relative overflow-hidden min-h-[400px]">
                  <div className="relative z-10">
                    <h3 className="text-secondary text-xl md:text-2xl lg:text-lg font-bold mb-4">
                      CONTROL, EXACTITUD Y CUMPLIMIENTO
                    </h3>
                    <p className="text-accent text-base md:text-lg lg:text-base">
                      Manten tus operaciones fluidas con información precisa,con seguimiento y tareas, y con reportes automáticos visuales.
                    </p>
                  </div>
                  <img 
                    src="./CONTROL-EXACTITUD-CUMPLIMIENTO.svg" 
                    alt="Control y Exactitud" 
                    className="absolute bottom-0 left-0 w-full h-auto z-0"
                  />
                </div>
              </div>

            </div>
          
      </section>
      
    </section>
    
  )
}

export default Systems
