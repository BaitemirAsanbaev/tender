import React, { useContext, useState } from "react";
import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { Context } from "../..";

function LoginForm() {
  const { store } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    store.login({ email, password });
  };

  return (
    <div className={styles["login-form"]}>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Почта:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles["submit-button"]}>
          Войти
        </button>
      </form>
      <Link to={"/register"}>Регистрация</Link>
    </div>
  );
}

export default LoginForm;
