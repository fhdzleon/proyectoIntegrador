import Card from '../Card/Card.jsx';
import style from "./Cards.module.css"


export default function Cards({ characters }) {
  return (
    <div className={style.cards}>

   {characters.map((character) => (
      <Card
      key ={character.id}
      {...character}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      />
   ))}

    </div>
  );
}

