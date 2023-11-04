import { Link } from "react-router-dom";
import cl from "./New.module.scss"

const New = () => {
  return (
    <article className={cl.New}>
      <h2 className={cl.title}>
        Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү
        схемасы
      </h2>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham
      </p>
      <div className={cl.btn_more}>
        <Link to={"/"}>Читать...</Link>
        <p>21.10.2023</p>
      </div>
    </article>
  );
};

export default New;
