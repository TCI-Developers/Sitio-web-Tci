import { apiRequest } from "../../services/apiRequest";
import BlogCard from "./BlogCard"
import { useEffect, useState } from 'react';


interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    status: string;
    created_at: string;
    updated_at: string;
    images: string[];
  }
const Blog = () => {

    const [posts, setPosts] = useState<BlogPost[]>([]);
    
    // '/api/getData.php'
    useEffect(() => {
        apiRequest<BlogPost[]>('https://tciconsultoria.com/TCIWEB/getData.php', {
          method: 'POST',
          body: { status: 1 },
        }).then((data) => {
          if (data) setPosts(data);
        });
      }, []);
      

  return (
    <section>
        <div className="flex items-center gap-4 pl-8">
            <h3 className="w-fit text-2xl font-bold whitespace-nowrap">Nuestro Blog</h3>  
            <div className="h-1 bg-primary rounded-xl w-full"></div>
        </div>
        <div data-aos="fade-up" className="p-6">
            <div className="bg-[#0a3a63] flex justify-center rounded-3xl  py-10 md:max-h-[600px] lg:max-h-[800px]">
                <div className="cg-blue-500 grid gap-4 md:grid-cols-8 md:grid-rows-6 px-4 md:px-8 min-w-[90%] max-w-[1400px] min-h-[500px]">

                    {
                        posts.map((post, index) => (
                            <div key={post.id} className={`
                                ${
                                    index == 0 ? 'md:col-span-5 md:row-span-6 min-h-[400px] md:min-h-full' 
                                    : index==1 ? 'md:col-span-3 md:row-span-3 min-h-[400px] md:min-h-full' 
                                    : 'md:col-span-3 md:row-span-3 min-h-[400px] md:min-h-full' }`
                                }>
                                <BlogCard 
                                titulo={post.title} 
                                descripcion={post.description}
                                fondo={post.images[0]}
                                />
                            </div>
                        ) )
                    }
                    
                </div>
            </div>

        </div>
    </section>
  )
}

export default Blog
