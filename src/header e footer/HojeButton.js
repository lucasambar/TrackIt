import styled from "styled-components"
import CORES from "../constantes/Cores"

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useContext } from "react";
import MyContext from "../provedores/Context";

export default function Hoje () {
    const {progresso} = useContext(MyContext)
    return (
        <Button>
            <CircularProgressbarWithChildren
                value={progresso} 
                text={"Hoje"} 
                styles={buildStyles({
                    textSize: "25px",
                    textColor: "#FFF",
            }
            )}/>
        </Button>
    )
}


const Button = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 100%;
    background-color: ${CORES.botoes};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;
    z-index: 2;

    padding: 5px 5px;

    .circulo{
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: ${CORES.branco};
    }
`
