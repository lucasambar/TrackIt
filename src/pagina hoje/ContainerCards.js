import axios from "axios"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import MyContext from "../provedores/Context"
import Load from "../provedores/Loading"
import Cards from "./Cards"

export default function ContainerCards () {
    const {login, setCardsHoje, cardsHoje} = useContext(MyContext)
    const {numHabitosHoje, setNumHabitosHoje} = useContext(MyContext)

    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             "Authorization": `Bearer ${login.token}`
    //         }
    //     }

    //     let promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    //     promessa.then(a => setCardsHoje(a.data))
    //     promessa.catch(erro => console.log(erro.response.data))
    // }, [login.token, setCardsHoje]) 

    cardsHoje.forEach(() => setNumHabitosHoje(numHabitosHoje + 1))
    
    return (
        <Container>
            {(cardsHoje.length === 0) ? <Load/> : cardsHoje.map((infos) => <Cards infos={infos} key={infos.id}/>)} 
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 27px;
`