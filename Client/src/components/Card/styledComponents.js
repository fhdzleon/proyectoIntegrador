import styled from "styled-components";

export const Close = styled.button `
    position: absolute;
    top: -5px;
    left: -5px;
    height: 35px;
    width: 35px;
    color: white;
    font-size: 15px;
    background-color: #015B04;
    border-radius: 99px;
    cursor: pointer;
   
    &:hover {
        color: red;
    }
    
`
export const Fav = styled.button `
    position: absolute;
    bottom: -5px;
    right: -5px;
    height: 35px;
    width: 35px;
    color: #97CE4C;
    font-size: 15px;
    background-color: #015B04;
    border-radius: 99px;
    cursor: pointer;    
`


export const Linea = styled.div `
    
    margin-bottom: 5px;
 
`

export const Contenedor = styled.div `
    position: relative;
    width: 300px;
    height: 450px;
    border: 4px solid #424632;
    border-radius: 15px;
    background-color: #97CE4C;
`

export const Item = styled.h2 `
    color: #015B04;
    margin-top: 8px;
    margin-bottom: 8px;
    display: inline;
    font-family: monospace;
`

export const NameTitulo = styled.h1 `
    color: #004256;
    font-weight: bold;
    margin-bottom: 15px;
    font-family: system-ui;
`

export const CardInfo = styled.h2 `
    color: #383A3D;
    margin-top: 8px;
    margin-bottom: 8px;
    display: inline;
`

export const Image = styled.img `
    width: 70%;
    border-radius: 90px;
    border: 3px solid #424632;
    margin-bottom: 15px;
`

export const Id = styled.div `
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    left: 0px;
    height: 30px;
    width: 60px;
    color: white;
    font-size: 15px;
    background-color: #015B04;
    cursor: pointer; 
    
`