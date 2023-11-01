import { NavLink } from 'react-router-dom'
import classes from './Nav.module.scss'
export default function Nav() {
  return (
    <nav className={classes.Nav}>
      <NavLink to={"/tenders"}>Тендеры</NavLink>
      <NavLink to={"/auctions"}>Аукцион</NavLink>
      <NavLink to={"/"} className={classes.logo}>Tender KG</NavLink>
      <NavLink to={"/projects"}>Проекты</NavLink>
      <NavLink to={"/profile"}>Профиль</NavLink>
    </nav>
  )
}
