import SearchBar from "../SearchBar/SearchBar";
import RandomButton from "../RandomButton/RandomButton"; 
import style from "./Nav.module.css";

export default function Nav ({onSearch}) {
    return (
        <div className={style.contenedor}>
        <RandomButton onSearch={onSearch}/> 
        <SearchBar onSearch={onSearch}></SearchBar>
        </div>  
     )
}


 