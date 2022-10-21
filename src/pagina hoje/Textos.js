import styled from "styled-components"
import dayjs from "dayjs";

import CORES from "../constantes/Cores"
import { useContext } from "react";
import MyContext from "../provedores/Context";

export default function Textos () {
    function dataHoje () {
        let updateLocale = require('dayjs/plugin/updateLocale')
    
        dayjs.extend(updateLocale)
    
        dayjs.updateLocale('en', {
        weekdays: [
            "Domingo", "Segunda-feira", "Terça-feira", "Quanta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
        ]
        })
    
        let data = dayjs().format('dddd, DD/MM','en') 
        return data
    }

    const data = dataHoje()
    const {progresso} = useContext(MyContext)

    return (
        <Container>
            <Titulo>{data}</Titulo>
            <Subtitulo progresso={progresso}>
                {progresso === 0 ? "Nenhum hábito concluído ainda" : `${progresso}% dos hábitos concluídos`}
            </Subtitulo>
        </Container>
    )
}

const Container = styled.div`
    height: 48px;
    width: 100%;

    padding-left: 19px;
`
const Subtitulo = styled.p`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.progresso === 0 ? "#BABABA" : CORES.acerto}
`
const Titulo = styled.p`
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.header}
`

