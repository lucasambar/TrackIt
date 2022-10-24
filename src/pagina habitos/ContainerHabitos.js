import { useContext, useEffect } from "react"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"
import CardHabito from "./CardHabito"

export default function ContainerHabitos ({atualizaHabitos}) {
    const { cards} = useContext(MyContext)
    
    useEffect(()=>atualizaHabitos(),[atualizaHabitos])

    return (
        <>
            {(cards.length === 0) ? <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>
            : <Container>
                {cards.map(infos => <CardHabito infos={infos} key={infos.id}/>)}
            </Container>}
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
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`