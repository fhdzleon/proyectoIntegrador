import SearchBar from "../SearchBar/SearchBar";
import RandomButton from "../RandomButton/RandomButton";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import logoImage from "./klipartz.png";

export default function Nav({ onSearch }) {
    return (
        <div className={style.contenedor}>
            <Link to="/home"><button className={style.boton}>Home</button></Link>
            <Link to="/about"><button className={style.boton}>About</button></Link>
            <img className={style.image} src={logoImage} alt="logo"/>
            <SearchBar onSearch={onSearch}></SearchBar>
            <RandomButton onSearch={onSearch} />
        </div>
    )
}


