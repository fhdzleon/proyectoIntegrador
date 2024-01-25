 import { useLocation } from 'react-router-dom';
import {Search, Boton} from './StyledComponents'
import RandomButton from "../RandomButton/RandomButton";
 import { useState } from 'react';

 export default function SearchBar({onSearch}) {
    const [id, setId] = useState("");

    const location = useLocation();

    const handleChange = (event) => {
      setId(event.target.value);
    }
   return (
      location.pathname === "/home" ? 
      <>
         <span>Agrega cartas por ID:</span>
         <Search type='search'  onChange={handleChange} />
         <Boton onClick={()=>onSearch(id)}>Agregar</Boton> 
         <span>o genéralas aleatoriamente:</span>
         <RandomButton onSearch={onSearch} />
         <span>Pulsa 🤍 y agrégalo a tu deck de favoritos.</span>
    

      </> 
      : undefined
      
   );
}

