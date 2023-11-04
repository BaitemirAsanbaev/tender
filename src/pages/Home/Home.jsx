import React, { useContext } from "react";
import { Context } from "../..";
import News from "../News/News";
import styles from "./Home.module.scss"

export default function Home() {

  return (
    <section  className={styles.Home} >
     <News/>
     
    </section>
  );
}
