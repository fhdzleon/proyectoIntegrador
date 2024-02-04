import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import logoImage from "./klipartz.png";

export default function Nav({ onSearch, logOut }) {
  const location = useLocation();

  return (
    <>
      <div className={style.contenedor}>
        <div className={style.nav}>
          <Link to="/home">
            <button className={style.boton}>Home</button>
          </Link>
          <Link to="/about">
            <button className={style.boton}>About</button>
          </Link>
          <img className={style.image} src={logoImage} alt="logo" />
          <Link to="/favorites">
            <button className={style.boton}>Favoritos</button>
          </Link>
          <button onClick={logOut} className={style.boton}>
            Salir
          </button>
        </div>

        {location.pathname === "/home" ? (
          <div className={style.searchBar}>
            <SearchBar onSearch={onSearch}></SearchBar>
          </div>
        ) : undefined}
      </div>
    </>
  );
}
