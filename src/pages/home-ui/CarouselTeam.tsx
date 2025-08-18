import React, { useState, useEffect } from "react";
import { FaLinkedin } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedinUrl:string;
};

const teamData: TeamMember[] = [
  {
    name: "Armando O. Senior ",
    role: "CEO",
    description:
      "Visionario que impulsa la innovación tecnológica, líder del equipo y guía el crecimiento de la compañía.",
    image: "/home/IMAGEN-CEO.svg",
    linkedinUrl:'https://www.linkedin.com/in/armando-ortiz-de-montellano-21b87b248/'
  },
  {
    name: "Armando O. Junior",
    role: "CIEO",
    description:
      "Enfocado en transformación digital y capacidad para liderar crecimiento sostenible.",
    image: "/home/IMAGEN-CIEO.svg",
    linkedinUrl:"https://www.linkedin.com/in/armando-ortiz-de-montellano-7682111a1/"
  },
  {
    name: "Alicia O",
    role: "CFO",
    description:
      "Estratégico que optimiza la salud financiera, impulsa la rentabilidad y respalda el crecimiento sostenible de compañía.",
    image: "/home/FOTO-PERFIL-LICY.svg",
    linkedinUrl:"https://www.linkedin.com/in/licy-ortiz-de-montellano-63747556/"
  },
  {
    name: "Alberto O",
    role: "CDO",
    description:
      "Responsable de impulsar la innovación, supervisar el desarrollo de productos y acelerar el crecimiento.",
    image: "/home/FOTO-PERFIL-ALBERTO.svg",
    linkedinUrl:"https://www.linkedin.com/in/alberto-ortiz-de-montellano-murgu%C3%ADa-04baa7224/"
  },
];

const TeamCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // Estado para controlar el número de slides
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, 
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    customPaging: (i:number) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: i === activeSlide ? "gray" : "white",
        }}
      />
    ),
    arrows:true,
    // responsive: [
    //   {
    //     breakpoint: 1280, // < 1280px
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1024, // < 1024px
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 700, // < 7200px
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const handleResize = () => {
    if (window.innerWidth <= 700) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 1024) {
      setSlidesToShow(2);
    } else if (window.innerWidth <= 1280) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    // Establece el número inicial de slides al montar el componente
    handleResize();
    
    // Agrega el "oyente" de eventos para redimensionar la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el "oyente" al desmontar el componente para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    
      <Slider {...settings}>
        {teamData.map((member, idx) => (
          <div key={idx} className="px-3">
            <div className="rounded-2xl pb-4 text-white">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[400px] md:h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-4 pb-6">
                <h3 className="font-bold text-base md:text-lg uppercase">
                  {member.name}
                </h3>
                <div>
                  <div className="flex justify-between items-center pr-2">
                    <h4 className="text-2xl font-extrabold text-secondary">
                      {member.role}
                    </h4>
                    <Link to={member.linkedinUrl} ><FaLinkedin size={24} className="text-white" /></Link>
                  </div>
                  <p className="text-base md:text-sm text-white/80">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    
  );
};


export default TeamCarousel;

