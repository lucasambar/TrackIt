import axios from "axios"
import { useContext, useEffect } from "react"
import MyContext from "../provedores/Context"

export default function ContainerCards () {
    const {login, setCardsHoje, cardsHoje} = useContext(MyContext)

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${login.token}`
            }
        }

        let promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promessa.then(a => setCardsHoje(a.data))
        promessa.catch(erro => console.log(erro.response.data))
    }, [login.token, setCardsHoje]) 
    
    return (
        <p>Nenhum hábito cadastrado ainda</p>
    )
}