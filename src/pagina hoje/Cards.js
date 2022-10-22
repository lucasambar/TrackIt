import { Checkbox } from "react-ionicons"
import styled from "styled-components"
import CORES from "../constantes/Cores"

export default function Cards () {
    return (
        <Card>
            <div>
                <Titulo>Hábito 1</Titulo>
                <Texto>Sequência atual: <span> dias</span></Texto>
                <Texto>Seu recorde: <span> dias</span></Texto>
            </div>
            <Checkbox color={CORES.bordas} height="69px" width="69px"/>
        </Card>
    )
}

const Card = styled.div`
    height: 94px;
    width: 340px;
    border-radius: 5px;
    border: 1px solid ${CORES.bordas};
    background-color: ${CORES.branco};

    padding: 13px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Titulo = styled.p`
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    display: block;
    margin-bottom: 7px;
`

const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};
`