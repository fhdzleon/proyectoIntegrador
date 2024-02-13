const http = require ('http');
const getCharById = require ('./controllers/getCharById');
 
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if(url.includes("/rickandmorty/character")) {
        const searchId = url.split("/");
        const idprev = searchId.pop(); 
        const id = parseInt(idprev);
        
        getCharById(res, id)

    }

}).listen(3001, "localhost");



module.exports =

server;