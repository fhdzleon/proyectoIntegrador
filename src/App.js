import "./App.css";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; 
import Nav from "./components/NavBar/Nav.jsx";
import { useState, useEffect } from "react"
import About from "./views/About.jsx"
import Detail from "./views/Detail.jsx"
import Home from "./views/Home.jsx"
import Landing from "./views/Landing.jsx"
import Error from "./views/Error.jsx";
 

function App() {
   
const navigate = useNavigate();
const location = useLocation();

const EMAIL = 'henry@mail.com';
const PASSWORD = "pepito123";

const [access, setAccess] = useState(false);

function login(userData) {
  if (userData.password === PASSWORD && userData.email === EMAIL) {
     setAccess(true);
     navigate('/home');
  }
}

function logOut() {
  setAccess(false)
}

useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

  return (
    <div className="App">
    
      {location.pathname !== "/" ?
      <Nav logOut={logOut} /> : undefined
  }
      <Routes>

        <Route path="/" element={<Landing login={login}/>} />

        <Route path="/home" element={<Home logOut={logOut}/>} />

        <Route path="/about" element={<About/>} />
      
        <Route path="/detail/:id" element={<Detail/>} />

        <Route path="/error" element={<Error/>} />

      </Routes>
      
    </div>
  );
}

export default App;
