import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import style from "./Cards.module.css";

const Cards = ({ data }) => {
  return (
    <div className={style.cards}>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={style.swiper}
      >
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <div className={style.card}>
              <img src={e.image} className={style.imageCard} />
              <h2 className={style.titleCard}>{e.title}</h2>
              <p className={style.contentCard}>{e.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
