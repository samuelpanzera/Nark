import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { games } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface HomeProps {
  setBgImage: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setBgImage }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      className="w-4/5 self-center select-none"
      loop={true}
      onSlideChange={(swiper) => setBgImage(games[swiper.realIndex].image)}
      onSwiper={(swiper) => setBgImage(games[swiper.realIndex].image)}
    >
      {games.map((game) => (
        <SwiperSlide key={game.id} className="flex justify-center W">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-3/4 bg-cover bg-center pointer-events-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
