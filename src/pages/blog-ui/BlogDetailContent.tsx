import { setAllEmptyImgSrc } from '../../services/insertImgsToHtml';
import './blogdetails.css';
interface Image {
    path_img: string;
    path_name: string;
  }
  
  interface BlogPost {
    id: string;
    title: string;
    description: string;
    images: Image[];
    date: string;
    created_at: string;
    updated_at: string;
    status: string;
  }
  
  interface BlogDetailContentProps {
    post: BlogPost;
  }
  
  const BlogDetailContent = ({ post }: BlogDetailContentProps) => {
    
    const [dia, mes, anio] = post.date.split("/");

    const fechaObj = new Date(`${anio}-${mes}-${dia}`);

    const fechaFormateada = fechaObj.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric"
    });

    const imgsUrls = [post.images[0].path_img,post.images[1].path_img];
    const htmlWithImages = setAllEmptyImgSrc(post.description, imgsUrls);

    return (
      <div className="content-html text-black w-full px-8 font-wix md:py-8 md:flex md:justify-center">
        <div className='md:w-[90%]'>
          <div className='text-primary'>
            <h1>{post.title}</h1>
          </div>
          <p className="mt-1 text-sm text-[#707070] font-bold">
          {fechaFormateada}
          </p>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: htmlWithImages }}
              
            />
          
            <div className='hidden md:block md:h-96 overflow-hidden rounded-2xl'>
              <img src={post.images[1].path_img}  />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogDetailContent;
  