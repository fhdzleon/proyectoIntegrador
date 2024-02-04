import style from "./Favorites.module.css";
import Card from "../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

 const dispatch = useDispatch();

 let [aux, setAux] = useState(false);

 const handleOrder = (event) => {
  dispatch(orderCards(event.target.value))
  setAux(true)
 }

 const handleFilter = (event) => {
  dispatch(filterCards(event.target.value))
 }

  return (
    <>
    <div className={style.selectores}>
      
      <select onChange={handleOrder} >
      <option value="">Ordenar por Id</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
      <option value="">Filtro por genero</option>
        <option value="All">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>

      <div className={style.contenedor}>
        {favorites?.map((fav) => (
          <Card
            name={fav.name}
            gender={fav.gender}
            species={fav.species}
            image={fav.image}
            key={fav.id}
            id={fav.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
