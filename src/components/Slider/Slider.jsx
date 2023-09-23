import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import styles from "./Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      className={styles["hero-swiper"]}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <img
          className={styles.swiper__img}
          src="./assets/dupari.jpg"
          alt="Фильм Дюпари"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={styles.swiper__img}
          src="./assets/falsh.jpeg"
          alt="Фильм фальш"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={styles.swiper__img}
          src="./assets/mission.jpg"
          alt="Фильм миссия"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
