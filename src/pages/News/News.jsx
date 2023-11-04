import New from "./New/New";
import styles from "./News.module.scss"


const News = () => {
  return (
      <section className={styles.News}>
            <div className={styles.inner_cont}>
                  <h2>News</h2>
                  <section>
                        <New/>
                        <New/>
                  </section>
            </div>

      </section>
  );
};

export default News;
