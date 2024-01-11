import SearchBar from "../SearchBar/SearchBar";
import RandomButton from "../RandomButton/RandomButton";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
    return (
        <div className={style.contenedor}>
            <Link to="/home"><button className={style.botonHome}>Home</button></Link>
            <Link to="/about"><button className={style.botonAbout}>About</button></Link>
            <RandomButton onSearch={onSearch} />
            <SearchBar onSearch={onSearch}></SearchBar>
        </div>
    )
}


