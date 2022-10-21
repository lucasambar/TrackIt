import styled from "styled-components"
import CORES from "../constantes/Cores"

export default function Hoje () {
    return (
        <Button>
            <Texto>Hoje</Texto>
        </Button>
    )
}

const Button = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 100%;
    background-color: ${CORES.botoes};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;
    z-index: 2;


`
const Texto = styled.div`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};
`
