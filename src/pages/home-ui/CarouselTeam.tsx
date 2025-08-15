import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamData: TeamMember[] = [
  {
    name: 'ARMANDO ORTIZ DE MONTELLANO ARÉVALO',
    role: 'CEO',
    description:
      'Visionario que impulsa la innovación tecnológica, líder del equipo y guía el crecimiento de la compañía.',
    image: '/home/IMAGEN-CEO.svg',
  },
  {
    name: 'ARMANDO ORTIZ DE MONTELLANO MURGIA',
    role: 'CIEO',
    description:
      'Enfocado en transformación digital y capacidad para liderar crecimiento sostenible.',
    image: '/home/IMAGEN-CIEO.svg',
  },
  {
    name: 'Alicia O',
    role: 'CFO',
    description:
      'Estratégico que optimiza la salud financiera, impulsa la rentabilidad y respalda el crecimiento sostenible de compañia.',
    image: '/home/IMAGEN-CIEO.svg',
  },
  {
    name: 'Alberto O',
    role: 'CDO',
    description:
      'Responsable de impulsar la innovación, supervisar el desarrollo de productos y acelerar el crecimiento.',
    image: '/home/IMAGEN-CIEO.svg',
  },
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const cardWidth = 280; // ancho estimado por tarjeta (incluye gap)
      const availableWidth = window.innerWidth;

      const possibleCards = Math.floor(availableWidth / cardWidth);

      if (possibleCards >= teamData.length) {
        setShowCarousel(false);
        setCardsPerView(teamData.length);
        setCurrentIndex(0);
      } else {
        setShowCarousel(true);
        setCardsPerView(possibleCards || 1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Permite llegar hasta el último artículo aunque no llene la vista
  const maxIndex = Math.max(0, teamData.length - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const [isVerySmall, setIsVerySmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVerySmall(window.innerWidth < 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Flechas solo si hay carousel */}
      {showCarousel && currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2"
        >
          <FaArrowLeft className="text-white" size={20} />
        </button>
      )}
      {showCarousel && currentIndex < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2"
        >
          <FaArrowRight className="text-white" size={20} />
        </button>
      )}
      
      <div
        className="flex transition-transform duration-500 ease-in-out gap-5"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView +(isVerySmall ? 0 : 0))}%)`,
        }}
      >
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{ width: `${100 / cardsPerView -3}%` }}
          >
            <div className="rounded-2xl pb-4 text-white">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[400px] md:h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-4 pb-6">
                <h3 className="font-bold text-3xl md:text-lg uppercase">
                  {member.name}
                </h3>
                <div>
                  <div className="flex justify-between items-center pr-2">
                    <h4 className="text-2xl font-extrabold text-secondary">
                      {member.role}
                    </h4>
                    <FaLinkedin size={24} className="text-white" />
                  </div>
                  <p className="text-base md:text-sm text-white/80">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bullets solo si hay carousel */}
      {showCarousel && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;



