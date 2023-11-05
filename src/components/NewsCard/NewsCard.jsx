import React from "react";
import classes from "./NewsCard.module.scss";
import { Link } from "react-router-dom";
export default function NewsCard({ data }) {
  return (
    <div className={classes.NewsCard}>
      <h2>{data.title}</h2>
      <span>{data.content.slice(0, 100)}...</span>
      <div>
        <Link to={`/news/${data.id}`}>Читать</Link>
        <span>{data.created_time}</span>
      </div>{" "}
    </div>
  );
}
