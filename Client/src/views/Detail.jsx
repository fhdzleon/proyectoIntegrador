import style from "./Detail.module.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      /*  axios(`http://localhost:3001/rickandmorty/character/${id}`).then( */
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
        console.log(character);
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.contenedor}>
      <div>
        <div className={style.contenedor2}>
          <div className={style.detalle}>
            <h1 className={style.nombreDetalle}>{character.name}</h1>
            <div className={style.linea}>
              <h2 className={style.args}>STATUS | </h2>
              <h1 className={style.info}>{character.status}</h1>
            </div>
            <div className={style.linea}>
              <h2 className={style.args}>ESPECIE | </h2>
              <h1 className={style.info}>{character.species}</h1>
            </div>
            <div className={style.linea}>
              <h2 className={style.args}>GENERO | </h2>
              <h1 className={style.info}>{character.gender}</h1>
            </div>
            <div className={style.linea}>
              <h2 className={style.args}>ORIGEN | </h2>
              <h1 className={style.info}>{character.origin?.name}</h1>
            </div>
            {/*    <div className={style.linea}>
              <h2 className={style.args}>ORIGEN | </h2>
              <h1 className={style.info}>{character.origin}</h1>
            </div> */}
            <Link to="/home">
              <button className={style.boton}>Ir a home </button>
            </Link>

            <Link to="/favorites">
              <button className={style.boton}> Ir a favs</button>
            </Link>
          </div>
          <img className={style.image} src={character.image} alt="idimage" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
