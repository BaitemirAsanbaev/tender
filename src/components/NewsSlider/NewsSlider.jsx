import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "../NewsCard/NewsCard";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation"; // Import the Swiper navigation module
import "swiper/css/pagination";
import classes from "./NewsSlider.module.scss";
import { api } from "../../api";
import New from "../../pages/News/New/New";

export default function NewsSlider() {
  const [news, setNews] = useState([
    {
      title: "Breaking News 1",
      content:
        "In a stunning turn of events, scientists have made a groundbreaking discovery in the field of quantum physics. Their experiments have unveiled the mysteries of quantum entanglement, bringing us closer to the development of quantum computing. This breakthrough has the potential to revolutionize various industries, from cryptography to healthcare, and reshape the way we process information. Researchers at the forefront of this discovery have been working tirelessly for years, and their dedication is finally paying off. The implications of this finding are immense, and the scientific community is buzzing with excitement.",
      created_time: "2023-11-05T10:00:00",
    },
    {
      title: "Technology News",
      content:
        "The tech world is abuzz with the latest innovations. From the release of cutting-edge smartphones to breakthroughs in artificial intelligence, the pace of technological advancement shows no signs of slowing down. Companies are investing heavily in research and development to create products that will shape our future. With the rise of 5G networks and the Internet of Things (IoT), our lives are becoming increasingly interconnected. It's an exciting time to be a tech enthusiast, as we witness the dawn of a new era filled with possibilities.",
      created_time: "2023-11-05T12:30:00",
    },
    {
      title: "Sports Update",
      content:
        "The world of sports never sleeps. Athletes are pushing their limits to achieve new records, and fans are on the edge of their seats. From the thrill of the Olympic Games to the intensity of championship matches, sports continue to inspire and unite people worldwide. As we follow the journey of athletes striving for excellence, we also celebrate the values of teamwork, dedication, and perseverance that sports instill in individuals and communities.",
      created_time: "2023-11-05T15:15:00",
    },
    {
      title: "Entertainment Weekly",
      content:
        "The entertainment industry is a dynamic landscape where creativity knows no bounds. From Hollywood blockbusters to indie gems, storytellers are captivating audiences with their narratives. The world of music, film, and television offers a plethora of options to cater to diverse tastes. Actors, musicians, and directors are leaving their mark on the cultural fabric, creating moments that stay with us long after the credits roll.",
      created_time: "2023-11-05T16:45:00",
    },
    {
      title: "Health & Wellness",
      content:
        "Maintaining our well-being is a lifelong journey. With an increasing focus on mental health, nutrition, and fitness, we're discovering new ways to lead healthier lives. Mindfulness and self-care practices are gaining popularity as we prioritize our mental and emotional health. Join us in exploring the latest trends and expert advice on how to live your best, healthiest life.",
      created_time: "2023-11-05T17:30:00",
    },
    {
      title: "Local News Brief",
      content:
        "Our local communities are the heart of society. From community events and initiatives to stories of resilience, our neighborhoods are filled with inspiring tales. Local businesses, schools, and organizations play vital roles in shaping our everyday lives. Stay connected with the latest developments in your area as we spotlight the people and places that make a difference.",
      created_time: "2023-11-05T18:15:00",
    },
    {
      title: "Science Update",
      content:
        "Science never ceases to amaze us with its wonders. From the mysteries of the cosmos to the microscopic world of cells, scientific discoveries are expanding our understanding of the universe. Researchers and innovators are on a relentless quest to solve complex problems, improve our lives, and explore uncharted territories. Join us on a journey through the realms of biology, physics, and chemistry as we unravel the secrets of the natural world.",
      created_time: "2023-11-05T19:00:00",
    },
    {
      title: "Business Insights",
      content:
        "The world of business is in a constant state of evolution. Entrepreneurs, startups, and established corporations are shaping the global economy. Economic trends, market dynamics, and innovative strategies are changing the way we do business. Dive into the realm of commerce and finance as we provide insights, analysis, and success stories from the business world.",
      created_time: "2023-11-05T20:00:00",
    },
    {
      title: "Travel & Leisure",
      content:
        "Journey to the far reaches of the Earth and explore the beauty of diverse cultures. Travel allows us to step outside our comfort zones and experience the wonders of the world. Whether you're an adventurous explorer or a leisurely traveler, there's a destination waiting for you. Discover hidden gems, travel tips, and captivating destinations that will ignite your wanderlust.",
      created_time: "2023-11-05T21:00:00",
    },
    // Add six more news objects with extended content here
  ]);
  // useEffect(() => {
  //   axios
  //     .get(api+"list/news")
  //     .then((res) => {
  //       setNews(res.data)
  //       console.log(res.data[0].image);
  //     });
  // },[]);
  // console.log(news);
  return (
    // <Swiper
    //   className={classes.NewsSlider}
    //   spaceBetween={70}
    //   slidesPerView={3}
    //   autoplay={{ delay: 1000 }}
    //   // navigation={true}
    // >
    //   {news.map((item, id) => {
    //     return (
    //       <SwiperSlide key={id}>
    //         <NewsCard data={item} />
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>

    <section className={classes.News}>
      <div className={classes.head}><div className={classes.headBlock}><h2>Новости</h2></div></div>
      
      <div className={classes.inner_cont}>
        {news.slice(0, 2).map((item, id) => {
          return (
            <section key={id}>
              <New data={item} />
            </section>
          );
        })}
      </div>
    </section>
  );
}
