import React, { useContext, useEffect } from "react";
import { Context } from "..";
import CategorySearch from "../components/CategorySearch/CategorySearch";
import AllTenders from "../components/AllTenders/AllTenders";
import Swiper from "swiper";
import axios from "axios";
import { SwiperSlide } from "swiper/react";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import intro from '../assets/imag/intro.png'
// import News from "./News/News";


export default function Home() {
  
  const { store } = useContext(Context);
  
  return (
    <div className="page">
      <img src={intro} alt="intro picture" width="100%" height="400px"/>
      {/* <News /> */}
      <NewsSlider/>
      <CategorySearch />
      <AllTenders />
      <button onClick={store.logout}>Logout</button>
    </div>
  );
}
