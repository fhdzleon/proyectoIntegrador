import { useState, useEffect } from "react";
import {
  Contenedor,
  CardInfo,
  Close,
  Fav,
  Image,
  NameTitulo,
  Item,
  Linea,
  Id,
} from "./styledComponents";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const { id, name, species, image, onClose, gender } = props;

  const location = useLocation();
  

  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  const handleClose = () => {
    console.log("Cerrando", id)
    onClose(id)
     
  }

  return (
    <Contenedor>
       { location.pathname === "/home" ? 
      <Close onClick={handleClose}>✖</Close> :
      undefined
       }
      {isFav ? (
        <Fav onClick={handleFavorite}>❤️</Fav>
      ) : (
        <Fav onClick={handleFavorite}>🤍</Fav>
      )}
      <NameTitulo> {name}</NameTitulo>

      <Link to={`/detail/${id}`}>
        <Image src={image} alt="" />
      </Link>
      <Id>#{id}</Id>
      
      <Linea>
        <Item>Specie: </Item>
        <CardInfo>{species}</CardInfo>
      </Linea>
      <Linea>
        <Item>Genero: </Item>
        <CardInfo>{gender}</CardInfo>
      </Linea>
    </Contenedor>
  );
}
