import { useContext } from "react"
import styled from "styled-components"
import CORES from "../constantes/Cores"
import MyContext from "../provedores/Context"

export default function Header () {
    const {login} = useContext(MyContext)
    return (
        <Background>
                <Texto>Trackit</Texto>
                <Icon src={login.image} alt="perfil"/>
        </Background>
    )
}

const Background = styled.div`
    height: 70px;
    width: 100%;
    background-color: ${CORES.header};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;

    position: fixed;
    top: 0;
    left: 0;
`
const Texto = styled.div`
    font-family: Playball;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};
`
const Icon = styled.img`
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
`