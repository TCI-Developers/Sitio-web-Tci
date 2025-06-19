import BlogCard from "./BlogCard"


const Blog = () => {
  return (
    <section>
        <div className="flex items-center gap-4 pl-12">
            <h3 className="w-fit text-2xl font-bold whitespace-nowrap">Nuestro Blog</h3>  
            <div className="h-1 bg-primary rounded-xl w-full"></div>
        </div>
        <div className="px-12 py-8">
            <div className="bg-[#0a3a63] flex justify-center rounded-3xl  py-10 md:max-h-[600px] lg:max-h-[800px]">
                <div className="cg-blue-500 grid gap-4 md:grid-cols-8 md:grid-rows-6 px-8 max-w-[1400px]">
                    <div className="md:col-span-5 md:row-span-6 min-h-[400px] md:min-h-full">
                        <BlogCard 
                        titulo="TRANSFORMACIÓN DIGITAL Y AUTOMÁTIZACIÓN" 
                        descripcion="¿Por qué la transformación digital ya no es opcional para las empresas?
                            En el mundo empresarial actual, la transformación digital ya no es una 
                            alternativa: es un requisito para mantenerse competitivo.
                            Las empresas que adoptan tecnologías."
                        fondo="/IMAGEN-TEMA-BLOG-1.png"
                        />
                    </div>
                    <div className="md:col-span-3 md:row-span-3 min-h-[400px] md:min-h-full">
                        <BlogCard 
                                titulo="AUTOMATIZAR PROCESOS BENEFICIOS CONCRETOS PARA PEQUEÑAS Y MEDIANAS EMPRESAS" 
                                descripcion="¿Por qué la transformación digital ya no es opcional para las empresas?
                                    En el mundo empresarial actual, la transformación digital ya no es una 
                                    alternativa: es un requisito para mantenerse competitivo.
                                    Las empresas que adoptan tecnologias.
                                "
                                fondo="/IMAGEN-TEMA-BLOG-2.png"
                        />
                    </div>
                    <div className="md:col-span-3 md:row-span-3 min-h-[400px] md:min-h-full">
                        <BlogCard 
                                titulo="DE EXCEL A ERP CUANDO Y PORQUE DAR EL SIGUIEMTE PASO" 
                                descripcion="¿Por qué la transformación digital ya no es opcional para las empresas?
                                    En el mundo empresarial actual, la transformación digital ya no es una 
                                    alternativa: es un requisito para mantenerse competitivo.
                                    Las empresas que adoptan tecnologias.
                                "
                                fondo="/IMAGEN-TEMA-BLOG-3.png"
                        />
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
{/* <div className="bg-[#0a3a63] rounded-3xl grid gap-4 md:grid-cols-8 md:grid-rows-6 px-8 py-10">
                <div className="md:row-span-6 md:col-span-5">
                    <BlogCard 
                        titulo="TRANSFORMACIÓN DIGITAL Y AUTOMÁTIZACIÓN" 
                        descripcion="¿Por qué la transformación digital ya no es opcional para las empresas?
                            En el mundo empresarial actual, la transformación digital ya no es una 
                            alternativa: es un requisito para mantenerse competitivo.
                            Las empresas que adoptan tecnologias.
                        "
                        fondo="/IMAGEN-TEMA-BLOG-1.png"
                    />
                </div>
                <div className="md:row-span-3 md:col-span-3">
                    <BlogCard 
                        titulo="AUTOMATIZAR PROCESOS BENEFICIOS CONCRETOS PARA PEQUEÑAS Y MEDIANAS EMPRESAS" 
                        descripcion="¿Por qué la transformación digital ya no es opcional para las empresas?
                            En el mundo empresarial actual, la transformación digital ya no es una 
                            alternativa: es un requisito para mantenerse competitivo.
                            Las empresas que adoptan tecnologias.
                        "
                        fondo="/IMAGEN-TEMA-BLOG-2.png"
                    />
                </div>
                <div className="md:row-span-3 md:col-span-3">
                    <BlogCard 
                        titulo="DE EXCEL A ERP CUANDO Y PORQUE DAR EL SIGUIEMTE PASO" 
                        descripcion="¿Por qué la transformación digital ya no es opcional para las empresas?
                            En el mundo empresarial actual, la transformación digital ya no es una 
                            alternativa: es un requisito para mantenerse competitivo.
                            Las empresas que adoptan tecnologias.
                        "
                        fondo="/IMAGEN-TEMA-BLOG-3.png"
                    />
                </div>
            </div> */}
export default Blog
