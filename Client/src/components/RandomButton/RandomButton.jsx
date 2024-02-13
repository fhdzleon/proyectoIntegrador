// import { useState } from 'react';
 
import style from './RandomButton.module.css';
 

export default function RandomButton({ onSearch }) {
    //const [id, setId] = useState(Math.floor(Math.random() * 826)+1);
     
  
    const handleRandomClick = () => {
       
      const randomId = (Math.floor(Math.random() * 826)+1).toString();

      //Usando el api local el numero por el que multiplicamos cambia por el numero de datos que tenga
      // En el api externo son 826
      
      
      //setId(randomId);
      onSearch(randomId);  
  
      
    }

    return (
        
        <button className={style.boton} onClick={handleRandomClick}>Random</button> 
        
      
      )
}