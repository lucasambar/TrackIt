import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import CORES from "../constantes/Cores";
import Footer from "../header e footer/Footer";
import Header from "../header e footer/Header";
import MyContext from "../provedores/Context";
import ContainerHabitos from "./ContainerHabitos";
import Topo from "./Topo";

export default function PageHabitos () {
    const {login, setCards} = useContext(MyContext)
    
    function atualizaHabitos () {
        const config = {
            headers: {
                "Authorization": `Bearer ${login.token}`
            }
        } 

        let promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promessa.then(response => setCards(response.data))
        promessa.catch(erro => console.log(erro.response.data))
    }

    return(
        <>
            <Header/>
            <Background>
                <Topo atualizaHabitos={atualizaHabitos}/>
                <ContainerHabitos atualizaHabitos={atualizaHabitos}/>
            </Background>
            <Footer/>           
        </>

    )
}

const Background = styled.div`
    width: 100%;
    min-height: calc(100vh - 140px); 

    background-color: ${CORES.background};

    margin-top: 70px;
    margin-bottom: 70px;

    padding-top: 29px;
    padding-bottom: 15px;
`
