import { Link } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import Hoje from "./HojeButton"

export default function Footer () {
    return (
        <Background>
            <Link to="/habitos" className="link">
                <Texto>Hábitos</Texto>
            </Link>

            <Link to="/hoje" className="link">
                <Hoje/>
            </Link>
            
            <Link to="/historico" className="link">
                <Texto>Histórico</Texto>
            </Link>
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

    .link{
        text-decoration: none;
    }
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
