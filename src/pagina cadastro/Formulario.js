import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import CORES from "../constantes/Cores.js"
import loading from "../imagens/loading.png"

export default function Formulario () {
    const navigate = useNavigate()

    const [habilitado, setHabilitado] = useState(false)
    const [dados, setDados] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })
    
    function Cadastrar (event) {
        event.preventDefault()

        setHabilitado(true)

        useEffect(() => {
            const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", dados)

            promessa.then(navigate("/"))
            promessa.catch(console.log("fudeu"))
        }, [])
    }

    return (

        <Form onSubmit={Cadastrar}>
            <Input type="email" placeholder="email" id="email" disabled={habilitado} habilitado={habilitado}
            onChange={(e)=> setDados({...dados, email: e.target.value})} value={dados.email}/>

            <Input type="password" placeholder="senha" id="password" disabled={habilitado} habilitado={habilitado}
            onChange={(e)=> setDados({...dados, password: e.target.value})} value={dados.password}/>

            <Input type="text" placeholder="nome" id="nome" disabled={habilitado} habilitado={habilitado}
            onChange={(e)=> setDados({...dados, name: e.target.value})} value={dados.name}/>

            <Input type="url" placeholder="foto" id="foto" disabled={habilitado} habilitado={habilitado}
            onChange={(e)=> setDados({...dados, image: e.target.value})} value={dados.image}/>

            <Button type="submit" disabled={habilitado} habilitado={habilitado}> 
                {habilitado ? <img src={loading} alt=""/> : "Carregando"}
            </Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    margin: auto;
    margin-top: 35px;
`
const Input =styled.input`
    height: 45px;
    width: 303px;
    border-radius: 5px;
    border: 1px solid ${CORES.bordas};
    background-color: ${props => props.habilitado  ? CORES.background : CORES.branco};

    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    padding-left:7px;

    cursor: text;

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
const Button = styled.button`
    height: 45px;
    width: 303px;
    left: 36px;
    top: 381px;
    border-radius: 4.636363506317139px;
    border: none;
    background-color: ${CORES.botoes};
    opacity: ${props => props.habilitado ? "0.7" : "1"};
    

    font-family: Lexend Deca;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: ${CORES.branco};

    cursor: pointer;
`