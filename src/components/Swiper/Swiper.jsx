import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "./demo";
import Slide from "./Slide";
import classes from "./Swiper.module.scss";
export default () => {
  return (
    <Swiper
      className={classes.Swiper}
      spaceBetween={70}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, id) => {
        return (
          <SwiperSlide key={id}>
            <Slide data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
