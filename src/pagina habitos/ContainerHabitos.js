import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"
import CardHabito from "./CardHabito"

export default function ContainerHabitos () {
    const {login} = useContext(MyContext)
    const [cards, setCards] = useState(undefined)

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${login.token}`
            }
        } 

        let promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promessa.then(response => setCards(response.data))
        promessa.catch(erro => console.log(erro.response.data))
    }, [login])

    return (
        <>
            {!cards ? <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>
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