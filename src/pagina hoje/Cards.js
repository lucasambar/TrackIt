import { useContext, useState } from "react"
import { Checkbox } from "react-ionicons"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"

export default function Cards ({infos}) {
    const [feito, setFeito] = useState(infos.done)
    const [sequencia, setSequencia] = useState(infos.currentSequence)
    const [recorde, setRecorde] = useState(infos.highestSequence)

    const {numFeitos, setNumFeitos} = useContext(MyContext)

    const [batido, setBatido] = useState(false)

    function bateu () {
        if (numFeitos === recorde) {setBatido(true)}
    }
    bateu()

    function click () {
        if (!feito) {
            setFeito(true)
            setSequencia(sequencia+1)
            setNumFeitos(numFeitos + 1)
            bateu()
        }
    }

    return (
        <Card>
            <div>
                <Titulo>{infos.name}</Titulo>
                <Texto batido={batido}>Sequência atual: <span> {sequencia} dias</span></Texto>
                <Texto batido={batido}>Seu recorde: <span> {recorde} dias</span></Texto>
            </div>
            <Checkbox color={feito ? CORES.acerto : CORES.bordas} height="69px" width="69px"
            onClick={click}/>
        </Card>
    )
}

const Card = styled.div`
    height: 94px;
    width: 340px;
    border-radius: 5px;
    border: 1px solid ${CORES.bordas};
    background-color: ${CORES.branco};

    padding: 13px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Titulo = styled.p`
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    display: block;
    margin-bottom: 7px;
`

const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    span{
        color: ${props => props.batido ? CORES.acerto : CORES.textos};
    }
`