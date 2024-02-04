import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";


export default function Cards({ characters, onClose }) {
  return (
    <div className={style.cards}>

   {characters.map((character) => (
      <Card
      key ={character.id}
      {...character}
      onClose={onClose}
      id = {character.id}
      />
   ))}

    </div>
  );
}

