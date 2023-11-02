import React from "react";
import { Link } from "react-router-dom";
import classes from './Swiper.module.scss'
export default function Slide({ data }) {
  return (
    <div className={classes.Slide}>
      <div className={classes.info}>
        <h2>{data.title}</h2>
        <span>{data.description}</span>
        <div>
          <span>{data.budget} сом</span>
          <Link to={`/tender/${data.id}`}>Открыть</Link>
        </div>
        <span>
          Открыто с {data.open_date} до {data.close_date}
        </span>
      </div>
      <div className={classes.organization}>
        <img src="https://mkk.gov.kg/wp-content/uploads/2021/09/c6113c6d-97b6-4ed7-97bc-fda2034700ec.jpg.630x410_q85_crop.jpg" />
        <span>{data.gos_org}</span>
      </div>
    </div>
  );
}
