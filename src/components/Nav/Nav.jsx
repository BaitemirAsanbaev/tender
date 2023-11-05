import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";
export default function Nav() {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <NavLink to={"/"}> Главная</NavLink>
        </li>

        <li>
          <NavLink to={"/guide"} className={classes.logo}>
            Инструкция
          </NavLink>
        </li>

        <li>
          <NavLink to={"/rate"}>Планы</NavLink>
        </li>
        <li>
          <NavLink to={"/risks"}>Риски</NavLink>
        </li>
        <li>
          <NavLink to={"/rate/jalob"}>Рейтинги</NavLink>
        </li>
        <li>
          <NavLink to={"profile"}>Профиль</NavLink>
        </li>
      </ul>
    </nav>
  );
}
