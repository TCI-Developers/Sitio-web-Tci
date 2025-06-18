// src/components/Carousel.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import { FaLinkedin } from 'react-icons/fa';

type Card = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    name: 'ARMANDO ORTIZ DE MONTELLANO AREVALO',
    role: 'CEO',
    description: 'Toda la información de su negocio desde cualquier despositivo',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
  },
  {
    name: 'JULIA HERNÁNDEZ PÉREZ',
    role: 'COO',
    description: 'Gestiona operaciones con eficiencia y liderazgo estratégico',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
  },
];

export default function Carousel(): JSX.Element {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src={card.image}
              alt={`image-${index}`}
              className="h-64 w-full object-cover"
            />
            <div className="flex flex-col gap-8 pt-4 pb-12 px-4 font-wix">
              <h3 className="font-bebas text-3xl font-bold">{card.name}</h3>
              <div>
                <div className="flex justify-between w-full">
                  <h3 className="font-bold text-3xl text-secondary">{card.role}</h3>
                  <div className="flex items-center">
                    <FaLinkedin size={40} color="#0A66C2" />
                  </div>
                </div>
                <p className="pt-2">{card.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



{/* <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 pt-4 pb-12 font-wix">
          <h3 className="font-bebas text-3xl font-bold">
            ARMANDO ORTIZ DE MONTELLANO AREVALO
          </h3>
          <div>
            <div className="flex justify-between w-full">
              <div>
                <h3 className="font-bold text-3xl text-secondary">CEO</h3>
              </div>
              <div className="flex items-center">
                <FaLinkedin size={40} color="#0A66C2" />
              </div>
            </div>
            <p className="pt-2">
              Toda la información de su negocio desde cualquier despositivo
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      // <SwiperSlide>
      //   <div className="rounded-2xl overflow-hidden">
      //     <img
      //       src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      //       alt="image 2"
      //       className="h-64 w-full object-cover"
      //     />
      //   </div>
      //   <div className="flex flex-col gap-8 pt-4 pb-12 font-wix">
      //     <h3 className="font-bebas text-3xl font-bold">
      //       ARMANDO ORTIZ DE MONTELLANO AREVALO
      //     </h3>
      //     <div>
      //       <div className="flex justify-between w-full">
      //         <div>
      //           <h3 className="font-bold text-3xl text-secondary">CEO</h3>
      //         </div>
      //         <div className="flex items-center">
      //           <FaLinkedin size={40} color="#0A66C2" />
      //         </div>
      //       </div>
      //       <p className="pt-2">
      //         Toda la información de su negocio desde cualquier despositivo
      //       </p>
      //     </div>
      //   </div> */}