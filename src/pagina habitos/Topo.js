import { useContext } from "react"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"
import NovoCard from "./NovoCard"

export default function Topo ({atualizaHabitos}) {
    const {novo, setNovo} = useContext(MyContext)

    return (
        <>
            <Container>
                <Titulo>Meus hábitos</Titulo>
                <Button onClick={()=>!novo ? setNovo(true) : setNovo(false)}>+</Button>
            </Container>
            {novo? <NovoCard atualizaHabitos={atualizaHabitos}/> : <p></p>}
        </>
    )
}

const Titulo = styled.p`
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.header};
`
const Button = styled.div`
    height: 35px;
    width: 40px;
    border-radius: 4.636363506317139px;
    border: none;
    background-color: ${CORES.botoes};

    font-family: Lexend Deca;
    font-size: 27px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: ${CORES.branco};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`
const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 16px;
`