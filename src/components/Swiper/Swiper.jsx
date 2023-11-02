import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "./demo";
import classes from "./Swiper.module.scss";
import Card from "../Card/Card";
export default () => {
  return (
    <Swiper
      className={classes.Swiper}
      spaceBetween={70}
      slidesPerView={3}
    >
      {data.map((item, id) => {
        return (
          <SwiperSlide key={id}>
            <Card data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
