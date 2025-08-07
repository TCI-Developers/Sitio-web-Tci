import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../services/apiRequest";
import BlogDetailContent from "./blog-ui/BlogDetailContent";


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

export default function BlogDetail() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const getData = async (id: string) => {
    const data = await apiRequest<BlogPost[]>("/api/getData.php", {
      method: "POST",
      body: { id },
    });

    if (data && data.length > 0) {
      setPost(data[0]);
    }
  };

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="mt-20 w-full">
    
      {post.images?.[0] && (
        <img
          src={post.images[0].path_img}
          alt={post.images[0].path_name}
          className="mb-4 h-16 w-full md:h-32 object-cover"
        />
      )}
      <BlogDetailContent post={post}/>
    </section>
  );
}
