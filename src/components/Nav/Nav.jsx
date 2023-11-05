import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";
export default function Nav() {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <span>
            <input type="text" placeholder="Поиск тендеров и компаний..." />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M25 8.62171C25 13.3833 21.1404 17.2434 16.3793 17.2434C11.6182 17.2434 7.75861 13.3833 7.75861 8.62171C7.75861 3.86007 11.6182 0 16.3793 0C21.1404 0 25 3.86007 25 8.62171ZM9.36096 8.62171C9.36096 12.4983 12.5032 15.6409 16.3793 15.6409C20.2554 15.6409 23.3976 12.4983 23.3976 8.62171C23.3976 4.74513 20.2554 1.60254 16.3793 1.60254C12.5032 1.60254 9.36096 4.74513 9.36096 8.62171Z"
                  fill="#555555"
                />
                <path
                  d="M1.15819 23.8419C0.51854 23.2022 0.51854 22.165 1.15819 21.5253L6.52245 16.1604C7.1621 15.5206 8.19918 15.5206 8.83883 16.1604C9.47849 16.8001 9.47849 17.8373 8.83883 18.477L3.47458 23.8419C2.83493 24.4816 1.79784 24.4816 1.15819 23.8419Z"
                  fill="#555555"
                />
              </svg>
            </button>
          </span>
        </li>
        <li>
          <NavLink to={"/"}> Главная</NavLink>
        </li>

        <li>
          <NavLink to={"/jal"} className={classes.logo}>
            Инструкция
          </NavLink>
        </li>

        <li>
          <NavLink to={"/rate"}>Планы</NavLink>
        </li>
        <li>
          <NavLink to={"/rate"}>Риски</NavLink>
        </li>
        <li>
          <NavLink to={"/rate"}>Рейтинги</NavLink>
        </li>
        <li>
          <NavLink to={"profile"}>Профиль</NavLink>
        </li>
      </ul>
    </nav>
  );
}
