import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { games } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      className="w-4/5 self-center"
      loop={true}
    >
      <SwiperSlide>
        <img src={games[0].image} alt={games[0].name} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={games[1].image} alt={games[1].name} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;

/*
      {games.map((game) => (
          <SwiperSlide key={game.id}>
            <img src={game.image} alt={game.name} className="w-3/5" />
          </SwiperSlide>
        ))}
          */
