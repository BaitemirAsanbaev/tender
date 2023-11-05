import { Link } from "react-router-dom";
import cl from "./New.module.scss";

const New = ({ data }) => {
  console.log({ data });
  return (
    <article className={cl.New}>
      <h2 className={cl.title}>{data.title}</h2>
      <p>{data.content.slice(0, 300)}</p>
      <div className={cl.btn_more}>
        <Link to={`/news/${data.id}`}>Читать...</Link>
        <p>{data.created_time}</p>
      </div>
    </article>
  );
};

export default New;
