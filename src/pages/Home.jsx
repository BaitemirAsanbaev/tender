import React, { useContext, useEffect } from "react";
import { Context } from "..";
import CategorySearch from "../components/CategorySearch/CategorySearch";
import AllTenders from "../components/AllTenders/AllTenders";
import Swiper from "swiper";
import axios from "axios";
import { SwiperSlide } from "swiper/react";
import NewsSlider from "../components/NewsSlider/NewsSlider";
// import News from "./News/News";


export default function Home() {
  
  const { store } = useContext(Context);
  
  return (
    <div className="page">
      {/* <News /> */}
      <NewsSlider/>
      <CategorySearch />
      <AllTenders />
      <button onClick={store.logout}>Logout</button>
    </div>
  );
}
