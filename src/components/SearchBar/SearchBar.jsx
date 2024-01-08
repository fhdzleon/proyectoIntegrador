 import {Search, Boton} from './StyledComponents'
 import { useState } from 'react';

 export default function SearchBar({onSearch}) {
    const [id, setId] = useState("");

    const handleChange = (event) => {
      setId(event.target.value);
    }
   return (
      <>
         <Search type='search'  onChange={handleChange} />
         <Boton onClick={()=>onSearch(id)}>Agregar</Boton> 
      </>
      
   );
}

