import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fotos = [
  "/imagens/denis/denis1.jpeg",
  "/imagens/denis/denis2.jpeg",
  "/imagens/denis/denis3.jpeg",
  "/imagens/denis/denis4.jpeg",
];

function CarrosselDenis() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
            Minha História
          </span>

          <h2 className="text-4xl font-black mt-6">
            Conheça minha trajetória
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Alguns momentos da minha caminhada ao lado da comunidade.
          </p>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >

          {fotos.map((foto, index) => (

            <SwiperSlide key={index}>

              <img
                src={foto}
                alt={`Denis ${index + 1}`}
                className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
              />

            </SwiperSlide>

          ))}

        </Swiper>

        <div className="text-center mt-12">

         <Link
                to="/galeria"
                className="
                    inline-flex
                    items-center
                    gap-2
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    transition
                "
                >
                📷 Conheça minha trajetória →
                </Link>

        </div>

      </div>

    </section>
  );
}

export default CarrosselDenis;