const http = require ('http');
const data = require ('./utils/data')

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if(url.includes("/rickandmorty/character")) {
        const searchId = url.split("/");
        const id = searchId.pop(); 
        const character = data.find(character => character.id === parseInt(id));

        if (character) {
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(character)); 
        } else {
            res.writeHead(404, {'Content-Type' : 'text/plain'});
            res.end("Personaje no encontrado");
        }  
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Ruta no valida");
    }

}).listen(3001, "localhost");



module.exports =

server;