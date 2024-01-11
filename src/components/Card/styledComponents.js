import styled from "styled-components";

export const Close = styled.button `
    position: absolute;
    top: -10px;
    left: -10px;
    height: 30px;
    width: 30px;
    color: #97CE4C;
    font-size: 20px;
    background-color: #015B04;
    border-radius: 99px;
    cursor: pointer;
   
    &:hover {
        color: white;
    }
    
`

export const Linea = styled.div `
    
    margin-bottom: 5px;
 
`

export const Contenedor = styled.div `
    position: relative;
    width: 250px;
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
    width: 50%;
    border-radius: 90px;
    border: 3px solid #424632;
    margin-bottom: 15px;
`