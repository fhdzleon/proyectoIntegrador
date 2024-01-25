 import Cards from "../components/Cards/Cards.jsx";
  
 
const Home = ( {onClose, characters} ) => {

    return (
      <div className="App">
          
        <Cards onClose={onClose} characters={characters} /> 
        
      </div>
    );
  }
  
  export default Home;

