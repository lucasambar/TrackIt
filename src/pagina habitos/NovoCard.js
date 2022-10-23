import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"
import Load from "../provedores/Loading"

export default function NovoCard () {
    const [nome, setNome] = useState("")
    const [selecionados, setSelecionados] = useState([])
    const [desabilitado, setDesabilitado] = useState(false)
    const {setNovo, login, alteracoes, setAlteracoes} = useContext(MyContext)
    
    function enviar () {
        let obj = {
            name: nome,
            days: selecionados,
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${login.token}`
            }
        } 

        setDesabilitado(true) 

        let promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", obj, config)
        promessa.then(()=>{setNovo(false);setAlteracoes(alteracoes + 1)})
        promessa.catch(erro => console.log(erro.response.data.message))
    }

    return (
        <Card>
           <Input type="text" placeholder="nome do hábito" onChange={(e)=>setNome(e.target.value)} 
           value={nome} disabled={desabilitado} desabilitado={desabilitado}/>

           <Dias>
                {["D","S","T","Q","Q","S","S"].map((dia, index) => {
                   return <Dia key={index} dia={index} selecionados={selecionados} disabled={desabilitado}
                   onClick={()=> {selecionados.includes(index) ?  setSelecionados(selecionados.filter(num => num !== index))
                   : setSelecionados([...selecionados, index])}}>
                    {dia} </Dia>
                })}
           </Dias>

           <Botoes>
                <Texto onClick={() => setNovo(false)}>Cancelar</Texto>
                <Botao onClick={enviar} disabled={desabilitado}>{desabilitado ? <Load/> : "Confirmar"}</Botao>
           </Botoes>
        </Card>
    )
}

const Card = styled.div`
    height: 180px;
    width: 340px;
    border-radius: 5px;
    background-color: ${CORES.branco};

    margin: auto;
    padding-left: 19px;
    margin-bottom: 24px;
`
const Input = styled.input`
    height: 45px;
    width: 303px;
    left: 36px;
    top: 165px;
    border-radius: 5px;
    border: 1px solid ${CORES.bordas};
    background-color: ${props => props.desabilitado ? CORES.background : CORES.branco};

    padding-left: 11px;

    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.desabilitado ? CORES.bordas : CORES.textos};

    margin-top: 18px;

    &&::placeholder{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: ${CORES.bordas}
    }
`
const Dias = styled.div`
    display: flex;
    gap: 4px; 
    margin-top: 8px;
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

    cursor: pointer;
`
const Botoes =  styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 23px;

    padding: 16px;
    margin-top: 23px;

    cursor: pointer;
`
const Botao = styled.div`
    height: 35px;
    width: 84px;
    left: 257px;
    top: 277px;
    border-radius: 5px;
    background-color: ${CORES.botoes};

    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: ${CORES.branco};

    display: flex;
    justify-content: center;
    align-items: center;
`
const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: ${CORES.botoes};

    cursor: pointer;
`