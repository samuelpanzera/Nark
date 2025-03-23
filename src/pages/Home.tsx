import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { games } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HomeProps {
  setBgImage: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setBgImage }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      className="w-3/5 self-center"
      loop={true}
      onSlideChange={(swiper) => setBgImage(games[swiper.realIndex].image)}
      onSwiper={(swiper) => setBgImage(games[swiper.realIndex].image)}
      autoplay={true}
    >
      {games.map((game) => (
        <SwiperSlide key={game.id} className="flex justify-center items-center">
          <img 
            src={game.image}
            alt={game.name}
            className="h-[580px] w-[1252px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
