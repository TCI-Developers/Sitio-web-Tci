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
    description: 'Toda la información de su negocio desde cualquier dispositivo.',
    image: '/home/IMAGEN-CEO.svg',
  },
  {
    name: 'ARMANDO ORTIZ DE MONTELLANO MURGIA',
    role: 'CIEO',
    description: 'Toda la información de su negocio desde cualquier dispositivo.',
    image: '/home/IMAGEN-CIEO.svg',
  },
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize(); // inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(teamData.length / cardsPerView) - 1;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full overflow-hidden relative lg:max-w-[80%] xl:max-w-[60%]">
      {/* Flecha izquierda */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 md:top-1/3 left-0 md:left-2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2"
        >
          <FaArrowLeft className="text-white" size={20} />
        </button>
      )}

      {/* Flecha derecha */}
      {currentIndex < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-1 md:top-1/3 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2"
        >
          <FaArrowRight className="text-white" size={20} />
        </button>
      )}

      <div
        className="flex transition-transform duration-500 ease-in-out md:gap-5 "
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
        }}
      >
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="w-full md:w-[48%] flex-shrink-0"
          >
            <div className=" rounded-2xl pb-4 text-white h-full">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[400px] md:h-64 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-4 pb-6">
                <h3 className="font-bold text-3xl md:text-lg uppercase font-bebas">
                  {member.name}
                </h3>
                <div className='font-wix'>
                    <div className="flex justify-between items-center pr-2">
                      <h4 className="text-2xl font-extrabold text-secondary">
                          {member.role}
                      </h4>
                      <FaLinkedin size={24} className="text-white" />
                    </div>
                    <p className="text-base md:text-sm text-white/80 tracking-normal">
                    {member.description}
                    </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
