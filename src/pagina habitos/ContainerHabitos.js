import { useContext } from "react"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"

export default function ContainerHabitos () {
    const {cardsHabitos} = useContext(MyContext)

    return (
        <>
            {!cardsHabitos ? <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>
            :<p>a desenvolver</p>}
        </>
    )
}

const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    padding: 17px;
`