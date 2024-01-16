import {Contenedor, CardInfo, Close, Image, NameTitulo, Item, Linea} from './styledComponents'
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, name, status, species, image, onClose } = props;

  return (
    <Contenedor>
       <Close onClick={()=> onClose(id)} >x</Close>
      <NameTitulo> {name}</NameTitulo>

      <Link to={`/detail/${id}`}>
      <Image src={image} alt="" />
      </Link>
      
      <Linea><Item>Status:  </Item><CardInfo>{status}</CardInfo></Linea> 
      <Linea><Item>Specie:  </Item><CardInfo>{species}</CardInfo></Linea>
     
    </Contenedor>
  );
}
