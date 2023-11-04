import New from "./New/New";
import styles from "./News.module.scss";

const News = () => {
  return (
    <section className={styles.News}>
      <h2>News</h2>
      <div className={styles.inner_cont}>
        <section>
          <New />
          <New />
        </section>
      </div>
    </section>
  );
};

export default News;
