import "./App.css";

import { Routes, Route } from "react-router-dom"; 
import Nav from "./components/NavBar/Nav.jsx";

import About from "./views/About.jsx"
import Detail from "./views/Detail.jsx"
import Home from "./views/Home.jsx"
 

function App() {
   
  return (
    <div className="App">
      <Nav />
      <Routes>

        <Route path="/home" element={<Home/>} />

        <Route path="/about" element={<About/>} />
      
        <Route path="/detail/:id" element={<Detail/>} />

      </Routes>
 
    </div>
  );
}

export default App;
