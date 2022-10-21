import styled from "styled-components"
import CORES from "../constantes/Cores"
import Hoje from "./HojeButton"

export default function Footer () {
    return (
        <Background>
            <Texto>Hábitos</Texto>
            <Hoje/>
            <Texto>Histórico</Texto>
        </Background>
    )
}

const Background = styled.div`
    height: 70px;
    width: 100%;
    background-color: ${CORES.branco};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    position: fixed;
    bottom: 0;
    right: 0;
`

const Texto = styled.div`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.botoes}
`
