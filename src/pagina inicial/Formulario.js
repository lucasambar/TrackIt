import { useEffect, useState } from "react"
import styled from "styled-components"

import CORES from "../constantes/Cores.js"
import Load from "../provedores/Loading.js"

export default function Formulario () {
    const [name, setName] = useState("")
    const [senha,setSenha] = useState("")
    const [habilitado, setHabilitado] = useState(false)

    function Logar (event) {
        event.preventDefault()
        
        setHabilitado(true)

        let obj = {
            name: name,
            password: senha
        }

        useEffect(() => {

        },[])
    }

    return (
        <Form onSubmit={Logar}>
            <Input type="email" placeholder="email" disabled={habilitado} habilitado={habilitado} 
            onChange={(e) => setName(e.target.value)} value={name}/>

            <Input type="password" placeholder="senha" disabled={habilitado} habilitado={habilitado}
            onChange={(e) => setSenha(e.target.value)} value={senha}/>

            <Button type="submit" disabled={habilitado} habilitado={habilitado} >
                {habilitado ? <Load/> : "Entrar"}
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
    background-color: ${props => props.habilitado ? CORES.background : CORES.branco};

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

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`