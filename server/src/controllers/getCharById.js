const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const characterData = response.data;

      const character = {
        id: id,
        name: characterData.name,
        gender: characterData.gender,
        species: characterData.species,
        origin: characterData.origin.name,
        image: characterData.image,
        status: characterData.status,
      };
      res.writeHead(200, { "Content-Type" : "application/json" });
      res.end(JSON.stringify(character));
       
    })

    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharById;
