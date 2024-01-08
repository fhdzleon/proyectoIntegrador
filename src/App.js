import "./App.css";
import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav.jsx";
 

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const parseId = parseInt(id);

    const filteredCharacters = characters.filter((char) => char.id !== parseId);

    setCharacters(filteredCharacters);
  };

function onSearch(id) {

   const parseId = parseInt(id);

   if(characters.find(char=>char.id===parseId)) {
      window.alert('El personaje ya se esta mostrando!');
      return;
   }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
