import styled from "styled-components";
import CORES from "../constantes/Cores";
import Footer from "../header e footer/Footer";
import Header from "../header e footer/Header";
import ContainerHabitos from "./ContainerHabitos";
import Topo from "./Topo";

export default function PageHabitos () {
    return(
        <>
            <Header/>
            <Background>
                <Topo/>
                <ContainerHabitos/>
            </Background>
            <Footer/>           
        </>

    )
}

const Background = styled.div`
    width: 100%;
    height: calc(100vh - 140px); 

    background-color: ${CORES.background};

    margin-top: 70px;
    margin-bottom: 70px;

    padding-top: 29px;
`
