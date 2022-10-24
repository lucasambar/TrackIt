import axios from "axios"
import { useContext } from "react"
import { TrashOutline } from "react-ionicons"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"

export default function CardHabito ({infos}) {
    const {login} = useContext(MyContext)
    
    function deletar(id) {
        let mensagem = `Você tem certeza que deseja excluir "${infos.name}" dos seus hábitos?`
        if (window.confirm(mensagem)) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${login.token}`
                }
            } 

            let url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

            axios.delete(url,config)
            console.log('funciona')
        }
    }
    
    return (
        <Card>
            <Topo>
                <Texto>{infos.name}</Texto>
                <TrashOutline color={CORES.textos} height="17px" width="17px" onClick={() => deletar(infos.id)}/>
            </Topo>

            <Dias>
                {["D","S","T","Q","Q","S","S"].map((dia, index) => {
                   return <Dia key={index} dia={index} selecionados={infos.days}>
                    {dia} </Dia>
                })}
           </Dias>

        </Card>
    )
}

const Card = styled.div`
    height: 91px;
    width: 340px;
    border-radius: 5px;
    background-color: ${CORES.branco};

    margin: auto;
`
const Dias = styled.div`
    display: flex;
    gap: 4px; 
    margin-top: 8px;
    padding-left: 10px;
`
const Dia = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid ${CORES.bordas};
    background-color: ${props => props.selecionados.includes(props.dia) ? CORES.bordas : CORES.branco};

    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.selecionados.includes(props.dia) ? CORES.branco : CORES.bordas};
`
const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};
`