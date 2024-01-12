import style from "./Detail.module.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.contenedor}>
      <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
        <div className={style.contenedor2}>
        <div className={style.detalle}>
          <div className={style.linea}><h2 className={style.args}>Nombre: </h2><h1 className={style.info}>{character.name}</h1></div>
          <div className={style.linea}><h2 className={style.args}>Status: </h2><h1 className={style.info}>{character.status}</h1></div>
          <div className={style.linea}><h2 className={style.args}>Especie: </h2><h1 className={style.info}>{character.specie}</h1></div>
          <div className={style.linea}><h2 className={style.args}>Genero: </h2><h1 className={style.info}>{character.gender}</h1></div>
          <div className={style.linea}><h2 className={style.args}>Origen: </h2><h1 className={style.info}>{character.origin?.name}</h1></div>
          <div className={style.linea}><h2 className={style.args}>Episodio: </h2><h1 className={style.info}>{character.location?.name}</h1></div>
        </div>
          <img className={style.image} src={character.image} alt="idimage"/>
        </div>
      </div>
    </div>
  );
};

export default Detail;
