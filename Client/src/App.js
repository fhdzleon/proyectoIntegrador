import axios from "axios";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/NavBar/Nav.jsx";
import { useState, useEffect } from "react";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Home from "./views/Home.jsx";
import Landing from "./views/Landing.jsx";
import Error from "./views/Error.jsx";
import Favorites from "./views/Favorites.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const EMAIL = "henry@mail.com";
  const PASSWORD = "pepito123";

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const parseId = parseInt(id);

    const filteredCharacters = characters.filter((char) => char.id !== parseId);

    setCharacters(filteredCharacters);
  };

  function onSearch(id) {
    const parseId = parseInt(id);

    if (characters.find((char) => char.id === parseId)) {
      window.alert("El personaje ya se esta mostrando!");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      /*    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(  */
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logOut() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logOut={logOut} />
      ) : undefined}
      <Routes>
        <Route path="/" element={<Landing login={login} />} />

        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/error" element={<Error />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
