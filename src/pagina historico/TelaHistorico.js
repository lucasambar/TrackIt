import styled from "styled-components"

import CORES from "../constantes/Cores"
import Footer from "../header e footer/Footer"
import Header from "../header e footer/Header"

export default function PageHistorico () {
    return (
        <>
            <Header/>
            <Background>
                <Titulo>Histórico</Titulo>
                <Texto>Em breve você poderá ver o histórico dos seus hábitos aqui!</Texto>
            </Background>
            <Footer/>
        </>
    )
}

const Titulo = styled.p`
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.header};

    padding-left: 19px;
`
const Background = styled.div`
    width: 100%;
    height: calc(100vh - 140px); 

    background-color: ${CORES.background};

    margin-top: 70px;
    margin-bottom: 70px;

    padding-top: 29px;
`
const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    padding-left: 19px;
`