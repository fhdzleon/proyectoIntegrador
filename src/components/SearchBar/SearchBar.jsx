 import {Contenedor, Search, Boton} from './StyledComponents'
 
 export default function SearchBar({onSearch}) {
    
   return (
      <Contenedor>
          <Search type='search' />
         <Boton onClick={onSearch}>Agregar</Boton> 
      </Contenedor>
   );
}

