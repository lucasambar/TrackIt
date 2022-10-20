import { Link } from "react-router-dom";
import styled from "styled-components";

import CORES from "../constantes/Cores.js"
import logo from "../imagens/logo.png"
import Formulario from "./Formulario";

export default function PageInicial () {
    return (
        <BackGround>
            <Img src={logo}/>
            <Formulario/> 
            <Link to="/cadastro">
                <Texto>Não tem uma conta? Cadastre-se!</Texto>  
            </Link>
        </BackGround>
    )
}

const BackGround = styled.div`
    background-color: ${CORES.branco}; 
    padding-top: 68px;
`
const Img = styled.img`
    height: 178.38323974609375px;
    width: 180px;

    display: block;
    margin: auto;
`
const Texto = styled.div`
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: underline;
    color: ${CORES.botoes};

    margin-top: 25px;

    cursor: pointer;
`