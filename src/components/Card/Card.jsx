import {Contenedor, CardInfo, Close, Image, NameTitulo, Item, Linea} from './styledComponents'

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;

  return (
    <Contenedor>
       <Close onClick={onClose}>x</Close>
      <NameTitulo> {name}</NameTitulo>
      <Image src={image} alt="" />
      <Linea><Item>Status:  </Item><CardInfo>{status}</CardInfo></Linea> 
      <Linea><Item>Specie:  </Item><CardInfo>{species}</CardInfo></Linea>
      <Linea><Item>Gender:  </Item><CardInfo>{gender}</CardInfo></Linea>
      <Linea><Item>Origin:  </Item><CardInfo>{origin.name}</CardInfo></Linea>
    </Contenedor>
  );
}
